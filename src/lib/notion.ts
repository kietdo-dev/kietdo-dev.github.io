import { Client } from "@notionhq/client";
import { NotionTable } from "@src/interfaces/notion";
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const notionToken = process.env.NOTION_TOKEN;
const notionDbID = process.env.NOTION_ABOUT_TABLE_ID;


export function getDBType(tableType: NotionTable) {
  switch (tableType) {
    case "About":
      return process.env.NOTION_ABOUT_TABLE_ID;
    case "WorkExperience":
      return process.env.NOTION_WORK_EXPERIENCE_TABLE_ID;
    case "FeaturedProjects":
      return process.env.NOTION_FEATURED_PROJECTS_TABLE_ID;
    default:
      return ""
  }
}

export const Notion = {
  getApi: async (tableType: string) => {
    if (notionToken && notionDbID) {
      const response = await notion.databases.query({
        database_id: notionDbID,
      });
      return response;
    }
    return null;
  },
}