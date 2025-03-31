import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { username, password } = req.body;
    const authUsername = process.env.AUTH_USERNAME;
    const authPassword = process.env.AUTH_PASSWORD;
    if (!authUsername || !authPassword) {
      res.status(500).json({ error: "Auth credentials not set" });
      return;
    }

    if (!username || !password) {
      res.status(400).json({ error: "Username or password not provided" });
      return;
    }

    if (username !== authUsername || password !== authPassword) {
      res.status(401).json({ error: "Username or Password not correct" });
      return;
    }

    // Set the access token cookie with secure attributes
    setCookie("accessToken", "dokiet", {
      req,
      res,
      secure: true,
      httpOnly: true,
    });
    res.status(200).json({
      isAuthenticated: true,
    });
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
