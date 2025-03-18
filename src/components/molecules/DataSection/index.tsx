import { FC, ReactNode } from "react";
import { cn } from "@src/lib/utils";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};

export const DataSection: FC<Props> = ({ children, title, className = "" }) => {
  return (
    <section
      className={cn("flex flex-col", className)}
      id={title.toLowerCase().replace(" ", "-")}
    >
      <h2 className="font-heading text-3xl font-semibold px-4">{title}</h2>
      <hr className="my-4 border-0 border-b border-dashed" />
      <div className="px-4 font-mono leading-relaxed">{children}</div>
    </section>
  );
};
