import { type FC, type FormEvent, useState } from "react";

import { Button } from "@src/components/atoms/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@src/components/atoms/Dialog";
import { useCreateProject } from "@src/hooks/useCreateProject";
import type { CreateProjectREQ } from "@src/interfaces/data";
import { cn } from "@src/lib/utils";

type Props = {
  className?: string;
  onRefetch?: () => void;
};

export const AddProjectDialog: FC<Props> = ({ className, onRefetch }) => {
  const [open, setOpen] = useState(false);
  const { mutateAsync } = useCreateProject({ onRefetch });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // get all the values from the form
    const formData = new FormData(e.currentTarget);
    const data: CreateProjectREQ = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      techStack: formData.get("techStack") as string,
    };
    mutateAsync({ data });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        onClick={() => setOpen(true)}
        className="bg-black text-white font-semibold py-2 px-4 rounded-md w-1/5 mt-7"
      >
        Add New
      </DialogTrigger>
      <DialogContent className={cn("", className)}>
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
          <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                id="name"
                className="w-full outline-0 border-[1px] border-black p-2 rounded"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                id="description"
                className="w-full outline-0 border-[1px] border-black p-2 rounded resize-none h-52"
                name="description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="techStack" className="font-semibold">
                Tech Stack
              </label>
              <input
                id="techStack"
                className="w-full outline-0 border-[1px] border-black p-2 rounded"
                name="techStack"
              />
            </div>
            <Button type="submit" className="w-20 mt-5">
              Create
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
