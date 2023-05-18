import loadStytch from "@/lib/loadStytch";
import { getSession } from "@/lib/sessionService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  if (!session) {
    return res.send({ message: "Unauthorized" });
  }
  const { organizationId, memberId } = req.query as {
    organizationId: string;
    memberId: string;
  };
  const body = req.body as {
    firstName: string;
    lastName: string;
    avatarUrl: string;
    emailSubscribed: boolean;
  };

  if (
    organizationId !== session.member_session.organization_id ||
    memberId !== session.member_session.member_id
  ) {
    return res.send({ message: "Unauthorized" });
  }

  const stytchClient = loadStytch();
  await stytchClient.organizations.members.update({
    member_id: memberId,
    organization_id: organizationId,
    untrusted_metadata: {
      firstName: body.firstName,
      lastName: body.lastName,
      avatarUrl: body.avatarUrl,
      emailSubscribed: body.emailSubscribed,
    },
  });

  return res.end();
}
