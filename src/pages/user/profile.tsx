import Layout from "@/components/Layout/Layout";
import { getFooter, getHeader } from "@/services/header";
import type { InferGetServerSidePropsType } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { ReactNode } from "react";

function DetailLine({ title, value }: { title: string; value: ReactNode }) {
  return (
    <div className="w-full flex gap-4">
      <p className="w-4/12 font-medium">{title}</p>
      <p className="w-8/12">{value}</p>
    </div>
  );
}

export default function UserProfilePage({
  header: { menus, logo },
  footer: { menus: footerMenus },
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps> & {
  user: UserProfile;
}) {
  return (
    <Layout footerMenus={footerMenus} headerLogo={logo} headerMenus={menus}>
      <div className="w-full h-40 py-8 flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">User Profile</h1>
        <div className="w-full flex flex-col gap-2 p-6 border rounded-lg">
          <DetailLine title="Nickname" value={user.nickname} />
          <DetailLine title="Name" value={user.name} />
          <DetailLine title="Email" value={user.email} />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async () => {
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
  },
});
