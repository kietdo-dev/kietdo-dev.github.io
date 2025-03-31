import type { FC, FormEvent } from "react";

import { Button } from "@src/components/atoms/Button";
import { useUpdateAbout } from "@src/hooks/useUpdateAbout";
import { cn } from "@src/lib/utils";

type AboutFormProps = {
  className?: string;
  data?: string;
};

export const AboutForm: FC<AboutFormProps> = ({ className, data }) => {
  const { mutateAsync, isPending } = useUpdateAbout();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutateAsync({
      tableType: "About",
      data: (document.getElementById("about") as HTMLTextAreaElement).value,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex flex-col gap-5 w-full mt-5", className)}
    >
      <h1 className="mx-auto font-semibold text-2xl">About Form</h1>
      <textarea
        id="about"
        className="min-h-[400px] w-full outline-0 border-[1px] border-black p-2 rounded resize-none"
        defaultValue={data}
      />
      <Button type="submit" className="w-20" disabled={isPending}>
        Submit
      </Button>
    </form>
  );
};
