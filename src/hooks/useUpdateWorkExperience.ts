import type { WorkExperienceProps } from "@src/interfaces/data";
import type { NotionTable } from "@src/interfaces/notion";
import { useMutation } from "@tanstack/react-query";

export const useUpdateWorkExperience = () => {
  return useMutation({
    mutationKey: ["updateWorkExperience"],
    mutationFn: async ({
      data,
      tableType,
      index,
    }: {
      tableType: NotionTable;
      data: WorkExperienceProps;
      index: number;
    }) => {
      const response = await fetch("/api/notion/updateWorkExperience", {
        method: "POST",
        body: JSON.stringify({
          tableType,
          data,
          index,
        }),
      });
      return response.json();
    },
  });
};
