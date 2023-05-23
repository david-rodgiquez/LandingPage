import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { getCustomers } from "@/services/customer";
import Image from "next/image";
import Link from "next/link";
import { STRAPI_BASE_URL } from "@/config";
import { getOptionalAuthSession } from "@/lib/sessionService";

export default function CustomersPage({
  organization,
  user,
  customers,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Customers</title>
      </Head>
      <Layout
        organization={organization}
        user={user}
        footerMenus={footerMenus}
        headerLogo={logo}
        headerMenus={menus}
      >
        <div className="w-full py-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Customers</h1>
          <div className="w-full grid grid-cols-3 gap-4">
            {customers.data.map((customer) => (
              <div className="w-full border rounded-lg" key={customer.id}>
                <Image
                  src={customer.attributes.thumbnail.data.attributes.url}
                  height={customer.attributes.thumbnail.data.attributes.height}
                  width={customer.attributes.thumbnail.data.attributes.width}
                  alt={
                    customer.attributes.thumbnail.data.attributes.caption ??
                    customer.attributes.name
                  }
                  className="w-full aspect-video"
                />
                <div className="w-full px-6 py-4 flex flex-col gap-2">
                  <h2 className="text-xl font-bold">
                    <Link href={`/customers/${customer.attributes.slug}`}>
                      {customer.attributes.name}
                    </Link>
                  </h2>
                  <div>
                    <Image
                      src={customer.attributes.logo.data.attributes.url}
                      height={customer.attributes.logo.data.attributes.height}
                      width={customer.attributes.logo.data.attributes.width}
                      alt={
                        customer.attributes.logo.data.attributes.caption ??
                        customer.attributes.name
                      }
                      className="w-auto h-6"
                    />
                  </div>
                  <div className="w-full text-sm flex gap-2 items-center">
                    <div className="flex gap-2 items-center">
                      <div className="h-7 w-7 object-contain rounded-full overflow-hidden">
                        <Image
                          src={
                            customer.attributes.author.avatar.data.attributes
                              .url
                          }
                          alt={
                            customer.attributes.author.avatar.data.attributes
                              .caption ?? customer.attributes.author.name
                          }
                          height={
                            customer.attributes.author.avatar.data.attributes
                              .height
                          }
                          width={
                            customer.attributes.author.avatar.data.attributes
                              .width
                          }
                          className="w-full"
                        />
                      </div>
                      <p className="font-semibold">
                        {customer.attributes.author.name}
                      </p>
                    </div>
                    &middot;
                    <p className="text-gray-500">
                      {new Date(
                        customer.attributes.createdAt
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
  const [header, footer, customers, { organization, user }] = await Promise.all(
    [
      getHeader(),
      getFooter(),
      getCustomers(),
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

  return {
    props: {
      organization,
      user,
      customers: customers,
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
