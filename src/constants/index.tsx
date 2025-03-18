export const HEADER_MENU = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Tech Stack",
    href: "/#tech-stack",
  },
  {
    label: "Work Experience",
    href: "/#work-experience",
  },
  {
    label: "Featured Projects",
    href: "/#featured-projects",
  },
];

export const PERSONAL_INFO = {
  ABOUT: {
    content: (
      <>
        <span>
          I am a software developer with nearly 3 years of experience in
          building websites and Fintech systems, with a strong foundation in
          JavaScript and major frameworks like React and Vue.
        </span>
        <br />
        <br />
        <span>
          Experienced in addressing browser compatibility issues and optimizing
          website performance. Always eager to learn and stay updated with new
          technologies to develop better technical solutions.
        </span>
      </>
    ),
  },
};

export const SKILLS = [
  "js.svg",
  "ts.svg",

  "react.svg",
  "vue.svg",
  "next.svg",
  "nuxt.svg",
  "nodejs.svg",

  "scss.svg",
  "tailwindcss.svg",

  "react-query.svg",
  "redux.svg",
  "auth0.svg",
  "playwright.svg",

  "eslint.svg",
  "git.svg",
  "vite.svg",

  "mongo.svg",
  "mysql.svg",
];

export const WORK_EXPERIENCE = [
  {
    title: "Front-end Developer",
    company: "Teqnological Asia",
    duration: "Mar 2023 - Now",
    logo: "/images/teq-icon.png",
    companyLink: "https://teqnological.asia/",
    description: [
      "Gained insight into the Fintech domain and continued expanding technical knowledge in front-end development",
      "Concentrated on strengthening soft skills, including communication, leadership, and problem-explaining abilities",
      "Contributed to generate internal technical documentation for team.",
      "Collaborate with stakeholders throughout the development process to create an effective and optimized design and approach.",
      "Provided assistance and mentorship to interns and junior members.",
      "Work in the R&D team to develop and apply new technologies to the codebase in order to improve the product.",
    ],
  },
  {
    title: "Front-end Developer",
    company: "FPT Software",
    duration: "Sep 2021 - Apr 2022",
    logo: "/images/fpt-icon.jpeg",
    companyLink: "https://www.fpt-software.com/",
    description: [
      "Joined the firm as a junior developer",
      "Analyze basic design, clear requirements, and estimate workload.",
      "Develop applications at the server-side and client-side",
      "Participate in the project under the guidance of the tech lead to ensure the quality of the product.",
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    name: "Ins**** - SaaS-based digital insurance system",
    description: [
      "Joined a team of five mid-senior developers in constructing the frontend for a large-scale SaaS-based insurance system",
      "Update and maintain a flexible front-end system that can be reused across various insurance types.",
      "Collaborated with the Backend team to design an efficient data flow and structure for various insurance types",
      "Implemented extensive customizations to the original app to meet the diverse needs of multiple clients",
    ],
    techStack: ["Vue", "NuxtJS", "Playwright", "Scss"],
  },
  {
    name: "Ho*** - Insurance Comparison Site",
    description: [
      "Served as a key member of the project, responsible for creating both the CMS and Client App.",
      "Researched and successfully applied the TanStack ecosystem to the project.",
      "Design and develop an SEO-compliant system using modern technologies based on specified client requirements, while also participating in the evaluation and standardization of the source code.",
      "Collaborate with other team members to resolve ”memory leaks” issues when integrating server-side rendering.",
    ],
    techStack: [
      "React",
      "NextJS",
      "TailwindCSS",
      "Tanstack Query",
      "Redux RTK",
      "React Hook Form",
      "Antd",
    ],
  },
  {
    name: "EazyMock - Easily way to create a mocking API tool with multiple features",
    description: [
      "Participate in the first phase of the project, building the framework with the project’s most important features.",
      "Assisted in designing and establishing the project’s architectural framework and structure.",
      "Inspected performance bottlenecks to implement a complete refactoring and optimization strategy.",
    ],
    techStack: [
      "React",
      "NextJS",
      "TailwindCSS",
      "Redux",
      "React Hook Form",
      "Next Auth",
    ],
  },
  {
    name: "NB*** - A CMS system providing a management solution for mobile device sales",
    description: [
      "Participated as a Junior Developer, developing and adding new features under the supervision of the leader.",
      "Engaged in communication with clients and stakeholders to clarify requirements and optimize the source code",
      "Participated in optimizing website performance across browsers and resolving issues during migration from the old system",
    ],
    techStack: ["React", "Scss", "Redux", "React Hook Form"],
  },
];
