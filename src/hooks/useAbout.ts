import { Service } from "@src/services/about"
import { useQuery } from "@tanstack/react-query"

export const useAbout = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      return Service.getApi("About")
    },
    select: (data) => data?.results[0].properties.Description.rich_text[0].text.content,
  })
}