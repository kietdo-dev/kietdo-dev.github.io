import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import { WORK_EXPERIENCE } from "@src/constants";
import type { WorkExperienceProps } from "@src/interfaces/data";
import { cn } from "@src/lib/utils";

export const WorkExperience: FC<WorkExperienceProps[]> = (data) => {
  const workExperience =
    Object.values(data).sort((a, b) => {
      return (
        new Date(b.duration.split(" - ")[0]).getTime() -
        new Date(a.duration.split(" - ")[0]).getTime()
      );
    }) || WORK_EXPERIENCE;

  return (
    <>
      {workExperience &&
        workExperience.map((exp, index) => (
          <div
            className={cn(
              "flex flex-col my-5 not-first-of-type:pt-6",
              "not-first-of-type:border-t-2 border-double"
            )}
            key={index}
          >
            <div className="flex justify-between md:items-center flex-col md:flex-row md:gap-2">
              <div className="text-[18px] font-sans font-bold flex items-center gap-3">
                <Image
                  src={exp.logoLink}
                  alt={exp.companyName}
                  width={32}
                  height={32}
                  className="size-8"
                />
                <span>
                  <Link
                    href={exp.companyLink}
                    className="hover:underline"
                    target="_blank"
                  >
                    {exp.companyName}
                  </Link>{" "}
                  - {exp.jobTitle}
                </span>
              </div>
              <span className="pl-[2.875rem] md:pl-0 text-xs">
                {exp.duration}
              </span>
            </div>
            <div className="flex flex-col gap-5 my-5">
              <p className="text-[14px]">{exp.description}</p>
            </div>
          </div>
        ))}
    </>
  );
};
