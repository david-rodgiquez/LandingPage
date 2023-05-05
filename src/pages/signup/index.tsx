import Layout from "@/components/Layout/Layout";
import SignupForm from "@/components/SignupForm";
import { getFooter, getHeader } from "@/services/header";
import { InferGetServerSidePropsType } from "next";
import React from "react";

export default function Signup({
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout footerMenus={footerMenus} headerLogo={logo} headerMenus={menus}>
      <div className="w-full flex items-center justify-center ">
        <div className="mt-24 max-w-xl w-full border p-8 rounded-lg">
          <SignupForm />
        </div>
      </div>
    </Layout>
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
