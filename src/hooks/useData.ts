import type { ProjectProps, WorkExperienceProps } from "@src/interfaces/data";
import type {
  FeaturedProjectsResponse,
  WorkExperienceResponse,
} from "@src/interfaces/notion";
import { Service } from "@src/services/about";
import { useQuery } from "@tanstack/react-query";

export const useData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const result = await Service.getApi();
      return result;
    },
    select: (data) => {
      return {
        About:
          data.About.results[0].properties.Description.rich_text[0].text
            .content,
        WorkExperience: data.WorkExperience.results.map((result) => {
          const data = result as WorkExperienceResponse;
          return {
            companyName: data.properties.CompanyName.rich_text[0].text.content,
            name: data.properties.Name.title[0].text.content,
            description: data.properties.Description.rich_text[0].text.content,
            jobTitle: data.properties.JobTitle.rich_text[0].text.content,
            logoLink: data.properties.LogoLink.rich_text[0].text.content,
            duration: data.properties.Duration.rich_text[0].text.content,
            companyLink: data.properties.CompanyLink.rich_text[0].text.content,
          } as WorkExperienceProps;
        }),
        FeaturedProjects: data.FeaturedProjects.results.map((project) => {
          const result = project as FeaturedProjectsResponse;
          return {
            description:
              result.properties.Description.rich_text[0].text.content,
            name: result.properties.Name.title[0].text.content,
            techStack:
              result.properties.TechStack.rich_text[0].text.content.split(", "),
          } as ProjectProps;
        }),
      };
    },
  });
};
