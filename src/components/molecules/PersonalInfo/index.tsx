import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const ABSOLUTE_PATH = "/icons/";
const PERSONAL_INFO = [
  {
    label: "Middle Front-end Developer",
    iconHref: "code",
  },
  {
    label: "Ho Chi Minh City, Vietnam",
    iconHref: "location",
  },
  {
    label: "+84 039 860 8803",
    iconHref: "phone",
    clickable: true,
    href: "tel:+840398608803",
  },
  {
    label: "dokiet1912@gmail.com",
    iconHref: "mail",
    clickable: true,
    href: "mailto:dokiet1912@gmail.com",
  },
  {
    label: "dokiet1912",
    iconHref: "linkedin",
    clickable: true,
    href: "https://www.linkedin.com/in/kietdo1912/",
  },
  {
    label: "Resume",
    iconHref: "cv",
    clickable: true,
    href: "./KietDo_Resume.pdf",
  },
];

export const PersonalInfo: FC = () => {
  return (
    <section className="flex flex-col gap-3 border-0 border-b border-dashed p-4 md:pb-8">
      {PERSONAL_INFO.map((info) => (
        <div
          key={info.label}
          className="flex gap-4 items-center font-mono text-sm font-medium"
        >
          <Image
            src={`${ABSOLUTE_PATH}${info.iconHref}.svg`}
            alt={info.iconHref}
            className="size-4"
            width={16}
            height={16}
          />
          {info.clickable && info.href ? (
            <Link
              href={info.href}
              target="_blank"
              className="hover:underline underline-offset-4"
            >
              {info.label}
            </Link>
          ) : (
            <span>{info.label}</span>
          )}
        </div>
      ))}
    </section>
  );
};
