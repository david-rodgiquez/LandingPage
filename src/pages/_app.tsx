import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import segment from "@segment/snippet";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Analytics } from '@vercel/analytics/react';


const ModalCookie = dynamic(() => import("@/components/ModalCookie"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const onRouteChangeComplete = () => {
      // @ts-ignore
      window?.analytics?.page(Component.displayName);
    };

    router.events.on("routeChangeComplete", onRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <Script
        dangerouslySetInnerHTML={{
          __html: segment.min({
            apiKey: process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS,
          }),
        }}
        id="segment-analytics"
      />
      <Analytics />
      <ModalCookie />
    </>
  );
}
