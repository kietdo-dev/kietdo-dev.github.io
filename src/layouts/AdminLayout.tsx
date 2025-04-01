import { type FC, type ReactNode } from "react";

import { fontMono, fontSans } from "@src/lib/fonts";
import { cn } from "@src/lib/utils";

interface Props {
  children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div className={cn(fontMono.variable, fontSans.variable)}>
      <main
        className={cn(
          "container",
          "flex min-h-screen min-w-screen justify-center items-center",
          "bg-[linear-gradient(to_top,_#fad0c4_0%,_#ffd1ff_100%)]"
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
