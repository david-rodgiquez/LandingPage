import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { getOptionalAuthSession } from "@/lib/sessionService";
import useToggle from "@/hooks/useToggle";
import Link from "next/link";
import IconDarkMode from "@/components/icons/IconDarkMode";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconTwitter from "@/components/icons/IconTwitter";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const Logo = dynamic(() => import("../components/Logo"), {
  ssr: false,
});

function LoginButton() {
  const [isOpenModalLogin, toggleModalLogin] = useToggle();
  const url = new URL("https://api.astronautdolphins.com/auth/oauth/google");
  url.searchParams.set("domain", "rollup.ai");
  url.searchParams.set("redirect", "https://rollup.ai/api/callback");
  return (
    <>
      <Link
        // type="button"
        // onClick={toggleModalLogin}
        // href="https://app.rollup.ai/"
        href={url.href}
        className="font-berkeley px-6 dark:bg-[#2d72d2] dark:text-white bg-white py-2 border border-[#1B283B] rounded-sm hover:shadow-none transition-shadow shadow-[6px_6px_0_0_rgba(197,203,211,0.75)]"
      >
        Login
      </Link>
      {/* {isOpenModalLogin && (
        <ModalFormLogin title="Login to Rollup" onClose={toggleModalLogin} />
      )} */}
    </>
  );
}

function GetAccessButton() {
  const [isOpenModal, toggleModal] = useToggle();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const initClickTracking = async () => {
      // @ts-ignore
      await window?.analytics?.trackLink(
        linkRef.current,
        "Clicked: Get Access",
        {
          path: window.location.pathname,
        }
      );
    };

    initClickTracking();
  }, []);

  return (
    <>
      <Link
        ref={linkRef}
        target="_blank"
        href="https://forms.default.com/93823"
        className="py-3 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex items-center w-max gap-10 text-lg mt-10 bg-white hover:shadow-none transition-shadow shadow-[6px_6px_0_0_#8ABBFF]"
      >
        <span>Get Access</span> <span>&gt;</span>
      </Link>
      {/* {isOpenModal && (
        <ModalFormSignup title="Get access to Rollup" onClose={toggleModal} />
      )} */}
    </>
  );
}

const footerMenus = [
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Jobs",
    path: "/jobs",
  },
  {
    title: "Privacy",
    path: "/privacy",
  },
  {
    title: "Terms",
    path: "/terms",
  },
];

export default function Home({
  user,
  organization,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isAuthenticated = organization && user;
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Rollup — Collaborative engineering environment</title>
      </Head>
      <div className="w-full min-h-screen dark:bg-[#111418] justify-between bg-[#F6F7F9] text-[#1B283B] flex flex-col bg-[url('/img/home-hero-light.svg')] dark:bg-[url('/img/home-hero-dark.svg')] bg-no-repeat bg-[center_right_-200px]">
        <header className="max-w-7xl w-full mx-auto px-6 py-6 flex justify-between items-center ">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center justify-center gap-8">
            <LoginButton />
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="bg-[url(/img/icon-dark-mode.svg)] dark:bg-[url(/img/icon-light-mode.svg)] h-6 w-6"
            />
          </div>
        </header>
        <main className="max-w-7xl w-full mx-auto px-6 py-6">
          <div className="flex flex-col max-w-3xl ">
            <p className="uppercase font-berkeley dark:text-[#4C90F0] text-[#215DB0] mb-2">
              Save time. Work as one. Innovate Faster.
            </p>
            <h1 className="font-blender font-bold text-6xl mb-4 dark:text-white">
              Rollup is a new collaborative platform for engineering complex
              hardware
            </h1>
            <p className="dark:text-white font-blender text-2xl text-[#111418] font-medium">
              Work together with information rich workspaces that give you a
              360º view of all your engineering data, context, and history in
              one place.
            </p>
            {!isAuthenticated && <GetAccessButton />}
          </div>
        </main>
        <footer className="max-w-7xl w-full mx-auto px-6 ">
          <div className="w-full flex justify-between font-blender dark:text-white text-[#5F6B7C] border-[#D3D8DE] dark:border-[#383E47] font-medium py-4 border-t">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.linkedin.com/company/rollup-inc"
                  target="_blank"
                >
                  <IconLinkedin className="text-[#2D72D2] dark:text-[#4C90F0]" />
                </Link>
                <Link href="https://twitter.com/rollup" target="_blank">
                  <IconTwitter className="text-[#2D72D2] dark:text-[#4C90F0]" />
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {footerMenus.map((menu) => (
                <Link
                  href={menu.path}
                  key={menu.path}
                  className="text-[#011632] dark:hover:bg-[#252A31] dark:text-[#E4F0FF] hover:bg-[#E5E8EB] px-2 py-0.5 rounded-sm transition-colors"
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const [header, footer, { organization, user }] = await Promise.all([
  //   // getHeader(),
  //   // getFooter(),
  //   getOptionalAuthSession(context.req, context.res),
  // ]);

  const { organization, user } = await getOptionalAuthSession(
    context.req,
    context.res
  );

  return {
    props: {
      organization,
      user,
      // header: {
      //   menus: header.menu,
      //   logo: header.logo.data.attributes,
      // },
      // footer: {
      //   menus: footer.menus,
      // },
    },
  };
};
