import type { CreateProjectREQ } from "@src/interfaces/data";
import { useMutation } from "@tanstack/react-query";

export const useCreateProject = ({ onRefetch }: { onRefetch?: () => void }) => {
  return useMutation({
    mutationKey: ["createProject"],
    mutationFn: async ({ data }: { data: CreateProjectREQ }) => {
      const response = await fetch("/api/notion/createProject", {
        method: "POST",
        body: JSON.stringify({
          tableType: "FeaturedProjects",
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
