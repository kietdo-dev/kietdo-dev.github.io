import { FC } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@src/components/atoms/Popover";
import Image from "next/image";
import { cn } from "@src/lib/utils";

type Props = {
  className?: string;
  menu: { label: string; href: string }[];
};

export const MobileMenu: FC<Props> = ({ className, menu }) => {
  return (
    <div className={cn("pr-[50px]", className)}>
      <Popover>
        <PopoverTrigger>
          <div
            className={cn(
              "size-8 rounded-full flex items-center justify-center",
              "relative -mr-[50px]"
            )}
          >
            <Image
              src="./icons/menu.svg"
              alt="menu.svg"
              className="size-4 absolute translate-x-[2px] translate-y-[5px]"
              width={16}
              height={16}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col space-y-2 p-2 px-4 font-mono">
            {menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-dotted not-last-of-type:pb-2 not-last-of-type:border-b "
              >
                {item.label}
              </a>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
