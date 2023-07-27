import { RETOOL_WORKFLOW_API_KEY } from "@/config";
import axios from "axios";

export function triggerRetoolWorkslows(workflowId: string, data: object) {
  const url = new URL(
    `https://api.retool.com/v1/workflows/${workflowId}/startTrigger`
  );
  url.searchParams.set("workflowApiKey", RETOOL_WORKFLOW_API_KEY);
  return axios.post(url.toString(), data);
}
