import loadStytch from "@/lib/loadStytch";
import { getSession } from "@/lib/sessionService";
import { NextApiRequest, NextApiResponse } from "next";
import { StytchError } from "stytch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  const query = req.query as { organizationId: string };
  const body = req.body as {
    organization_name: string;
    email_allowed_domains: string[];
    organization_logo_url: string;
    wordmark_logo_url: string;
  };

  if (
    !session ||
    session.organization.organization_id !== query.organizationId
  ) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    await loadStytch().organizations.update({
      organization_id: query.organizationId,
      email_allowed_domains: body.email_allowed_domains ?? [],
      organization_logo_url: body.organization_logo_url,
      trusted_metadata: {
        wordmark_logo_url: body.wordmark_logo_url,
      },
    });
  } catch (error) {
    if (
      error instanceof StytchError &&
      error.error_type == "organization_settings_domain_too_common"
    ) {
      return res.status(422).send({ message: error.error_message });
    }
  }
  return res.end();
}
