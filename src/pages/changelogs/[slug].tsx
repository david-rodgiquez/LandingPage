import Layout from "@/components/Layout/Layout";
import { getOptionalAuthSession } from "@/lib/sessionService";
import { getChangelogBySlug } from "@/services/changelog";
import { getFooter, getHeader } from "@/services/header";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";

export default function ChangelogPage({
  organization,
  user,
  changelog,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const metaTitle = `${changelog.title} - Changelog`;
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
        <div className="w-full py-8 flex flex-col gap-6">
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-3xl font-bold">{changelog.title}</h1>
            <div className="w-full flex gap-2 items-center text-sm text-gray-500">
              <div className="flex gap-2 items-center">
                <div className="h-8 w-8 rounded-full overflow-hidden object-contain">
                  <Image
                    src={changelog.author.avatar.data.attributes.url}
                    alt={
                      changelog.author.avatar.data.attributes.caption ??
                      changelog.title
                    }
                    height={changelog.author.avatar.data.attributes.height}
                    width={changelog.author.avatar.data.attributes.width}
                    className="w-full"
                  />
                </div>

                <span className="font-semibold">{changelog.author.name}</span>
              </div>
              &middot;
              <span>{new Date(changelog.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div
            className="w-full body-container"
            dangerouslySetInnerHTML={{ __html: changelog.body }}
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

  const [header, footer, changelog, { organization, user }] = await Promise.all(
    [
      getHeader(),
      getFooter(),
      getChangelogBySlug(slug),
      getOptionalAuthSession(context.req, context.res),
    ]
  );

  if (!organization || !user) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (!changelog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      organization,
      user,
      changelog: changelog,
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
