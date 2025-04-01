import type { FC } from "react";

import type { WorkExperienceProps } from "@src/interfaces/data";

export const WorkField: FC<WorkExperienceProps> = (data) => {
  const formatLabel = (key: string): string => {
    // First insert a space before each capital letter and then capitalize first letter
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <>
      {Object.keys(data).map((key, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <label htmlFor={key} className="font-semibold">
            {formatLabel(key)}
          </label>
          {key !== "description" ? (
            <input
              id={key}
              className="w-full outline-0 border-[1px] border-black p-2 rounded"
              defaultValue={data[key as keyof WorkExperienceProps]}
              name={key}
            />
          ) : (
            <textarea
              id="description"
              className="min-h-[300px] w-full outline-0 border-[1px] border-black p-2 rounded resize-none"
              defaultValue={data.description}
              name={key}
            />
          )}
        </div>
      ))}
    </>
  );
};
