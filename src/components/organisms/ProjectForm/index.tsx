import type { FC } from "react";

import { FeaturedProjects } from "@src/components/molecules/FeaturedProjects";
import { AddProjectDialog } from "@src/components/organisms/ProjectForm/AddProjectDialog";
import type { ProjectProps } from "@src/interfaces/data";

type Props = {
  className?: string;
  data: ProjectProps[];
  onRefetch?: () => void;
};

export const ProjectForm: FC<Props> = ({ data, onRefetch }) => {
  return (
    <div className="flex flex-col gap-5">
      <AddProjectDialog onRefetch={onRefetch} />
      <FeaturedProjects {...data} />
    </div>
  );
};
