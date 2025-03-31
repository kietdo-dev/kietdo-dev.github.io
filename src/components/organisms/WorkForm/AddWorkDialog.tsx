import { type FC, type FormEvent, type ReactNode, useState } from "react";

import { Button } from "@src/components/atoms/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@src/components/atoms/Dialog";
import { WorkField } from "@src/components/organisms/WorkForm/WorkField";
import { useCreateWorkExperience } from "@src/hooks/useCreateWorkExperience";
import type { WorkExperienceProps } from "@src/interfaces/data";

type Props = {
  className?: string;
  children: ReactNode;
  onRefetch: () => void;
};

const INIT_DATA: WorkExperienceProps = {
  companyName: "",
  jobTitle: "",
  name: "",
  description: "",
  duration: "",
  logoLink: "",
  companyLink: "",
};

export const AddWorkDialog: FC<Props> = ({ children, onRefetch }) => {
  const { mutateAsync } = useCreateWorkExperience(onRefetch);
  const [open, setOpen] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // get all the values from the form
    const formData = new FormData(e.currentTarget);
    const data: WorkExperienceProps = {
      companyName: formData.get("companyName") as string,
      jobTitle: formData.get("jobTitle") as string,
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      duration: formData.get("duration") as string,
      logoLink: formData.get("logoLink") as string,
      companyLink: formData.get("companyLink") as string,
    };

    const result = await mutateAsync({
      tableType: "WorkExperience",
      data,
    });

    setOpen(false);
    return result;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger onClick={() => setOpen(true)}>{children}</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Add Work Experience</DialogTitle>
          <form onSubmit={onSubmit}>
            <WorkField {...INIT_DATA} />
            <Button type="submit" className="w-20 mt-5">
              Create
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
