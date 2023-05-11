import loadStytch from "@/lib/loadStytch";
import { NextApiRequest, NextApiResponse } from "next";
import { SearchOperator } from "stytch";

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const stytch = loadStytch();
  const organizationToSearch = (req.query.search ?? "") as string;

  const organizations = await stytch.organizations.search({
    limit: 10,
    query: {
      operator: SearchOperator.AND,
      operands: [
        {
          filter_name: "organization_name_fuzzy",
          filter_value: organizationToSearch,
        },
      ],
    },
  });

  return res.send({ data: organizations.organizations });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getHandler(req, res);
    default:
      return res.status(405).send({ message: "method not allowed" });
  }
}
