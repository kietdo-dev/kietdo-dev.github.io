import type { DataResponse } from "@src/interfaces/notion";

export const Service = {
  getApi: async () => {
    const isLocal = process.env.ENV === "local";
    const result = await fetch(
      `${isLocal ? "http://localhost:3000/" : "https://dokiet.is-a.dev/"}/api/data`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data as DataResponse;
      });
    return result;
  },
};
