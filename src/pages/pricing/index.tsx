import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { getOptionalAuthSession } from "@/lib/sessionService";

export default function PricingPage({
  organization,
  user,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Layout
        organization={organization}
        user={user}
        footerMenus={footerMenus}
        headerLogo={logo}
        headerMenus={menus}
      >
        <div className="w-full h-40 bg-gray-200 py-8 flex justify-center items-center">
          <h1>Pricing content</h1>
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
