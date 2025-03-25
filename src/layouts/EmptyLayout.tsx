import { Fragment } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const EmptyLayout: FC<Props> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default EmptyLayout;
