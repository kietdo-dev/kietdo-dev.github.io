import { Header } from "@src/components/molecules/Header";
import { type FC, type ReactNode, Fragment } from "react";
import { cn } from "@src/lib/utils";
import { fontMono, fontSans } from "@src/lib/fonts";
import { Footer } from "@src/components/molecules/Footer";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  const isDevelopment =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "LOCAL" ||
    process.env.NEXT_PUBLIC_ENVIRONMENT === "DEVELOPMENT";

  return (
    <div className={cn(fontMono.variable, fontSans.variable)}>
      <Header />
      <main className={cn("container")}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
