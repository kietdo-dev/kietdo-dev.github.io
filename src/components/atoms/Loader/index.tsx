import { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen absolute top-0 left-0 w-full bg-white opacity-80 z-50">
      <div className="animate-spin rounded-full size-32 border-t-2 border-b-2 border-gray-900 transition-all" />
    </div>
  );
};
