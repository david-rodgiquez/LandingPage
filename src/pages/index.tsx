import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { getOptionalAuthSession } from "@/lib/sessionService";
import useToggle from "@/hooks/useToggle";
import ModalFormSignup from "@/components/ModalFormSignup";

function GetAccessButton() {
  const [isOpenModal, toggleModal] = useToggle();
  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-2 rounded flex items-center justify-center font-medium"
      >
        Get Access
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

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout
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
      </Layout>
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
