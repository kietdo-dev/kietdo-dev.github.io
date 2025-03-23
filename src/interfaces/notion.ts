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
