import type { NextApiRequest, NextApiResponse } from "next";
import { deleteCookie } from "cookies-next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    deleteCookie("accessToken", { req, res });
    res.status(200).json({ success: true });
    // Or if you want to redirect:
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
