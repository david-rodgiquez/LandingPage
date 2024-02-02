import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import { NotionToMarkdown } from "notion-to-md";

const token = process.env.NOTION_TOKEN;

export const notionHq = new Client({
  auth: token,
});
export const notionClient = new NotionAPI();
export const notionToMarkdown = new NotionToMarkdown({
  notionClient: notionHq,
});

// { authToken: token }
