import { SKILLS } from "@src/constants";
import Image from "next/image";
import { FC, useEffect } from "react";
import * as motion from "motion/react-client";

export const SkillSet: FC = () => {
  return (
    <div className="flex flex-wrap gap-9 skills">
      {SKILLS.map((skill, index) => (
        <motion.div
          whileInView={{ opacity: [0, 0.5, 1], y: [50, 0] }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          key={skill}
          transition={{
            delay: 0.1 * index,
            repeat: 0,
            duration: 0.3,
          }}
        >
          <Image
            src={`/icons/techStack/${skill}`}
            alt={skill}
            className="size-8"
            width={32}
            height={32}
          />
        </motion.div>
      ))}
    </div>
  );
};
