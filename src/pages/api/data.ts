import type { NextApiRequest, NextApiResponse } from "next";

import type { NotionTable } from "@src/interfaces/notion";
import { Notion } from "@src/lib/notion";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data: { [key: string]: unknown } = {};
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
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
