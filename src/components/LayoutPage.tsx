import Link from "next/link";
import IconLinkedin from "./icons/IconLinkedin";
import IconTwitter from "./icons/IconTwitter";
import { ReactNode } from "react";
import { useTheme } from "next-themes";
import Logo from "./Logo";

export default function LayoutPage({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen w-full bg-[#F6F7F9] dark:bg-[#111418] dark:text-white relative overflow-x-hidden ">
      <div className="bg-[url(/img/right-decoration.png)] dark:bg-[url(/img/right-decoration-dark.png)] bg-contain bg-no-repeat w-[470px] h-[771px] absolute -right-44 top-10 hidden sm:block"></div>
      <div className="bg-[url(/img/left-decoration.png)] dark:bg-[url(/img/left-decoration-dark.png)] bg-contain bg-no-repeat w-[375px] h-[771px] absolute -left-44 top-52 hidden sm:block"></div>
      <header className="w-full py-6 md:py-10 max-w-7xl px-4 mx-auto relative">
        <nav
          style={{
            boxShadow:
              "0px 0px 0px 1px rgba(16, 22, 26, 0.08), 0px 8px 24px 0px rgba(16, 22, 26, 0.10)",
          }}
          className="bg-white dark:bg-[#1C2127] dark:text-white rounded-sm font-berkeley shadow-[0px_0px_0px_1px_rgba(16,22,26,0.08),0px_8px_24px_0px_rgba(16,22,26,0.10)] h-14 flex justify-between items-center px-4 md:px-10"
        >
          <div className="flex gap-12 items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex gap-8 text-[#252A31] items-center text-sm leading-10">
            <Link
              href="https://app.rollup.ai/"
              className="bg-[#2D72D2] text-white px-4 rounded-sm hidden md:block"
            >
              Go to app
            </Link>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="bg-[url(/img/icon-dark-mode.svg)] dark:bg-[url(/img/icon-light-mode.svg)] h-6 w-6"
            />
          </div>
        </nav>
      </header>
      <div className="relative px-4 lg:px-0">{children}</div>
      <div className="w-full bg-[#1B283B] sm:bg-[url('/img/privacy-cta-bg.png')] bg-no-repeat bg-center  h-64 flex items-center">
        <div className="flex items-start md:items-center justify-between w-full flex-col md:flex-row gap-6 max-w-7xl px-4 mx-auto">
          <h4 className="font-blender text-4xl font-bold text-white ">
            Discover a world of possibilities with Rollup
          </h4>
          <Link
            href={"#"}
            className={`font-berkeley px-6 dark:bg-white bg-white py-3 border text-[#1B283B] border-[#1B283B] rounded-sm hover:shadow-none transition-shadow w-64 flex items-center justify-between shadow-[6px_6px_0_0_#8ABBFF]`}
          >
            <span>Go to app</span> <span>&gt;</span>
          </Link>
        </div>
      </div>
      <footer className="w-full">
        <div className="max-w-7xl flex-col sm:flex-row px-4 gap-6 flex w-full py-12 mx-auto justify-between dark:bg-[#111418] text-[#1B283B] dark:text-white">
          <div className="w-3/12">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="w-6/12 justify-center flex flex-col sm:flex-row gap-2 sm:gap-36 ">
            <Link href="/contact">Contact</Link>
            <Link href="/jobs">Jobs</Link>
          </div>
          <div className="w-3/12 flex sm:justify-end">
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/company/rollup-inc"
                target="_blank"
              >
                <IconLinkedin className="text-[#2D72D2] dark:text-[#4C90F0]" />
              </Link>
              <Link href="https://twitter.com/rollup" target="_blank">
                <IconTwitter className="text-[#2D72D2] dark:text-[#4C90F0]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#1B283B]">
          <div className="max-w-7xl px-4 w-full gap-2 sm:gap-0 flex-col sm:flex-row flex justify-between sm:items-center mx-auto text-white font-blender py-3">
            <p className="order-1 sm:order-none">
              &copy; {new Date().getFullYear()}, Rollup. All Rights Reserved
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:divide-x">
              <Link href="/privacy" className="sm:px-4">
                Privacy Notice
              </Link>
              <Link href="/terms" className="sm:px-4">
                Terms and conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
