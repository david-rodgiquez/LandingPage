import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { getOptionalAuthSession } from "@/lib/sessionService";
import useToggle from "@/hooks/useToggle";
import ModalFormSignup from "@/components/ModalFormSignup";
import Link from "next/link";
import IconDarkMode from "@/components/icons/IconDarkMode";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconTwitter from "@/components/icons/IconTwitter";
import Button from "@/components/Button";
import ModalFormLogin from "@/components/ModalFormLogin";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import("../components/Logo"), {
  ssr: false,
});

function LoginButton() {
  const [isOpenModalLogin, toggleModalLogin] = useToggle();
  return (
    <>
      <Button
        type="button"
        onClick={toggleModalLogin}
        className="font-berkeley px-6 dark:bg-[#2d72d2] dark:text-white bg-white py-2 border border-[#1B283B] rounded-sm hover:shadow-none transition-shadow shadow-[6px_6px_0_0_rgba(197,203,211,0.75)]"
      >
        Login
      </Button>
      {isOpenModalLogin && (
        <ModalFormLogin title="Login to Rollup" onClose={toggleModalLogin} />
      )}
    </>
  );
}

function GetAccessButton() {
  const [isOpenModal, toggleModal] = useToggle();
  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className="py-4 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex items-center w-max gap-20 text-lg mt-10 bg-white hover:shadow-none transition-shadow shadow-[6px_6px_0_0_#8ABBFF]"
      >
        <span>Get Access</span> <span>&gt;</span>
      </button>
      {isOpenModal && (
        <ModalFormSignup title="Get access to Rollup" onClose={toggleModal} />
      )}
    </>
  );
}

export default function Home({
  user,
  organization,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isAuthenticated = organization && user;
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full min-h-screen dark:bg-[#1b283b] bg-[#F6F7F9] text-[#1B283B] flex flex-col bg-[url('/img/home-bg.png')] bg-no-repeat bg-right">
        <header className="max-w-7xl w-full mx-auto px-6 py-6 flex justify-between items-center ">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-8">
            <LoginButton />
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <IconDarkMode className="dark:text-white" />
            </button>
          </div>
        </header>
        <main className="max-w-7xl w-full mx-auto px-6 place-items-start ">
          <div className="flex flex-col max-w-3xl ">
            <p className="uppercase font-berkeley dark:text-[#739dd6] text-[#215DB0] mt-12 mb-2">
              Save time. Work as one. Innovate Faster.
            </p>
            <h1 className="font-blender font-bold text-6xl mb-4 dark:text-white">
              Rollup is a new collaborative platform for engineering complex
              hardware
            </h1>
            <p className="dark:text-gray-300 font-blender text-2xl font-normal">
              Collaborate on moonshots at the speed of thought.{" "}
            </p>
            {!isAuthenticated && <GetAccessButton />}
          </div>
        </main>
        <footer className="max-w-7xl w-full mx-auto px-6 mt-auto">
          <div className="w-full flex justify-between font-blender dark:text-white text-[#5F6B7C] border-[#8F99A8] font-medium py-4 border-t">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Link href="#">
                  <IconLinkedin className="text-[#2D72D2] dark:text-[#8abbff]" />
                </Link>
                <Link href="#">
                  <IconTwitter className="text-[#2D72D2] dark:text-[#8abbff]" />
                </Link>
              </div>
              <Link href="#">Jobs</Link>
            </div>
            <div className="flex items-center gap-6">
              {footerMenus.map((menu) => (
                <Link href={menu.url} key={menu.id}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
      {/* <Layout
        user={user}
        organization={organization}
        footerMenus={footerMenus}
        headerLogo={logo}
        headerMenus={menus}
      >
        <div className="w-full pb-12 pt-28 flex justify-between">
          <div className="w-4/12 flex flex-col gap-8">
            <h1 className="text-4xl leading-tight font-semibold mt-10">
              Rollup is a new collaborative platform for enginering complex
              hardware.
            </h1>
            {!isAuthenticated && <GetAccessButton />}
          </div>
          <div className="w-8/12 flex justify-end">
            <div className="w-full max-w-3xl h-[480px] bg-blue-100 text-blue-300 text-3xl flex items-center justify-center">
              image
            </div>
          </div>
        </div>
      </Layout> */}
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const [header, footer, { organization, user }] = await Promise.all([
    getHeader(),
    getFooter(),
    getOptionalAuthSession(context.req, context.res),
  ]);

  return {
    props: {
      organization,
      user,
      header: {
        menus: header.menu,
        logo: header.logo.data.attributes,
      },
      footer: {
        menus: footer.menus,
      },
    },
  };
};
