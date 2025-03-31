import type { NotionTable } from "@src/interfaces/notion";
import { useMutation } from "@tanstack/react-query";

export const useUpdateAbout = () => {
  return useMutation({
    mutationKey: ["updateAbout"],
    mutationFn: async ({
      data,
      tableType,
    }: {
      tableType: NotionTable;
      data: string;
    }) => {
      const response = await fetch("/api/notion/updateAbout", {
        method: "POST",
        body: JSON.stringify({
          tableType,
          data,
        }),
      });
      return response.json();
    },
  });
};
