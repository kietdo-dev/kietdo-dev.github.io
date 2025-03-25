import Image from "next/image";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="border-grid border-t py-6 md:py-0 mt-10">
      <div className="container-wrapper">
        <div className="px-[10%] py-4 flex justify-between">
          <div className="text-balance font-mono leading-loose text-muted-foreground md:text-left">
            Built by KietDo © 2025
          </div>
          <div className="flex gap-2 items-center italic">
            <Image src="./icons/code.svg" alt="icon" width={20} height={20} />K
          </div>
        </div>
      </div>
    </footer>
  );
};
