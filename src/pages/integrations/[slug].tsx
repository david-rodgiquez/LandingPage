import NewLayout from "@/components/NewLayout";
import IconChevronRight from "@/components/icons/IconChevronRight";
import Head from "next/head";
import Link from "next/link";
import { ComponentProps } from "react";

function IconGithub(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.835 0.666992C25.3282 0.666992 0.666504 26.0281 0.666504 57.4033C0.666504 82.4831 16.4681 103.713 38.3892 111.226C41.1298 111.791 42.1338 110.006 42.1338 108.504C42.1338 107.188 42.0434 102.68 42.0434 97.9822C26.6969 101.364 23.5011 91.2188 23.5011 91.2188C21.0348 84.6434 17.3806 82.9534 17.3806 82.9534C12.3576 79.4778 17.7464 79.4778 17.7464 79.4778C23.3182 79.8536 26.2418 85.3016 26.2418 85.3016C31.1732 93.9429 39.1198 91.5013 42.3167 89.998C42.7729 86.3345 44.2353 83.7984 45.788 82.3897C33.5481 81.0744 20.6701 76.1901 20.6701 54.3968C20.6701 48.1972 22.8608 43.125 26.3321 39.1801C25.7844 37.7715 23.8658 31.9465 26.881 24.1502C26.881 24.1502 31.5391 22.647 42.0423 29.9741C46.5391 28.7321 51.1765 28.1004 55.835 28.095C60.4931 28.095 65.2416 28.7533 69.6265 29.9741C80.1308 22.647 84.789 24.1502 84.789 24.1502C87.8041 31.9465 85.8843 37.7715 85.3367 39.1801C88.8994 43.125 90.9999 48.1972 90.9999 54.3968C90.9999 76.1901 78.1219 80.9799 65.7904 82.3897C67.8005 84.1742 69.535 87.5553 69.535 92.91C69.535 100.518 69.4447 106.625 69.4447 108.502C69.4447 110.006 70.4497 111.791 73.1893 111.228C95.1103 103.711 110.912 82.4831 110.912 57.4033C111.002 26.0281 86.2502 0.666992 55.835 0.666992Z"
        fill="white"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Github Integration</title>
      </Head>
      <NewLayout>
        <main className="max-w-7xl px-4 w-full mx-auto mt-20 md:mt-24 overflow-x-hidden -mb-16">
          <Link
            href="/integrations"
            className="font-medium text-lg flex items-center gap-2 w-max px-3 py-1 hover:bg-gray-100 rounded transition-colors"
          >
            <IconChevronRight className="h-4 w-4 rotate-180" />
            <span>Back to Integrations</span>
          </Link>

          <div className="w-full mt-6 md:mt-10 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-[132px] flex flex-col gap-4 md:gap-6">
              <div className="flex gap-4">
                <IconGithub className="bg-[#16181C] w-14 md:w-full h-auto p-2 shrink-0 rounded-lg" />
                <div className="md:hidden leading-[1]">
                  <h1 className="font-bold text-3xl">GitHub</h1>
                  <p className="font-semibold">
                    Built by: <span className="font-medium">Creator name</span>
                  </p>
                </div>
              </div>
              <Link
                href="#"
                className="text-white bg-[#2D72D2] hover:bg-[#215DB0] transition-colors py-1.5 rounded font-medium text-center text-lg"
              >
                Add Github
              </Link>

              <div className="text-lg flex flex-col font-medium leading-snug">
                <span
                  style={{
                    fontFeatureSettings: "'clig' off, 'liga' off",
                  }}
                  className="text-[#5F6B7C] tracking-widest"
                >
                  Website
                </span>
                <Link href="#" className="text-[#404854] underline">
                  www.solidworks.com
                </Link>
              </div>

              <div className="text-lg flex flex-col font-medium leading-snug">
                <span
                  style={{
                    fontFeatureSettings: "clig off, liga off",
                  }}
                  className="text-[#5F6B7C] tracking-widest"
                >
                  Categories
                </span>
                <div className="inline-flex gap-2 flex-wrap gap-y-0">
                  <Link href="#" className="text-[#404854] underline">
                    Plug-in
                  </Link>
                  <Link href="#" className="text-[#404854] underline">
                    Internal
                  </Link>
                  <Link href="#" className="text-[#404854] underline">
                    Engineering
                  </Link>
                </div>
              </div>

              <div className="text-lg flex flex-col font-medium leading-snug">
                <span
                  style={{
                    fontFeatureSettings: "'clig' off, 'liga' off",
                  }}
                  className="text-[#5F6B7C] tracking-widest"
                >
                  Docs
                </span>
                <Link href="#" className="text-[#404854] underline">
                  Solidworks docs
                </Link>
              </div>

              <div className="text-lg flex flex-col font-medium leading-snug">
                <span
                  style={{
                    fontFeatureSettings: "'clig' off, 'liga' off",
                  }}
                  className="text-[#5F6B7C] tracking-widest"
                >
                  Contact
                </span>
                <Link href="#" className="text-[#404854] underline">
                  Email Rollup
                </Link>
              </div>
            </div>

            <div className="flex flex-grow flex-col">
              <h1 className="font-bold text-4xl hidden md:block">GitHub</h1>
              <p className="font-semibold hidden md:block">
                Built by:{" "}
                <Link href="#" className="text-[#2D72D2]">
                  Github
                </Link>
              </p>

              <div className="w-full flex gap-2 md:gap-4 mt-0 md:mt-6 md:flex-row flex-col">
                <div className="flex flex-grow bg-[#2F343C] h-36 md:h-[460px] rounded-lg"></div>
                <div className="w-36 flex md:flex-col gap-2 md:gap-4 flex-row ">
                  <div className="w-full h-16 aspect-video md:h-24 bg-[#2F343C] rounded-lg"></div>
                  <div className="w-full h-16 aspect-video md:h-24 bg-[#2F343C] rounded-lg"></div>
                  <div className="w-full h-16 aspect-video md:h-24 bg-[#2F343C] rounded-lg"></div>
                </div>
              </div>

              <div className="font-medium text-lg text-[#383E47] mt-8">
                <p>
                  The GitHub and GitLab integrations move issues from In
                  Progress to Done automatically so you never have to update
                  issues manually. It takes less than a minute to connect GitHub
                  to the workspace and then go to team settings to configure the
                  automatic updates.
                </p>
                <h2 className="text-3xl font-semibold mt-4 mb-2 text-[#16181C]">
                  How it works
                </h2>
                <p>Description text for the integration</p>
                <h2 className="text-3xl font-semibold mt-4 mb-2 text-[#16181C]">
                  Features
                </h2>
                <ol className="list-decimal pl-6 font-semibold space-y-2 text-[#16181C]">
                  <li className="leading-tight">
                    <span>Feature 1</span>
                    {"\r\n"}
                    <p className="font-medium">
                      Description text for the integration
                    </p>
                  </li>
                  <li className="leading-tight">
                    <span>Feature 2</span>
                    {"\r\n"}
                    <p className="font-medium">
                      Description text for the integration
                    </p>
                  </li>
                  <li className="leading-tight">
                    <span>Feature 3</span>
                    {"\r\n"}
                    <p className="font-medium">
                      Description text for the integration
                    </p>
                  </li>
                  <li className="leading-tight">
                    <span>Feature 4</span>
                    {"\r\n"}
                    <p className="font-medium">
                      Description text for the integration
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </main>
      </NewLayout>
    </>
  );
}
