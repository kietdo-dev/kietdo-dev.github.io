import { NotionTable } from "@src/interfaces/notion";
import { Notion } from "@src/lib/notion";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data: { [key: string]: any } = {}
    const tables = ["About", "WorkExperience", "FeaturedProjects"];

    const results = await Promise.all(
      tables.map(async (type) => {
        const result = await Notion.getApi(type as NotionTable);
        return { type, result };
      })
    );

    results.forEach(({ type, result }) => {
      data[type] = result;
    });

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}
