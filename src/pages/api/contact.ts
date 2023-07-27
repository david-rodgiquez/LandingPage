import { triggerRetoolWorkflow } from "@/lib/retool";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body as {
      fullName: string;
      email: string;
      phone: string;
      message?: string;
    };
    await triggerRetoolWorkflow("b68604c9-f6d5-4170-b485-56e24103c350", data);
    return res.send({ message: "OK" });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return res.status(400).send({ message: error.response?.data.message });
    }
    return res.status(400).send({ message: (error as Error).message });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return postHandler(req, res);
    default:
      return res.status(405).send({ message: "method not allowed" });
  }
}
