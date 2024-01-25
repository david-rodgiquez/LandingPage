import "@/styles/globals.css";
import type { AppProps } from "next/app";
import segment from "@segment/snippet";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

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
      <Component {...pageProps} />
      <Script
        dangerouslySetInnerHTML={{
          __html: segment.min({
            apiKey: process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS,
          }),
        }}
        id="segment-analytics"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `!function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_ca3c489ce52ebb366e4a26bf2f66a4176e2d/sdk.js"),(document.body || document.head).appendChild(n)}();`,
        }}
        id="koala"
      />
      <Analytics />
      <ModalCookie />
    </>
  );
}
