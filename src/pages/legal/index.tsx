import LayoutPage from "@/components/LayoutPage";
import Head from "next/head";
import Link from "next/link";

const pages = [
  {
    name: "Terms of Service",
    path: "/terms",
    description:
      "Explore our Terms of Service to understand the rules and guidelines governing your use of Rollup. This legally binding document outlines user responsibilities, content usage, and more.",
  },
  {
    name: "Privacy Notice",
    path: "/privacy",
    description:
      "Discover how we handle your personal information. Our Privacy Notice outlines data collection, usage, and protection policies to ensure your privacy and security while using Rollup.",
  },
  {
    name: "Data Processing",
    path: "/legal/subprocessors",
    description:
      "Explore our trusted Data Processing Subprocessors. This page provides insights into the third-party partners we collaborate with to ensure the secure handling of your data in compliance with privacy regulations.",
  },
];

export default function Page() {
  return (
    <>
      <Head>
        <title>Legal</title>
      </Head>
      <LayoutPage>
        <main className="w-full mx-auto max-w-6xl mt-12 font-blender mb-28">
          <div className="flex justify-center items-center flex-col gap-4 mb-14">
            <h1 className="font-bold text-4xl text-[#1B283B] dark:text-white">
              Legal
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="group bg-white dark:bg-[#1C2127] dark:border-[#333a42] p-8 border rounded flex flex-col gap-2 dark:hover:shadow-gray-800 hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl dark:group-hover:text-[#4C90F0] font-semibold group-hover:text-[#2D72D2] transition-colors">
                  {page.name}
                </h2>
                <p className="text-lg leading-tight dark:text-[#ABB3BF]">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </main>
      </LayoutPage>
    </>
  );
}
