import Image from "next/image";
import { Inter } from "next/font/google";
import { getFooter, getHeader } from "@/services/header";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={`w-full ${inter.className}`}>
      <header className="w-full border-b">
        <div className="w-full max-w-5xl flex items-center justify-between mx-auto px-4 py-2">
          <Image
            className="h-10 w-auto"
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}${logo.url}`}
            alt="logo"
            height={logo.height}
            width={logo.width}
          />
          <div className="flex gap-6 items-center">
            {menus.map((menu) => (
              <Link key={menu.id} href={menu.url} className=" font-medium ">
                {menu.title}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main className="w-full px-4 flex items-center justify-center my-5 h-[720px] max-w-5xl mx-auto bg-gray-200 py-8">
        <h1 className="text-6xl text-gray-400 uppercase font-bold">content</h1>
      </main>
      <footer className="w-full border-t px-4 bg-gray-900 text-white ">
        <div className="w-full max-w-5xl flex items-center justify-center gap-8 text-sm mx-auto px-4 py-8 ">
          {footerMenus.map((menu) => (
            <Link
              key={menu.id}
              href={`${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}${menu.url}`}
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const [header, footer] = await Promise.all([
    await getHeader(),
    await getFooter(),
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
    },
  };
};
