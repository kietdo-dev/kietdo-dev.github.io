import type { FC, ReactNode } from "react";
import { Fragment } from "react";

interface Props {
  children: ReactNode;
}

const EmptyLayout: FC<Props> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default EmptyLayout;
