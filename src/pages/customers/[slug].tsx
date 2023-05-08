import Layout from "@/components/Layout/Layout";
import { STRAPI_BASE_URL } from "@/config";
import { getCustomerBySlug } from "@/services/customer";
import { getFooter, getHeader } from "@/services/header";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";

export default function CustomerPage({
  customer,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const metaTitle = `${customer.name} - Customer`;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <Layout footerMenus={footerMenus} headerLogo={logo} headerMenus={menus}>
        <div className="w-full py-8 flex flex-col gap-6 max-w-xl mx-auto">
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-3xl font-bold">{customer.name}</h1>

            <div className="w-full flex gap-6 justify-between items-center text-sm text-gray-500">
              <div className="w-full flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <div className="h-8 w-8 rounded-full overflow-hidden object-contain">
                    <Image
                      priority
                      src={`${STRAPI_BASE_URL}${customer.author.avatar.data.attributes.url}`}
                      alt={
                        customer.author.avatar.data.attributes.caption ??
                        customer.name
                      }
                      height={customer.author.avatar.data.attributes.height}
                      width={customer.author.avatar.data.attributes.width}
                      className="w-full"
                    />
                  </div>
                  <span className="font-semibold">{customer.author.name}</span>
                </div>
                &middot;
                <span>{new Date(customer.createdAt).toLocaleDateString()}</span>
              </div>
              <Image
                priority
                src={`${STRAPI_BASE_URL}${customer.logo.data.attributes.url}`}
                alt={customer.logo.data.attributes.caption ?? customer.name}
                height={customer.logo.data.attributes.height}
                width={customer.logo.data.attributes.width}
                className="w-auto h-8"
              />
            </div>
            <Image
              priority
              src={`${STRAPI_BASE_URL}${customer.thumbnail.data.attributes.url}`}
              alt={customer.thumbnail.data.attributes.caption ?? customer.name}
              height={customer.thumbnail.data.attributes.height}
              width={customer.thumbnail.data.attributes.width}
              className="w-full"
            />
          </div>
          <div
            className="w-full body-container"
            dangerouslySetInnerHTML={{ __html: customer.body }}
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
  const [header, footer, customer] = await Promise.all([
    getHeader(),
    getFooter(),
    getCustomerBySlug(slug),
  ]);

  if (!customer) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      customer: customer,
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
