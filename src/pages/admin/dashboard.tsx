import { useState } from "react";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { Loader } from "@src/components/atoms/Loader";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@src/components/atoms/Tabs";
import { AboutForm } from "@src/components/organisms/AboutForm";
import { ProjectForm } from "@src/components/organisms/ProjectForm";
import { WorkForm } from "@src/components/organisms/WorkForm";
import { useData } from "@src/hooks/useData";
import AdminLayout from "@src/layouts/AdminLayout";
import { cn } from "@src/lib/utils";
import { Service } from "@src/services/about";
import { dehydrate, QueryClient, useMutation } from "@tanstack/react-query";

export const getServerSideProps = (async (context) => {
  const { accessToken } = await context.req.cookies;
  const queryClient = new QueryClient();

  try {
    if (!accessToken) {
      return {
        redirect: {
          destination: "/admin",
          permanent: false,
        },
      };
    }
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

export default function Dashboard() {
  const router = useRouter();
  const [refetchParams, setRefetchParams] = useState(0);
  const [activeTab, setActiveTab] = useState("about");
  const { data, isFetching } = useData(refetchParams);

  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    },
    onSuccess: () => {
      router.replace("/admin");
    },
  });

  return (
    <>
      {isFetching && <Loader className="opacity-50" />}
      <div>
        <button
          onClick={() => mutate()}
          className={cn("absolute top-4 right-4 px-4 py-2 bg-white rounded-md")}
        >
          Logout
        </button>
        <div
          className={cn(
            "isolate bg-white/30 shadow-lg",
            "h-[calc(80vh)] w-[calc(75svw)] rounded-2xl",
            "backdrop-blur-xs p-5 flex flex-col gap-5 border-4",
            "border-[rgba(255,255,255,0.1)] shadow-[0_0_40px_white/10]",
            "flex flex-col"
          )}
        >
          <Tabs
            defaultValue={activeTab}
            className="size-full overflow-scroll no-scrollbar"
          >
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="work">Work Experience</TabsTrigger>
              <TabsTrigger value="projects">Featured Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="about" onClick={() => setActiveTab("about")}>
              <AboutForm data={data?.About} />
            </TabsContent>
            <TabsContent value="work" onClick={() => setActiveTab("work")}>
              <WorkForm
                data={data?.WorkExperience}
                onRefetch={() => setRefetchParams(Date.now())}
              />
            </TabsContent>
            <TabsContent
              value="projects"
              onClick={() => setActiveTab("projects")}
            >
              <ProjectForm
                data={data?.FeaturedProjects || []}
                onRefetch={() => setRefetchParams(Date.now())}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

Dashboard.layout = AdminLayout;
