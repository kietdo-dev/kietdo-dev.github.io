export type NotionTable = "About" | "WorkExperience" | "FeaturedProjects";

export type NotionRichTextType = {
  rich_text: {
    text: {
      content: string
      link: null | string
    }
    type: string
  }[]
}

export type NotionTitleType = {
  title: {
    text: {
      content: string
      link: null | string
    }
    type: string
  }[]
}

export type NotionDateType = {
  date: string
  type: string
}

export type NotionSelectType = {
  select: {
    color: string
    id: string
    name: string
  }
}

export type NotionResponse<T> = {
  results: T[]
}

export type AboutResponse = {
  properties: {
    Date: NotionDateType
    Description: NotionRichTextType
    Name: NotionTitleType
    Status: NotionSelectType
  }
}

export type WorkExperienceResponse = {
  properties: {
    CompanyName: NotionRichTextType
    Name: NotionTitleType
    Description: NotionRichTextType
    JobTitle: NotionRichTextType
    LogoLink: NotionRichTextType;
    Duration: NotionRichTextType;
    CompanyLink: NotionRichTextType;
  }
}

export type FeaturedProjectsResponse = {
  properties: {
    Description: NotionRichTextType
    Name: NotionTitleType
    TechStack: NotionRichTextType
  }
}

export type DataResponse = {
  About: NotionResponse<AboutResponse>
  WorkExperience: NotionResponse<WorkExperienceResponse>
  FeaturedProjects: NotionResponse<FeaturedProjectsResponse>
}

export type Data = {
  About: AboutResponse
  WorkExperience: WorkExperienceResponse
  FeaturedProjects: FeaturedProjectsResponse
}