import { WORK_EXPERIENCE } from "@src/constants";
import { cn } from "@src/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const WorkExperience: FC = () => {
  return (
    <>
      {WORK_EXPERIENCE.map((exp, index) => (
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
                src={exp.logo}
                alt={exp.company}
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
                  {exp.company}
                </Link>{" "}
                - {exp.title}
              </span>
            </div>
            <span className="pl-[2.875rem] md:pl-0 text-xs">
              {exp.duration}
            </span>
          </div>
          <div className="flex flex-col gap-5 my-5">
            {exp.description.map((desc, i) => (
              <p key={i} className="">
                - {desc}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
