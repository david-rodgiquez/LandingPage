import { getFooter, getHeader } from "@/services/header";
import { InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { getChangelogs } from "@/services/changelog";
import Link from "next/link";
import Image from "next/image";
import { STRAPI_BASE_URL } from "@/config";

export default function ChangelogsPage({
  changelogs,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Changelogs</title>
      </Head>
      <Layout footerMenus={footerMenus} headerLogo={logo} headerMenus={menus}>
        <div className="w-full py-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Changelogs</h1>
          <div className="w-full grid grid-cols-3 gap-4">
            {changelogs.data.map((changelog) => (
              <div className="w-full border rounded-lg" key={changelog.id}>
                <Image
                  src={`${STRAPI_BASE_URL}${changelog.attributes.thumbnail.data.attributes.url}`}
                  height={changelog.attributes.thumbnail.data.attributes.height}
                  width={changelog.attributes.thumbnail.data.attributes.width}
                  alt={
                    changelog.attributes.thumbnail.data.attributes.caption ??
                    changelog.attributes.title
                  }
                  className="w-full"
                />
                <div className="w-full px-6 py-4 flex flex-col gap-2">
                  <h2 className="text-xl font-bold">
                    <Link href={`/changelogs/${changelog.attributes.slug}`}>
                      {changelog.attributes.title}
                    </Link>
                  </h2>
                  <div className="w-full text-sm flex gap-2 items-center">
                    <div className="flex gap-2 items-center">
                      <div className="h-7 w-7 object-contain rounded-full overflow-hidden">
                        <Image
                          src={`${STRAPI_BASE_URL}${changelog.attributes.author.avatar.data.attributes.url}`}
                          alt={
                            changelog.attributes.author.avatar.data.attributes
                              .caption ?? changelog.attributes.author.name
                          }
                          height={
                            changelog.attributes.author.avatar.data.attributes
                              .height
                          }
                          width={
                            changelog.attributes.author.avatar.data.attributes
                              .width
                          }
                          className="w-full"
                        />
                      </div>
                      <p className="font-semibold">
                        {changelog.attributes.author.name}
                      </p>
                    </div>
                    &middot;
                    <p className="text-gray-500">
                      {new Date(
                        changelog.attributes.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const [header, footer, changelogs] = await Promise.all([
    getHeader(),
    getFooter(),
    getChangelogs(),
  ]);

  return {
    props: {
      changelogs: changelogs,
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
