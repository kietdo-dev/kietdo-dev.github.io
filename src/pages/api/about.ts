import { NotionTable } from "@src/interfaces/notion";
import { Notion } from "@src/lib/notion";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tableType = JSON.parse(req.body).type as NotionTable;
    const getData = async () => await Notion.getApi(tableType);
    const result = await getData();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}
