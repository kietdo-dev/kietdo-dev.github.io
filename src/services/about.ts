import { AboutResponse, NotionResponse, NotionTable } from "@src/interfaces/notion";

export const Service = {
  getApi: async (tableType: NotionTable) => {
    const result = await fetch("/api/about", {
      body: JSON.stringify({ type: tableType }),
      method: "POST",
    }).then((response) => response.json())
      .then((data) => {
        return data as NotionResponse<AboutResponse>;
      });
    return result;
  },
}