import Link from "next/link";
import type { FC } from "react";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@src/components/atoms/Terminal";

type Props = {
  className?: string;
  data: {
    label: string;
    iconHref: string;
    clickable: boolean;
    href?: string;
    type: string;
  }[];
};

export const PersonalTerminal: FC<Props> = ({ className, data }) => {
  return (
    <Terminal className={className}>
      <TypingAnimation>&gt; pnpm dlx kietdo@latest init</TypingAnimation>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Verifying framework. Found Next.js.</span>
      </AnimatedSpan>

      {data.map((item, index) => {
        return (
          <AnimatedSpan
            key={index}
            delay={2500 + index * 500}
            className="text-green-500"
          >
            <span>
              ✔{" "}
              <Link href={item.href || ""} className="hover:underline">
                {item.type}: {item.label}
              </Link>
            </span>
          </AnimatedSpan>
        );
      })}

      <AnimatedSpan delay={data.length * 500 + 2500} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan>

      <TypingAnimation
        delay={(data.length + 1) * 500 + 2500}
        className="text-muted-foreground"
      >
        Success! Project initialization completed.
      </TypingAnimation>

      <TypingAnimation
        delay={(data.length + 2) * 500 + 2500}
        className="text-muted-foreground"
      >
        You may now add components.
      </TypingAnimation>
    </Terminal>
  );
};
