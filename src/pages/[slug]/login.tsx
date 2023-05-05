import React from "react";
import Link from "next/link";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import TenantedLoginForm from "@/components/TenantLoginForm";
import { OrgService } from "@/lib/orgService";
import Layout from "@/components/Layout/Layout";
import { getFooter, getHeader } from "@/services/header";

export default function TenantedLoginPage({
  org,
  footer,
  header,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const slug = router.query["slug"];

  return (
    <Layout
      footerMenus={footer.menus}
      headerLogo={header.logo}
      headerMenus={header.menus}
    >
      <div className="w-full flex items-center justify-center ">
        <div className="mt-24 max-w-xl w-full border p-4 rounded-lg">
          {!org ? (
            <div className="border p-4 mt-24 w-full text-center rounded-xl flex flex-col gap-4">
              <h2 className="font-bold text-xl">Organization not found</h2>
              <p>
                No organization with the domain <strong>{slug}</strong> was
                found.
              </p>
              <Link href={"/login"} className="text-indigo-600">
                Try again
              </Link>
            </div>
          ) : (
            <TenantedLoginForm org={org} />
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ slug: string }>
) => {
  const slug = context.params!["slug"];
  const [header, footer, org] = await Promise.all([
    getHeader(),
    getFooter(),
    OrgService.findBySlug(slug),
  ]);

  return {
    props: {
      header: {
        menus: header.menu,
        logo: header.logo.data.attributes,
      },
      footer: {
        menus: footer.menus,
      },
      org: org,
    },
  };
};
