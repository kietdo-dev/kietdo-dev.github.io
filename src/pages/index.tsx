import { Fragment } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";

import { Loader } from "@src/components/atoms/Loader";
import { SkillSet } from "@src/components/atoms/SkillSet";
import { DataSection } from "@src/components/molecules/DataSection";
import { FeaturedProjects } from "@src/components/molecules/FeaturedProjects";
import { Hero } from "@src/components/molecules/Hero";
import { PersonalInfo } from "@src/components/molecules/PersonalInfo";
import { WorkExperience } from "@src/components/molecules/WorkExperience";
import { PERSONAL_INFO } from "@src/constants";
import { useData } from "@src/hooks/useData";
import { Service } from "@src/services/about";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export const getServerSideProps = (async () => {
  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery({
      queryKey: ["data"],
      queryFn: () => {
        return Service.getApi();
      },
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}) satisfies GetServerSideProps;

export default function Home() {
  const { data, isFetching: loading } = useData();

  return (
    <Fragment>
      <Head>
        <title>Kiet Do | Front-End Developer</title>
        <meta
          name="description"
          content="Portfolio of Kiet Do, a front-end developer showcasing projects and professional experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Kiet Do, Front-End Developer, Web Development, React, Next.js, Portfolio"
        />
        <meta name="author" content="Kiet Do" />
        <meta property="og:title" content="Kiet Do | Front-End Developer" />
        <meta
          property="og:description"
          content="Portfolio of Kiet Do, a front-end developer showcasing projects and professional experience"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dokiet.is-a.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kiet Do | Front-End Developer" />
        <meta
          name="twitter:description"
          content="Portfolio of Kiet Do, a front-end developer showcasing projects and professional experience"
        />
        <link rel="canonical" href="https://dokiet.is-a.dev" />
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
    </Fragment>
  );
}
