import { type FC, type FormEvent } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@src/components/atoms/Accordion";
import { Button } from "@src/components/atoms/Button";
import { AddWorkDialog } from "@src/components/organisms/WorkForm/AddWorkDialog";
import { WorkField } from "@src/components/organisms/WorkForm/WorkField";
import { useUpdateWorkExperience } from "@src/hooks/useUpdateWorkExperience";
import type { WorkExperienceProps } from "@src/interfaces/data";
import { cn } from "@src/lib/utils";

type WorkFormProps = {
  className?: string;
  data?: WorkExperienceProps[];
  onRefetch: (value: number) => void;
};
export const WorkForm: FC<WorkFormProps> = ({ className, data, onRefetch }) => {
  const { mutateAsync } = useUpdateWorkExperience();

  const onSubmit = (e: FormEvent, index: number) => {
    e.preventDefault();
    mutateAsync({
      tableType: "WorkExperience",
      data: {
        companyName: (
          document.getElementById("companyName") as HTMLInputElement
        ).value,
        jobTitle: (document.getElementById("jobTitle") as HTMLInputElement)
          .value,
        name: (document.getElementById("name") as HTMLInputElement).value,
        description: (
          document.getElementById("description") as HTMLTextAreaElement
        ).value,
        duration: (document.getElementById("duration") as HTMLInputElement)
          .value,
        logoLink: (document.getElementById("logoLink") as HTMLInputElement)
          .value,
        companyLink: (
          document.getElementById("companyLink") as HTMLInputElement
        ).value,
      },
      index,
    });
  };

  const onReload = () => {
    const date = Date.now();
    onRefetch(date);
  };

  return (
    <>
      <div className="w-full flex justify-end relative my-5 h-10">
        <AddWorkDialog onRefetch={onReload}>
          <span className="absolute right-0 cursor-pointer bg-black text-white p-2 rounded">
            + Add Working Experience
          </span>
        </AddWorkDialog>
      </div>

      {data && (
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-3"
        >
          {data.map((work, index) => (
            <form
              className={cn("", className)}
              onSubmit={(e) => onSubmit(e, index)}
              key={index}
              id={index.toString()}
            >
              <div className="border border-black rounded p-3">
                <AccordionItem
                  value={work.companyName}
                  className="cursor-pointer"
                >
                  <AccordionTrigger className="font-sans text-lg font-semibold">
                    <div className="flex items-center gap-4">
                      <span className="cursor-pointer">{work.companyName}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3">
                    <WorkField {...work} />
                  </AccordionContent>
                </AccordionItem>
              </div>
              <Button type="submit" className="w-20 mt-2">
                Submit
              </Button>
            </form>
          ))}
        </Accordion>
      )}
    </>
  );
};
