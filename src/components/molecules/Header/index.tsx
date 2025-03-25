import { useEffect, useState } from "react";
import Image from "next/image";
import type { FC } from "react";

import { MobileMenu } from "@src/components/molecules/Header/MobileMenu";
import { HEADER_MENU } from "@src/constants";
import { cn } from "@src/lib/utils";

export const Header: FC = () => {
  const [isStick, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "h-14 w-full container font-mono flex items-center justify-between ",
        "sticky z-10 bg-white/95 transition-all duration-700",
        { "animate-header-slide-down top-0": isStick }
      )}
    >
      <div className="flex gap-2 items-center italic font-bold">
        <Image src="./icons/code.svg" alt="icon" width={20} height={20} />K
      </div>
      <nav>
        <ul className="md:flex space-x-4 hidden">
          {HEADER_MENU.map((item) => (
            <li key={item.label} className="text-xs md:text-sm">
              <a
                href={item.href}
                className="py-0.5 px-1.5 hover:bg-slate-100 rounded transition-all duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <MobileMenu className="md:hidden" menu={HEADER_MENU} />
      </nav>
    </header>
  );
};
