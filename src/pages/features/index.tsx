import { getFooter, getHeader } from "@/services/header";
import { InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

export default function FeaturesPage({
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Features</title>
      </Head>
      <Layout footerMenus={footerMenus} headerLogo={logo} headerMenus={menus}>
        <div className="w-full h-40 bg-gray-200 py-8 flex justify-center items-center">
          <h1>Feature content</h1>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const [header, footer] = await Promise.all([getHeader(), getFooter()]);

  return {
    props: {
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
