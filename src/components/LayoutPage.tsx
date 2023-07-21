import Link from "next/link";
import Image from "next/image";
import LeftDecorationImage from "../../public/img/privacy-left-decoration.png";
import RightDecorationImage from "../../public/img/privacy-right-decoration.png";
import IconLinkedin from "./icons/IconLinkedin";
import IconTwitter from "./icons/IconTwitter";
import { ReactNode } from "react";
import IconDarkMode from "./icons/IconDarkMode";
import { useTheme } from "next-themes";
import Logo from "./Logo";

export default function LayoutPage({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen w-full bg-[#F6F7F9] dark:bg-[#111418] dark:text-white relative">
      <Image
        alt="decorations"
        src={RightDecorationImage}
        className="absolute right-0"
        priority
      />
      <Image
        alt="decorations"
        src={LeftDecorationImage}
        className="absolute left-0 top-0"
        priority
      />
      <header className="w-full py-10 max-w-7xl px-4 mx-auto">
        <nav
          style={{
            boxShadow:
              "0px 0px 0px 1px rgba(16, 22, 26, 0.08), 0px 8px 24px 0px rgba(16, 22, 26, 0.10)",
          }}
          className="bg-white dark:bg-[#1C2127] dark:text-white rounded-sm font-berkeley shadow-[0px_0px_0px_1px_rgba(16,22,26,0.08),0px_8px_24px_0px_rgba(16,22,26,0.10)] h-14 flex justify-between items-center px-10"
        >
          <div className="flex gap-12 items-center">
            <Link href="/">
              <Logo />
            </Link>
            {/* <div className="flex gap-8 text-[#252A31] items-center text-sm leading-10">
              <Link href="#">Features</Link>
              <Link href="#">Integrations</Link>
              <Link href="#">Customers</Link>
            </div> */}
          </div>
          <div className="flex gap-8 text-[#252A31] items-center text-sm leading-10">
            {/* <Link href="#">Changelog</Link>
            <Link href="#">Docs</Link> */}
            <Link
              href="https://app.rollup.ai/"
              className="bg-[#2D72D2] text-white px-4 rounded-sm"
            >
              Go to app
            </Link>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <IconDarkMode className="dark:text-white" />
            </button>
          </div>
        </nav>
      </header>
      {children}
      <div className="w-full bg-[#1B283B] bg-[url('/img/privacy-cta-bg.png')] bg-no-repeat bg-center  h-64 flex items-center">
        <div className="flex items-center justify-between w-full max-w-7xl px-4 mx-auto">
          <h4 className="font-blender text-4xl font-bold text-white ">
            Discover a world of possibilities with Rollup app
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
        <div className="max-w-7xl px-4 gap-6 flex w-full py-12 mx-auto justify-between dark:bg-[#111418] text-[#1B283B] dark:text-white">
          <div className="w-3/12">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="w-6/12 justify-center flex gap-36 ">
            <Link href="/contact">Contact</Link>
            <Link href="/jobs">Jobs</Link>
            {/*<div className="flex flex-col gap-3">
              <Link href="#">Contact</Link>
              <Link href="/jobs">Jobs</Link>
            </div>
             <div className="flex flex-col gap-3">
              <Link href="#">Customers</Link>
              <Link href="#">Docs</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="mailto:info@rollup.ai">Contact</Link>
              <Link href="#">Additional page</Link>
            </div> */}
          </div>
          <div className="w-3/12 flex justify-end">
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
          <div className="max-w-7xl px-4 w-full flex justify-between items-center mx-auto text-white font-blender py-3">
            <p>
              &copy; {new Date().getFullYear()}, Rollup. All Rights Reserved
            </p>
            <div className="flex items-center divide-x">
              <Link href="/privacy" className="px-4">
                Privacy policy
              </Link>
              <Link href="#" className="px-4">
                Terms and conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
