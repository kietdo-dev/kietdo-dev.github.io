import { useEffect, useState } from "react";
import Image from "next/image";
import type { FC } from "react";
import { TypeAnimation } from "react-type-animation";

import {
  EnglishHelloEffect,
  HelloEffect,
} from "@src/components/atoms/HelloEffect";
import { cn } from "@src/lib/utils";

const TMP_AVATAR = "/images/avatar.jpg";
const NAME = "Kiệt Đỗ";

export const Hero: FC = () => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMode(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex h-80 w-full items-center justify-center">
        {mode ? <EnglishHelloEffect /> : <HelloEffect />}
      </div>
      <div className="flex gap-7 flex-wrap">
        <Image
          src={TMP_AVATAR}
          alt="avatar"
          width={160}
          height={160}
          className={cn(
            "aspect-square rounded-full overflow-hidden",
            "size-32 ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40"
          )}
        />
        <div className="flex flex-col md:pb-10 md:self-end gap-2 flex-1">
          <span className="flex items-center font-heading text-3xl font-semibold">
            {NAME}
          </span>
          <TypeAnimation
            sequence={[
              "Front-end Developer.",
              1000,
              "Software Engineer.",
              1000,
              "Code with love, fix bugs with passion.",
              1000,
            ]}
            wrapper="span"
            speed={2}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
      </div>
    </div>
  );
};
