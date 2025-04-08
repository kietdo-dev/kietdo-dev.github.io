import { type FC, useEffect, useState } from "react";

import { PersonalTerminal } from "@src/components/molecules/PersonalInfo/PersonalTerminal";

const PERSONAL_INFO = [
  {
    label: "Middle Front-end Developer",
    iconHref: "code",
    clickable: false,
    type: "Level",
  },
  {
    label: "Ho Chi Minh City, Vietnam",
    iconHref: "location",
    clickable: false,
    type: "Location",
  },
  {
    label: "+84 039 860 8803",
    iconHref: "phone",
    clickable: true,
    href: "tel:+840398608803",
    type: "Phone",
  },
  {
    label: "dokiet1912@gmail.com",
    iconHref: "mail",
    clickable: true,
    href: "mailto:dokiet1912@gmail.com",
    type: "Email",
  },
  {
    label: "dokiet1912",
    iconHref: "linkedin",
    clickable: true,
    href: "https://www.linkedin.com/in/kietdo1912/",
    type: "LinkedIn",
  },
  {
    label: "Resume",
    iconHref: "cv",
    clickable: true,
    href: "./KietDo_Resume.pdf",
    type: "CV",
  },
];

type Props = {
  fetched?: boolean;
};

export const PersonalInfo: FC<Props> = ({ fetched }) => {
  const [key, setKey] = useState(0);
  useEffect(() => {
    if (fetched) {
      setKey(new Date().getTime());
    }
  }, [fetched]);

  return (
    <section className="flex flex-col gap-3 border-0 border-b border-dashed p-4 md:pb-8">
      <PersonalTerminal data={PERSONAL_INFO} key={key} />
    </section>
  );
};
