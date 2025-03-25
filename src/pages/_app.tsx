import { Fragment } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import MainLayout from "@src/layouts/MainLayout";
import type PageWithLayoutType from "@src/layouts/pageWithLayouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@src/styles/globals.css";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: unknown;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App(appProps: AppLayoutProps) {
  const { Component, pageProps } = appProps;
  const Layout = Component.layout || MainLayout;
  const router = useRouter();

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </QueryClientProvider>
    </Fragment>
  );
}
