import type { WorkExperienceProps } from "@src/interfaces/data";
import type { NotionTable } from "@src/interfaces/notion";
import { useMutation } from "@tanstack/react-query";

export const useCreateWorkExperience = (onRefetch?: () => void) => {
  return useMutation({
    mutationKey: ["createWorkExperience"],
    mutationFn: async ({
      data,
      tableType,
    }: {
      tableType: NotionTable;
      data: WorkExperienceProps;
    }) => {
      const response = await fetch("/api/notion/createWorkExperience", {
        method: "POST",
        body: JSON.stringify({
          tableType,
          data,
        }),
      });
      return response.json();
    },
    onSettled: () => {
      onRefetch?.();
    },
  });
};
