import type { NextPage } from "next";
import type { ReactNode } from "react";

import type EmptyLayout from "@src/layouts/EmptyLayout";
import type MainLayout from "@src/layouts/MainLayout";

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };
export type PageWithEmptyLayoutType = NextPage & {
  layout: typeof EmptyLayout;
};
export type PageWithLayoutType =
  | PageWithMainLayoutType
  | PageWithEmptyLayoutType;
export type LayoutProps = ({ children }: { children: ReactNode }) => ReactNode;
export default PageWithLayoutType;
