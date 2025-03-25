import Image from "next/image";
import * as motion from "motion/react-client";
import type { FC } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@src/components/atoms/Accordion";
import { Badge } from "@src/components/atoms/Badge";
import { FEATURED_PROJECTS } from "@src/constants";
import type { ProjectProps } from "@src/interfaces/data";

export const FeaturedProjects: FC<ProjectProps[]> = (data) => {
  const projects = data || FEATURED_PROJECTS;

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {Object.values(projects).map((project, index) => (
          <AccordionItem value={project.name} key={index}>
            <AccordionTrigger className="font-sans text-lg font-semibold">
              <div className="flex items-center gap-4">
                <Image
                  src="./icons/project.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="size-5"
                />
                <span className="cursor-pointer">{project.name}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-6">
              <div>
                <p className="text-sm whitespace-pre-wrap">
                  {project.description}
                </p>
                <div className="flex flex-wrap mt-4 gap-y-2">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="mr-2 cursor-pointer transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <span className="text-xs text-gray-700 flex gap-3 border p-2 border-dashed mt-5">
        <Image
          src="./icons/left-arrow.svg"
          alt="icon"
          width={16}
          height={16}
          className="size-4"
        />
        <motion.div
          className="underline underline-offset-2"
          whileInView={{ opacity: [0, 0.5, 1], x: [50, 0] }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
        >
          Note: Due to confidential disclosure agreement, full names of the
          projects above are partially hidden
        </motion.div>
      </span>
    </div>
  );
};
