import MainLayout from "@src/layouts/MainLayout";
import PageWithLayoutType from "@src/layouts/pageWithLayouts";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Fragment } from "react";
import "@src/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: unknown;
};

const queryClient = new QueryClient();

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
