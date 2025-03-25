import { AboutResponse, DataResponse, FeaturedProjectsResponse, NotionResponse, NotionTable, WorkExperienceResponse } from "@src/interfaces/notion";

export const Service = {
  getApi: async () => {
    const result = await fetch("/api/data", {
      method: "POST",
    }).then((response) => response.json())
      .then((data) => {
        return data as DataResponse
      });
    return result;
  },
}