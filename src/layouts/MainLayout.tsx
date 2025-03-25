import { type FC, type ReactNode } from "react";

import { Footer } from "@src/components/molecules/Footer";
import { Header } from "@src/components/molecules/Header";
import { fontMono, fontSans } from "@src/lib/fonts";
import { cn } from "@src/lib/utils";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={cn(fontMono.variable, fontSans.variable)}>
      <Header />
      <main className={cn("container")}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
