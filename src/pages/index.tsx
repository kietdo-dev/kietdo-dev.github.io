import Head from "next/head";
import { Hero } from "@src/components/molecules/Hero";
import { DataSection } from "@src/components/molecules/DataSection";
import { PERSONAL_INFO } from "@src/constants";
import { PersonalInfo } from "@src/components/molecules/PersonalInfo";
import { SkillSet } from "@src/components/atoms/SkillSet";
import { WorkExperience } from "@src/components/molecules/WorkExperience";
import { FeaturedProjects } from "@src/components/molecules/FeaturedProjects";
import { useData } from "@src/hooks/useData";
import { Loader } from "@src/components/atoms/Loader";
import { useEffect } from "react";

export default function Home() {
  const { data, isFetching: loading } = useData();

  return (
    <>
      <Head>
        <title>Kiet Do | Front-End Developer</title>
        <meta
          name="description"
          content="Portfolio of Kiet Do, a front-end developer showcasing projects and professional experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-5 md:gap-9">
        <Hero />
        <PersonalInfo />

        {!loading ? (
          <>
            <DataSection title="About">
              {data?.About || PERSONAL_INFO.ABOUT.content}
            </DataSection>

            <DataSection title="Tech Stack">
              <SkillSet />
            </DataSection>

            {data?.WorkExperience && data.WorkExperience?.length > 0 && (
              <DataSection title="Work Experience">
                <WorkExperience {...data.WorkExperience} />
              </DataSection>
            )}

            <DataSection title="Featured Projects">
              {data?.FeaturedProjects && (
                <FeaturedProjects {...data.FeaturedProjects} />
              )}
            </DataSection>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
