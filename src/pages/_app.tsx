import { Fragment, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import MainLayout from "@src/layouts/MainLayout";
import type PageWithLayoutType from "@src/layouts/pageWithLayouts";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "@src/styles/globals.css";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: unknown;
};

export default function App(appProps: AppLayoutProps) {
  const { Component, pageProps } = appProps;
  const Layout = Component.layout || MainLayout;
  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      })
  );

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </HydrationBoundary>
      </QueryClientProvider>
    </Fragment>
  );
}
