import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { STRAPI_BASE_URL } from "@/config";
import { getIntegrations } from "@/services/integration";
import { getOptionalAuthSession } from "@/lib/sessionService";

export default function CustomersPage({
  organization,
  user,
  integrations,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Integrations</title>
      </Head>
      <Layout
        organization={organization}
        user={user}
        footerMenus={footerMenus}
        headerLogo={logo}
        headerMenus={menus}
      >
        <div className="w-full py-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Integrations</h1>
          <div className="w-full grid grid-cols-3 gap-4">
            {integrations.data.map((integration) => (
              <div className="w-full border rounded-lg" key={integration.id}>
                <Image
                  src={`${STRAPI_BASE_URL}${integration.attributes.thumbnail.data.attributes.url}`}
                  height={
                    integration.attributes.thumbnail.data.attributes.height
                  }
                  width={integration.attributes.thumbnail.data.attributes.width}
                  alt={
                    integration.attributes.thumbnail.data.attributes.caption ??
                    integration.attributes.title
                  }
                  className="w-full"
                />
                <div className="w-full px-6 py-4 flex flex-col gap-2">
                  <h2 className="text-xl font-bold">
                    <Link href={`/integrations/${integration.attributes.slug}`}>
                      {integration.attributes.title}
                    </Link>
                  </h2>
                  <div className="w-full text-sm flex gap-2 items-center">
                    <div className="flex gap-2 items-center">
                      <div className="h-7 w-7 object-contain rounded-full overflow-hidden">
                        <Image
                          src={`${STRAPI_BASE_URL}${integration.attributes.author.avatar.data.attributes.url}`}
                          alt={
                            integration.attributes.author.avatar.data.attributes
                              .caption ?? integration.attributes.author.name
                          }
                          height={
                            integration.attributes.author.avatar.data.attributes
                              .height
                          }
                          width={
                            integration.attributes.author.avatar.data.attributes
                              .width
                          }
                          className="w-full"
                        />
                      </div>
                      <p className="font-semibold">
                        {integration.attributes.author.name}
                      </p>
                    </div>
                    &middot;
                    <p className="text-gray-500">
                      {new Date(
                        integration.attributes.createdAt
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const [header, footer, integrations, { organization, user }] =
    await Promise.all([
      getHeader(),
      getFooter(),
      getIntegrations(),
      getOptionalAuthSession(context.req, context.res),
    ]);

  return {
    props: {
      organization,
      user,
      integrations: integrations,
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
