import Link from "next/link";
import LogoLight from "./icons/LogoLight";
import IconLinkedin from "./icons/IconLinkedin";
import IconTwitter from "./icons/IconTwitter";
import LogoDark from "./icons/LogoDark";
import IconChevronRight from "./icons/IconChevronRight";

const headerMenus = [
  {
    title: "Features",
    path: "#features",
  },
  {
    title: "Integrations",
    path: "#integrations",
  },
  {
    title: "Customers",
    path: "#customers",
  },
  {
    title: "Pricing",
    path: "#pricing",
  },
  {
    title: "Security",
    path: "#security",
  },
  {
    title: "About",
    path: "#about",
  },
];

const footerMenus = [
  {
    title: "Product",
    menus: [
      {
        title: "Customers",
        url: "#",
      },
      {
        title: "Industries",
        url: "#",
      },
      {
        title: "Features",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
      {
        title: "Docs",
        url: "#",
      },
      {
        title: "Studies",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    menus: [
      {
        title: "Company Overview",
        url: "#",
      },
      {
        title: "Careers",
        url: "/jobs",
      },
      {
        title: "Press",
        url: "#",
      },
      {
        title: "Investors",
        url: "#",
      },
    ],
  },
  {
    title: "Legal",
    menus: [
      {
        title: "Terms of Service",
        url: "/terms",
      },
      {
        title: "Privacy Policy",
        url: "/privacy",
      },
      {
        title: "GDPR",
        url: "#",
      },
    ],
  },
  {
    title: "Contact",
    menus: [
      {
        title: "Contact Us",
        url: "/contact",
      },
      {
        title: "Social Link Icons",
        url: "#",
      },
    ],
  },
];

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[#16181C] font-blender antialiased overflow-hidden">
      <header className="text-[#16181C] font-blender antialiased w-full bg-[rgba(255,255,255,0.80)] border-b border-b-[#DCE0E5] sticky top-0 backdrop-blur-[20px] z-40">
        <nav className="max-w-7xl px-4 w-full mx-auto flex items-center justify-between h-14 font-semibold text-lg">
          <div className="flex items-center gap-8">
            <Link href="/">
              <LogoLight className="h-10" />
            </Link>
            <div className="items-center w-full gap-8 hidden lg:flex">
              {headerMenus.map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  className="hover:text-[#2D72D2] transition-colors"
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 h-max shrink-0">
            <Link
              href="https://app.rollup.ai/"
              className="hover:text-[#2D72D2] transition-colors"
            >
              Login
            </Link>
            <Link
              href="https://app.rollup.ai/"
              className="py-1.5 px-3 rounded-sm bg-[#2D72D2] hover:bg-[#215DB0] transition-colors text-white"
            >
              Go to app
            </Link>
          </div>
        </nav>
      </header>
      {children}
      <section className="bg-[url(/img/footer-blue-line.png)] bg-[#2D72D2] mt-40 bg-no-repeat w-full bg-right bg-contain">
        <div className="max-w-7xl px-4 mx-auto w-full py-20 md:py-32">
          <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl">
            Ready to engineer faster?
          </h2>
          <div className="flex gap-4 mt-4">
            <Link
              href="https://app.rollup.ai/"
              className="bg-white hover:bg-[#ffffffe0] text-[#2D72D2] font-semibold flex gap-2 rounded-sm px-4 items-center justify-center py-2"
            >
              <span>Start for Free</span>
              <IconChevronRight className="h-3 w-3 text-[#2D72D2]" />
            </Link>
            <Link
              href="https://app.rollup.ai/"
              className="bg-[#f6f7f918] hover:bg-[#f6f7f93d] transition-colors text-white border border-white font-semibold flex gap-2 rounded-sm px-4 items-center justify-center py-2"
            >
              <span>Talk to Sales</span>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-[#16181C] w-full">
        <div className="max-w-7xl mx-auto px-4 text-white py-24">
          <div className="w-full flex flex-col gap-8 md:gap-0 md:flex-row">
            <div className="md:w-4/12">
              <Link href="/">
                <LogoDark />
              </Link>
              <div className="text-[#ABB3BF] mt-3">
                <p>© Copyright {new Date().getFullYear()} Rollup</p>
                <p className="mt-2">9255 W Sunset Blvd STE 1100</p>
                <p>90069-3308 West Hollywood, CA</p>
                <p>United States</p>
              </div>
            </div>
            <div className="md:w-8/12 flex flex-wrap gap-8 lg:gap-0 justify-between">
              {footerMenus.map((menu) => (
                <div key={menu.title} className="flex flex-col gap-3">
                  <h4 className="text-2xl font-medium">{menu.title}</h4>
                  <ul className="list-none text-lg space-y-3 text-[#ABB3BF]">
                    {menu.menus.map((menu) => (
                      <li key={menu.title}>
                        <Link href={menu.url}>{menu.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-medium">Social</h4>
                <div className="flex gap-4">
                  <Link href="#">
                    <IconLinkedin className="fill-white h-5 w-5" />
                  </Link>
                  <Link href="#">
                    <IconTwitter className="fill-white h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
