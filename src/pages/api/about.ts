import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const notionToken = process.env.NOTION_TOKEN;
  const notionDbID = process.env.NOTION_ABOUT_TABLE_ID;

  try {
    const getApi = async () => {
      if (notionToken && notionDbID) {
        const response = await notion.databases.query({
          database_id: notionDbID,
        });
        return response;
      }
      return null;
    };

    const result = await getApi();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}
