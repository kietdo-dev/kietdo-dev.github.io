import { Client } from "@notionhq/client";
import type { WorkExperienceProps } from "@src/interfaces/data";
import type { NotionTable } from "@src/interfaces/notion";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const notionToken = process.env.NOTION_TOKEN;

function getDBType(tableType: NotionTable) {
  switch (tableType) {
    case "About":
      return process.env.NOTION_ABOUT_TABLE_ID;
    case "WorkExperience":
      return process.env.NOTION_WORK_EXPERIENCE_TABLE_ID;
    case "FeaturedProjects":
      return process.env.NOTION_FEATURED_PROJECTS_TABLE_ID;
    default:
      return "NOT_FOUND";
  }
}

const formatProps = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const Notion = {
  getApi: async (tableType: NotionTable) => {
    if (notionToken) {
      const response = await notion.databases.query({
        database_id: getDBType(tableType as NotionTable) || "",
      });
      return response;
    }
    return null;
  },

  updateAbout: async (tableType: NotionTable, data: string) => {
    if (notionToken) {
      const rawData = await Notion.getApi(tableType);
      if (!rawData) return null;

      const page = rawData.results[0];
      const rawProperties = "properties" in page ? page.properties : null;
      if (!rawProperties) return null;

      const response = await notion.pages.update({
        page_id: page.id,
        properties: {
          Description: {
            rich_text: [
              {
                text: {
                  content: data,
                },
              },
            ],
          },
        },
      });
      return response;
    }
    return null;
  },

  updateWorkExperience: async (
    tableType: NotionTable,
    data: WorkExperienceProps,
    index: number
  ) => {
    if (notionToken) {
      const rawData = await Notion.getApi(tableType);
      if (!rawData) return null;
      const page = rawData.results[index];
      const rawProperties = "properties" in page ? page.properties : null;
      if (!rawProperties) return null;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const propertiesObj: Record<string, any> = {};
      Object.keys(data).map((key) => {
        if (key === "name") return;
        propertiesObj[formatProps(key)] = {
          rich_text: [
            {
              text: {
                content: data[key as keyof WorkExperienceProps],
              },
            },
          ],
        };
      });

      const response = await notion.pages.update({
        page_id: page.id,
        properties: propertiesObj,
      });
      return response;
    }
    return null;
  },

  createWorkExperience: async (
    tableType: NotionTable,
    data: WorkExperienceProps
  ) => {
    if (notionToken) {
      // Define property mappings
      const propertyMappings = {
        name: { type: "title", field: "Name" },
        companyName: { type: "rich_text", field: "CompanyName" },
        jobTitle: { type: "rich_text", field: "JobTitle" },
        description: { type: "rich_text", field: "Description" },
        duration: { type: "rich_text", field: "Duration" },
        logoLink: { type: "rich_text", field: "LogoLink" },
        companyLink: { type: "rich_text", field: "CompanyLink" },
      };

      // Build properties object
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const properties: Record<string, any> = {};

      // Process each field according to its type
      for (const [key, config] of Object.entries(propertyMappings)) {
        const value = data[key as keyof WorkExperienceProps];
        if (value !== undefined) {
          const textContent = { text: { content: value } };
          properties[config.field] = {
            [config.type]: [textContent],
          };
        }
      }

      const response = await notion.pages.create({
        parent: {
          database_id: getDBType(tableType) || "",
        },
        properties,
      });
      return response;
    }
    return null;
  },
};
