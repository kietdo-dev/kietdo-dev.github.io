import type { NextApiRequest, NextApiResponse } from "next";

import { Notion } from "@src/lib/notion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { tableType, data, index } = JSON.parse(req.body);
    const response = await Notion.updateWorkExperience(tableType, data, index);
    res.status(200).json(response);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
