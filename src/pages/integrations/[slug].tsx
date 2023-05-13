import Layout from "@/components/Layout/Layout";
import { STRAPI_BASE_URL } from "@/config";
import { getOptionalAuthSession } from "@/lib/sessionService";
import { getFooter, getHeader } from "@/services/header";
import { getIntegrationBySlug } from "@/services/integration";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";

export default function CustomerPage({
  organization,
  user,
  integration,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const metaTitle = `${integration.title} - Integration`;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <Layout
        organization={organization}
        user={user}
        footerMenus={footerMenus}
        headerLogo={logo}
        headerMenus={menus}
      >
        <div className="w-full py-8 flex flex-col gap-6 max-w-xl mx-auto">
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-3xl font-bold">{integration.title}</h1>
            <div className="w-full flex gap-2 items-center text-sm text-gray-500">
              <div className="flex gap-2 items-center">
                <div className="h-8 w-8 rounded-full overflow-hidden object-contain">
                  <Image
                    priority
                    src={`${STRAPI_BASE_URL}${integration.author.avatar.data.attributes.url}`}
                    alt={
                      integration.author.avatar.data.attributes.caption ??
                      integration.title
                    }
                    height={integration.author.avatar.data.attributes.height}
                    width={integration.author.avatar.data.attributes.width}
                    className="w-full"
                  />
                </div>
                <span className="font-semibold">{integration.author.name}</span>
              </div>
              &middot;
              <span>
                {new Date(integration.createdAt).toLocaleDateString()}
              </span>
              &middot;
              <span>{integration.category.data.attributes.name}</span>
            </div>
            <Image
              priority
              src={`${STRAPI_BASE_URL}${integration.thumbnail.data.attributes.url}`}
              alt={
                integration.thumbnail.data.attributes.caption ??
                integration.title
              }
              height={integration.thumbnail.data.attributes.height}
              width={integration.thumbnail.data.attributes.width}
              className="w-full"
            />
          </div>
          <div
            className="w-full body-container"
            dangerouslySetInnerHTML={{ __html: integration.body }}
          />
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ slug: string }>
) => {
  const slug = context.params!.slug;
  const [header, footer, integration, { organization, user }] =
    await Promise.all([
      getHeader(),
      getFooter(),
      getIntegrationBySlug(slug),
      getOptionalAuthSession(context.req, context.res),
    ]);

  if (!organization || !user) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (!integration) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      organization,
      user,
      integration: integration,
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
