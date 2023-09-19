import type { NextApiRequest, NextApiResponse } from "next";
import loadStytch from "../../../lib/loadStytch";
import {
  clearIntermediateSession,
  getDiscoverySessionData,
  setSession,
} from "../../../lib/sessionService";
import { StytchError } from "stytch";
import { OrgService } from "@/lib/orgService";

const stytchClient = loadStytch();

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const discoverySessionData = getDiscoverySessionData(req, res);

  if (discoverySessionData.error) {
    return res.redirect(307, "/login");
  }

  const orgId = req.query.orgId;
  if (!orgId || Array.isArray(orgId)) {
    return res.redirect(307, "/discovery");
  }

  const exchangeSession = () => {
    if (discoverySessionData.isDiscovery) {
      return stytchClient.discovery.intermediateSessions.exchange({
        intermediate_session_token: discoverySessionData.intermediateSession,
        organization_id: orgId,
        session_duration_minutes: 60,
      });
    }
    return stytchClient.sessions.exchange({
      organization_id: orgId,
      session_jwt: discoverySessionData.sessionJWT,
    });
  };

  try {
    const { session_jwt, organization } = await exchangeSession();
    setSession(req, res, session_jwt);
    clearIntermediateSession(req, res);
    return res.redirect(307, `/${organization.organization_slug}/dashboard`);
  } catch (err) {
    const error = err as StytchError;
    console.error("Could not authenticate in callback", error);

    // This action or feature is not supported by your billing tier. Please visit https://stytch.com/dashboard/settings/pricing-plans for more information.
    if (error.error_type === "unauthorized_billing_permissions") {
      const result = await OrgService.findByID(orgId);
      if (result?.organization_slug) {
        return res.redirect(307, `/${result.organization_slug}/dashboard`);
      }
    }

    return res.redirect(307, "/discovery");
  }
}

export default handler;
