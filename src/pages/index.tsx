import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconTwitter from "@/components/icons/IconTwitter";
import { Fragment, useState } from "react";
import LogoLight from "@/components/icons/LogoLight";
import IconChevronRight from "@/components/icons/IconChevronRight";
import Image from "next/image";
import ChiplyticsLogo from "../../public/img/chiplytics.png";
import SparkmateLogo from "../../public/img/sparkmate.png";
import OrangewoodLogo from "../../public/img/orangewood..png";
import VuecasonLogo from "../../public/img/vuecason.png";
import CollaborationFeaturesImage from "../../public/img/collaboration-features.svg";
import FullHistoryAndVersioningImage from "../../public/img/full-history-and-versioning.svg";
import ProjectManagementImage from "../../public/img/project-management.svg";
import AnotationImage from "../../public/img/anotation.svg";
import KeyboardNavigationImage from "../../public/img/keyboard-navigation.svg";
import DragAndDropImage from "../../public/img/drag-and-drop.svg";
import RealTimeImage from "../../public/img/realtime.svg";
import ReferenceAnyObjectAnywhereImage from "../../public/img/reference-any-object-anywhere.svg";
import ApiImage from "../../public/img/api.svg";
import CommandBarImage from "../../public/img/command-bar.svg";

// integrations
import Microsoft365Image from "../../public/img/integrations/microsoft-365.png";
import GoogleImage from "../../public/img/integrations/google.png";
import NotionImage from "../../public/img/integrations/notion.png";
import JiraImage from "../../public/img/integrations/jira.png";
import LinearAppImage from "../../public/img/integrations/linear-app.png";

import SlackImage from "../../public/img/integrations/slack.png";
import MicrosoftTeamImage from "../../public/img/integrations/microsoft-team.png";
import GmailImage from "../../public/img/integrations/gmail.png";

import SmartsheetImage from "../../public/img/integrations/smartsheet.png";
import JamaImage from "../../public/img/integrations/jama.png";

import SolidWorksImage from "../../public/img/integrations/solidworks.png";
import IproImage from "../../public/img/integrations/ipro.png";
import NxImage from "../../public/img/integrations/nx.png";
import OnshapeImage from "../../public/img/integrations/onshape.png";
import SwImage from "../../public/img/integrations/sw.png";

import SOCImage from "../../public/img/soc.svg";
import ItarImage from "../../public/img/itar.svg";
import SelfHostImage from "../../public/img/self-host.png";
import LogoDark from "@/components/icons/LogoDark";

const HighlightCode = dynamic(() => import("@/components/HighlightCode"), {
  ssr: false,
});

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

const testimonial = {
  testimonail:
    "Testimonial text can be around 3-4 sentences. We can add the links to the social networks of this persons to prove that this person is real.",
  author: {
    name: "Name Surname",
    title: "Ceo of the Company",
    imgUrl: "/img/testimonial-author-sample.png",
  },
  socials: {
    x: "https://twitter.com/home",
    linkedin: "https://www.linkedin.com",
  },
};

const testimonials = Array.from<typeof testimonial>({ length: 3 }).fill(
  testimonial
);

function IconSystemModeling(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <path
        d="M2.66699 20H16.0003V26.6666H22.667V20H29.3337V13.3333H16.0003V6.66663H9.33366V13.3333H2.66699V20Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M9.33301 20V13.3334H15.9997V20H22.6663V13.3334"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <rect
        x="9.33301"
        y="6.66663"
        width="6.66667"
        height="6.66667"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <rect
        x="16"
        y="20"
        width="6.66667"
        height="6.66667"
        stroke="inherit"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function IconDigitalThreads(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <path
        d="M9 15.6667L9 23C9 24.1046 9.89543 25 11 25L19 25M9 15.6667L19 15.6667M9 15.6667L9 10"
        strokeWidth="1.44444"
        stroke="inherit"
      />
      <mask id="path-2-inside-1_6690_7704" fill="white">
        <rect x="4" y="4" width="10" height="6" rx="1.17308" />
      </mask>
      <rect
        x="4"
        y="4"
        width="10"
        height="6"
        rx="1.17308"
        stroke="inherit"
        strokeWidth="3.38889"
        mask="url(#path-2-inside-1_6690_7704)"
      />
      <mask id="path-3-inside-2_6690_7704" fill="white">
        <rect x="18" y="13" width="10" height="6" rx="1.16669" />
      </mask>
      <rect
        x="18"
        y="13"
        width="10"
        height="6"
        rx="1.16669"
        stroke="inherit"
        strokeWidth="3.37044"
        mask="url(#path-3-inside-2_6690_7704)"
      />
      <mask id="path-4-inside-3_6690_7704" fill="white">
        <rect x="18" y="22" width="10" height="6" rx="1.16669" />
      </mask>
      <rect
        x="18"
        y="22"
        width="10"
        height="6"
        rx="1.16669"
        stroke="inherit"
        strokeWidth="3.37044"
        mask="url(#path-4-inside-3_6690_7704)"
      />
    </svg>
  );
}
function IconCadReviews(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <path
        d="M0.75 23.25V8.31066L8.31066 0.75H23.25V15.6893L15.6893 23.25H0.75Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M8.75 0.75H23.25L23.25 15.25H8.75L8.75 0.75Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M0.477652 23.25L8.31098 15.4166H23.523L15.6897 23.25H0.477652Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M0.75 8.75H15.25L15.25 23.25H0.75L0.75 8.75Z"
        stroke="inherit"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function IconRequirements(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="1.33333"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <path
        d="M17.333 8L21.7775 8H23.9997"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.333 13.3334H21.7775H23.9997"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.333 18.6666H21.7775H23.9997"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.333 24H21.7775H23.9997"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="8"
        y="8"
        width="5.33333"
        height="5.33333"
        rx="0.666667"
        stroke="inherit"
        strokeWidth="1.5"
      />
      <rect
        x="8"
        y="18.6666"
        width="5.33333"
        height="5.33333"
        rx="0.666667"
        stroke="inherit"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function IconProductDataManagement(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#738091"
      {...props}
    >
      <path
        d="M6.66699 28V6.66667C6.66699 5.95942 6.94794 5.28115 7.44804 4.78105C7.94814 4.28095 8.62641 4 9.33366 4H22.667C23.3742 4 24.0525 4.28095 24.5526 4.78105C25.0527 5.28115 25.3337 5.95942 25.3337 6.66667V28L21.3337 25.3333L18.667 28L16.0003 25.3333L13.3337 28L10.667 25.3333L6.66699 28Z"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.33337H20M12 14.6667H20M17.3333 20H20"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const moduleMenus = [
  {
    title: "System Modeling",
    icon: IconSystemModeling,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    videoUrl: "/video/system-modeling.mp4",
  },
  {
    title: "Digital Threads",
    icon: IconDigitalThreads,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    videoUrl: "/video/digital-threads.mp4",
  },
  {
    title: "CAD Reviews",
    icon: IconCadReviews,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    videoUrl: "/video/cad-reviews.mp4",
  },
  {
    title: "Requirements",
    icon: IconRequirements,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    videoUrl: "/video/cad-reviews.mp4",
  },
  {
    title: "Product Data Management",
    icon: IconProductDataManagement,
    description:
      "Effortlessly evolve your system model from concept to production, seamlessly integrating engineering data and parameters over time.",
    videoUrl: "/video/product-data-management.mp4",
  },
] as const;

function ModulesMenu() {
  const [openedModule, setOpenedModule] =
    useState<(typeof moduleMenus)[number]["title"]>("System Modeling");

  const videoUrl = moduleMenus.find(
    (menu) => menu.title === openedModule
  )!.videoUrl;

  return (
    <div className="w-full mt-8 flex gap-8">
      <div className="flex w-4/12 gap-5 shrink-0">
        <div className="h-full w-0.5 shrink-0 rounded-full bg-gradient-to-b from-10% from-[#eef6ff] via-50% via-[#B7D7F9]"></div>
        <div className="flex flex-col">
          {moduleMenus.map((module) => {
            const isOpened = openedModule === module.title;

            return (
              <button
                type="button"
                onClick={() => setOpenedModule(module.title)}
                key={module.title}
                className={`p-5 text-left relative rounded-lg flex flex-col justify-center ${
                  isOpened ? "border border-[#DBE4EF]" : "hover:bg-gray-50 "
                }`}
              >
                {isOpened && (
                  <div className="absolute z-10 -left-[33px] ">
                    <div className="border-gray-300/60 border-4 rounded-full">
                      <div className="border border-gray-300 rounded-full">
                        <div className="h-3 w-3 bg-blue-500 border-2 border-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
                {isOpened && (
                  <div className="bg-gradient-to-b from-20% from-[#B7D7F9] via-50% via-[#4C90F0] to-80% to-[#B7D7F9] w-0.5 rounded-full absolute -left-[23px] h-full top-0"></div>
                )}
                <div className="flex items-center gap-2">
                  <module.icon
                    className={`w-10 ${isOpened ? "stroke-[#4C90F0]" : ""}`}
                  />
                  <h3 className="font-bold text-xl">{module.title}</h3>
                </div>
                {isOpened && (
                  <p className="text-lg leading-tight mt-1">
                    {module.description}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-8/12 ">
        <div className="rounded-xl overflow-hidden w-max ml-8">
          <video loop autoPlay muted src={videoUrl} />
        </div>
      </div>
    </div>
  );
}

const codeTemplate = `// Get a user's access token and
// profile data from and Identity Provider

import WorkOS from '@workos-inc/code';
const workos = new WorkOS('sk_example_123456789')
const profile = await workos.sso.getProfileAndToken({
  code: '0123928382193219321',
  clientID: 'client_123456789'
})
`;

const codes = [
  {
    language: "Node.js",
    lang: "javascript",
    code: `// Get a user's access token and
// profile data from and Identity Provider

import WorkOS from '@workos-inc/code';
const workos = new WorkOS('sk_example_123456789')
const profile = await workos.sso.getProfileAndToken({
  code: '0123928382193219321',
  clientID: 'client_123456789'
})
`,
  },
  {
    language: "Ruby",
    lang: "ruby",
    code: `# Get a user’s access token and
# profile data from an Identity Provider

require 'workos'

WorkOS.key = 'sk_example_123456789'

WorkOS::SSO.profile_and_token(
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  client_id: 'client_123456789',
)`,
  },
  {
    language: "Python",
    lang: "python",
    code: `# Get a user’s access token and
# profile data from an Identity Provider

import workos
from workos import client

workos.api_key = 'sk_example_123456789'
workos.client_id = 'client_123456789'

client.sso.get_profile_and_token('01E2RJ4C05B52KKZ8FSRDAP23J')`,
  },
  {
    language: "Java",
    lang: "java",
    code: `// Get a user’s access token and
// profile data from an Identity Provider

import com.workos.WorkOS;

WorkOS workos = new WorkOS("sk_example_123456");

ProfileAndToken profileAndToken = workos.sso.getProfileAndToken("01E2RJ4C05B52KKZ8FSRDAP23J", "client_123456789");

Profile profile = profileAndToken.profile;`,
  },
  {
    language: "Go",
    lang: "go",
    code: `// Get a user’s access token and
// profile data from an Identity Provider

import "github.com/workos/workos-go/pkg/sso"

sso.SetAPIKey("sk_example_123456789")

sso.GetProfileAndToken(
  context.Background(),
  sso.GetProfileAndTokenOptions{
    Code: "01E2RJ4C05B52KKZ8FSRDAP23J",
  }
)`,
  },
  {
    language: ".NET",
    lang: "csharp",
    code: `// Get a user’s access token and
// profile data from an Identity Provider

WorkOS.SetApiKey("sk_example_123456");

var ssoService = new SSOService();
var options = new GetProfileAndTokenOptions
{
    ClientId = "client_123456789",
    Code = "01E2RJ4C05B52KKZ8FSRDAP23J",
};

var profile = await ssoService.GetProfileAndToken(options);`,
  },
  {
    language: "cURL",
    lang: "bash",
    code: `curl --request POST 
--url "https://api.workos.com/sso/token? 
client_id=client_123456789& 
client_secret=sk_example_123456789& 
grant_type=authorization_code& 
code=01E2RJ4C05B52KKZ8FSRDAP23J"
  `,
  },
] as const;

type Codes = typeof codes;

const developerApiMenus = [
  {
    title: "Set a property",
    description: "Maximum 1 sentence and the restrictions is 60",
    codes: codes,
  },
  {
    title: "Create blocks 1",
    description: "Maximum 1 sentence and the restrictions is 60",
    codes: codes,
  },
  {
    title: "Create blocks 2",
    description: "Maximum 1 sentence and the restrictions is 60",
    codes: codes,
  },
  {
    title: "Create blocks 3",
    description: "Maximum 1 sentence and the restrictions is 60",
    codes: codes,
  },
] as const;

function CodeBlock({ codes }: { codes: Codes }) {
  const [activeLanguage, setActiveLanguage] = useState<
    Codes[number]["language"]
  >(codes[0].language);

  const selectedCode = codes.find((code) => code.language === activeLanguage)!;

  return (
    <div className="w-full ml-8 h-full rounded-lg border border-[#252A31] shadow-[0px_0px_0px_4px_#2F333B]">
      <div className="flex border-b border-[#383E47] gap-2">
        {codes.map((code) => (
          <button
            onClick={() => setActiveLanguage(code.language)}
            key={code.language}
            className={`px-3 font-medium py-1.5 hover:text-[#4C90F0] transition-colors border-b-2 hover:border-b-[#4C90F0] ${
              code.language === activeLanguage
                ? "border-b-[#4C90F0]"
                : "border-b-transparent"
            }`}
          >
            {code.language}
          </button>
        ))}
      </div>
      <div className="w-full h-full ">
        <HighlightCode code={selectedCode.code} language={selectedCode.lang} />
      </div>
    </div>
  );
}

function DeveloperApiMenu() {
  const [openedMenu, setOpenedMenu] =
    useState<(typeof developerApiMenus)[number]["title"]>("Set a property");

  const codes = developerApiMenus.find(
    (menu) => menu.title === openedMenu
  )!.codes;

  return (
    <div className="w-full mt-8 flex gap-8">
      <div className="flex w-4/12 gap-5 shrink-0">
        <div className="h-full w-0.5 shrink-0 rounded-full bg-gradient-to-b from-10% from-[#4c90f02d] via-80% via-transparent"></div>
        <div className="flex flex-col">
          {developerApiMenus.map((menu) => {
            const isOpened = openedMenu === menu.title;

            return (
              <button
                type="button"
                onClick={() => setOpenedMenu(menu.title)}
                key={menu.title}
                className={`p-5 text-left relative rounded-lg flex flex-col justify-center ${
                  isOpened
                    ? "border border-[#252A31] shadow-[0px_0px_0px_4px_#2F333B]"
                    : "text-[#ABB3BF]"
                }`}
              >
                {isOpened && (
                  <div className="absolute z-10 -left-[33px] ">
                    <div className="border-gray-600/60 border-4 rounded-full">
                      <div className="border border-[#1C2127] rounded-full">
                        <div className="h-3 w-3 bg-blue-500 border-2 border-[#1C2127] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
                {isOpened && (
                  <div className="bg-gradient-to-b from-20% from-transparent via-50% via-[#4C90F0] to-80% to-transparent w-0.5 rounded-full absolute -left-[23px] h-full top-0"></div>
                )}
                <h3 className="font-bold text-xl">{menu.title}</h3>
                <p className="text-lg leading-tight mt-1">{menu.description}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-8/12">
        <CodeBlock codes={codes} />
      </div>
    </div>
  );
}

const integrations = [
  {
    images: [
      Microsoft365Image,
      GoogleImage,
      NotionImage,
      JiraImage,
      LinearAppImage,
    ],
    title: "Productivity",
    description: "Keep your docs and tasks in-sync.",
  },
  {
    images: [SlackImage, MicrosoftTeamImage, GmailImage],
    title: "Communication",
    description: "Keep your team up to date in real time.",
  },
  {
    images: [SmartsheetImage, JamaImage],
    title: "Program management",
    description:
      "Enhance your programmatic with digital threads and traceability..",
  },
  {
    images: [SolidWorksImage, OnshapeImage, SwImage, NxImage, IproImage],
    title: "CAD + Engineering Tools",
    description:
      "Build an end to end digital thread with the tools engineers know and love",
  },
];

const securities = [
  {
    image: SOCImage,
    title: "SOC2",
    description: "Maximum 2 sentence and the restrictions is 120 symbols",
  },
  {
    image: ItarImage,
    title: "Itar",
    description: "Maximum 2 sentence and the restrictions is 120 symbols",
  },
  {
    image: SelfHostImage,
    title: "Self-host or GovCloud",
    description: "Maximum 2 sentence and the restrictions is 120 symbols",
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
        url: "#",
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
        url: "#",
      },
      {
        title: "Privacy Policy",
        url: "#",
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
        url: "#",
      },
      {
        title: "Social Link Icons",
        url: "#",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rollup — Collaborative engineering environment</title>
      </Head>
      <div className="text-[#16181C] font-blender antialiased overflow-hidden">
        <header className="w-full bg-[rgba(255,255,255,0.80)] border-b border-b-[#DCE0E5] sticky top-0 backdrop-blur-[20px] z-40">
          <nav className="max-w-7xl px-4 w-full mx-auto flex items-center justify-between h-14 font-semibold text-lg">
            <div className="flex items-center gap-8">
              <Link href="/">
                <LogoLight className="h-10" />
              </Link>
              {headerMenus.map((menu) => (
                <Link key={menu.path} href={menu.path}>
                  {menu.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 h-max">
              <Link href="https://app.rollup.ai/">Login</Link>
              <Link
                href="https://app.rollup.ai/"
                className="py-1.5 px-3 bg-[#2D72D2] text-white"
              >
                Go to app
              </Link>
            </div>
          </nav>
        </header>
        <section className="bg-[url('/img/home-bg-line.png')] bg-no-repeat bg-center">
          <div className="max-w-7xl px-4 mx-auto mt-24">
            <div className="mx-auto flex flex-col justify-center items-center">
              <h1 className="text-7xl font-semibold">
                The Platform for Moonshots
              </h1>
              <p className="font-semibold text-2xl">
                The modern collaboration + low-code platform for engineering
                teams.
              </p>
              <Link
                href="https://app.rollup.ai/"
                className="flex items-center gap-1 mt-6 bg-[#2D72D2] text-white px-5 py-2"
              >
                <span>Get Started</span>
                <IconChevronRight className="h-4 w-4" />
              </Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/hoops-new-visions.svg"
              alt="app"
              className="mx-auto mt-20"
            />
          </div>

          <div className="w-full flex items-center justify-center gap-14 mt-20 px-4">
            <Image src={ChiplyticsLogo} alt="Chiplytics" />
            <Image src={SparkmateLogo} alt="Sparkmate" />
            <Image src={OrangewoodLogo} alt="Orangewood" />
            <Image src={VuecasonLogo} alt="Vuecason" />
          </div>

          <div className="w-full mx-auto flex justify-center gap-10 mt-24 px-4">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-9 border border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD] rounded-lg max-w-sm w-full"
              >
                <div className="flex gap-3 items-center">
                  <Image
                    src={testimonial.author.imgUrl}
                    alt={testimonial.author.name}
                    height={48}
                    width={48}
                    className="shrink-0 h-12 w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-lg leading-none">
                      {testimonial.author.name}
                    </span>
                    <span className="text-base leading-none font-medium">
                      {testimonial.author.title}
                    </span>
                  </div>
                  <div className="flex self-start ml-auto gap-2">
                    <Link href={testimonial.socials.linkedin}>
                      <IconTwitter className="h-5 w-5" />
                    </Link>
                    <Link href={testimonial.socials.linkedin}>
                      <IconLinkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <p className="mt-4 text-lg leading-tight">
                  {testimonial.testimonail}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-7xl px-4 mx-auto mt-40">
          <h2 className="font-bold text-5xl">Modules</h2>
          <p className="text-2xl max-w-xl leading-tight mt-4 font-bold">
            Short description Technical Modules Short description Technical
            Modules Short description Technical
          </p>

          <ModulesMenu />
        </section>
        <section className="max-w-7xl px-4 mx-auto mt-40">
          <h2 className="font-bold text-5xl">Collaboration Features</h2>
          <p className="text-2xl max-w-xl leading-tight mt-4 font-bold">
            Short description Technical Modules Short description Technical
            Modules Short description Technical
          </p>

          {/* <ModulesMenu /> */}
          <div className="grid grid-cols-12 mt-8 w-full gap-8">
            <div className="col-span-8">
              <div className="h-full p-8 border rounded-lg border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD]">
                <h3 className="font-bold text-2xl">Inboxes</h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  Your Engineering Command Center: Centralize Changes,
                  Actionables, and Feedback in a Unified, Streamlined Inbox.
                  Condense hours of emails and context swithching into minutes
                  of feedback each day.
                </p>
                <Image
                  quality={100}
                  src={CollaborationFeaturesImage}
                  alt="Collaboration Features"
                  className="w-full rounded-lg border border-[#DBE4EF] overflow-hidden mt-8"
                />
              </div>
            </div>
            <div className="col-span-4">
              <div className="h-full p-8 border rounded-lg border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD]">
                <h3 className="font-bold text-2xl">
                  Full-history and Versioning
                </h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  Track Every change: Comprehensive History and Versioning for
                  Complete Project Transparency and Control.
                </p>
                <Image
                  quality={100}
                  src={FullHistoryAndVersioningImage}
                  alt="Full-history and Versioning"
                  className="w-full mt-8"
                />
              </div>
            </div>
            <div className="col-span-4">
              <div className="h-full p-8 border rounded-lg border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD]">
                <Image
                  quality={100}
                  src={ProjectManagementImage}
                  alt="Project Management"
                  className="w-full mb-8"
                />
                <h3 className="font-bold text-2xl">Project Management</h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  Integrated Project Management Statuses and Tasks for Seamless
                  Planning, Execution, and Tracking.
                </p>
              </div>
            </div>
            <div className="col-span-8">
              <div className="h-full p-8 border rounded-lg border-[#DBE4EF] shadow-[0px_0px_0px_4px_#F4F8FD]">
                <Image
                  quality={100}
                  src={AnotationImage}
                  alt="Anotation"
                  className="w-full rounded-lg h-96 object-cover overflow-hidden mb-8"
                />
                <h3 className="font-bold text-2xl">Anotation</h3>
                <p className="text-xl leading-tight mt-2 font-medium text-[#404854]">
                  Short description of the opportunity provided by Rollup system
                  Short description of the opportunity provided by Rollup system
                  Short description of the opportunity provided by Rollup system
                  the opportunity provided by Rollup system Short description of
                  the opportunity provided by Rollup system{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#1C2127] text-white mt-40 py-40">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="max-w-xl flex flex-col gap-4">
              <h2 className="font-bold text-4xl">
                With Rollup, you and your engineers can collaborate with
                information-rich workspaces...
              </h2>
              <p className="text-xl">
                ...that provide a 360° view of all your project&apos;s
                engineering data, context, and history into one place.
              </p>
            </div>

            <div className="w-full grid grid-cols-2 mt-12 gap-10">
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <Image
                  src={KeyboardNavigationImage}
                  alt="Keyboard Navigation"
                />
                <div>
                  <h3 className="text-xl font-semibold">Keyboard Navigation</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Jump between contexts and execute changes in milliseconds.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <Image src={DragAndDropImage} alt="Drag and Drop" />
                <div>
                  <h3 className="text-xl font-semibold">Drag and Drop</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Intuitive drag and drop interactions are everywhere.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <Image src={RealTimeImage} alt="Realtime" />
                <div>
                  <h3 className="text-xl font-semibold">Realtime</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Never think about refreshing the browser, or hitting save
                    again.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <Image
                  src={ReferenceAnyObjectAnywhereImage}
                  alt="Reference any object anywhere"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    Reference any object anywhere
                  </h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Our powerful syntax for linking objects and their values
                    means you&apos;ll never repeat yourself.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <Image src={ApiImage} alt="Api" />
                <div>
                  <h3 className="text-xl font-semibold">Api</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Great engineering teams build their own tools. First-class
                    APIs and Developer-friendly features mean you can
                    incorporate Rollup into your new and exisgting systems easy.
                  </p>
                </div>
              </div>
              <div className="border flex flex-col gap-8 rounded-lg border-[#383E47] p-9 bg-[#1C2127] shadow-[0px_0px_0px_4px_rgba(47,51,59,0.50)]">
                <Image src={CommandBarImage} alt="Command Bar" />
                <div>
                  <h3 className="text-xl font-semibold">Command Bar</h3>
                  <p className="text-[#ABB3BF] text-lg leading-tight mt-1">
                    Our global command bar lets you do anything anywhere in
                    seconds in Rollup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl px-4 mx-auto mt-40">
          <h2 className="font-bold text-5xl">Integrations</h2>

          <div className="grid gap-10 grid-cols-2 mt-14">
            {integrations.map((integration) => (
              <div
                key={integration.title}
                className="border leading-tight border-[#DBE4EF] rounded-lg p-9 w-full shadow-[0px_0px_0px_4px_#F4F8FD]"
              >
                <div className="flex gap-6 ">
                  {integration.images.map((image, i) => (
                    <div
                      className="h-12 w-12 shadow-[0px_0px_0px_4px_#F4F8FD] p-2 flex items-center justify-center border border-[#DBE4EF] rounded-lg"
                      key={i}
                    >
                      <Image alt={integration.title} src={image} />
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-xl">{integration.title}</h3>
                  <p className="text-lg">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full bg-[#1C2127] text-white mt-40 py-40">
          <div className="max-w-7xl px-4 mx-auto ">
            <h2 className="font-bold text-5xl">Developer-Friendly APIs</h2>
            <p className="text-2xl max-w-xl leading-tight mt-4 font-bold">
              Short description Technical Modules Short description Technical
              Modules Short description Technical
            </p>

            <DeveloperApiMenu />
          </div>
        </section>
        <section className="max-w-7xl px-4 mx-auto mt-40">
          <h2 className="font-bold text-5xl">Security</h2>
          <p className="text-2xl max-w-2xl leading-tight mt-4 font-bold">
            Rollup has experience helping our customers meet their specific
            regulatory and industry requirements. Our platform provides
            functionality that can be configured so that it operates to meet our
            customers&apos; requirements including:
          </p>

          {/* <ModulesMenu /> */}
          <div className="flex justify-between gap-8 w-full items-center mt-16">
            {securities.map((security, i) => (
              <Fragment key={security.title}>
                <div className="flex flex-col justify-center items-center text-center">
                  <Image src={security.image} alt={security.title} />
                  <h3 className="font-semibold text-2xl">{security.title}</h3>
                  <p className="text-lg">{security.description}</p>
                </div>
                {i % 1 === 0 && i !== securities.length - 1 ? (
                  <div
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(109, 150, 215, 0.00) 0%, rgba(109, 150, 215, 0.40) 49.61%, rgba(109, 150, 215, 0.00) 100%)",
                    }}
                    className="w-0.5 h-36 flex-grow "
                  />
                ) : null}
              </Fragment>
            ))}
          </div>
        </section>
        <section className="bg-[url(/img/footer-blue-line.png)] bg-[#2D72D2] mt-40 bg-no-repeat w-full bg-right bg-contain">
          <div className="max-w-7xl px-4 mx-auto w-full py-32">
            <h2 className="font-bold text-white text-5xl">
              Ready to engineer faster?
            </h2>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://app.rollup.ai/"
                className="bg-white hover:bg-[#ffffffe0] text-[#2D72D2] font-medium flex gap-2 rounded-sm px-4 items-center justify-center py-2"
              >
                <span>Start for Free</span>
                <IconChevronRight className="h-3 w-3 text-[#2D72D2]" />
              </Link>
              <Link
                href="https://app.rollup.ai/"
                className="bg-[#f6f7f918] hover:bg-[#f6f7f93d] transition-colors text-white border border-white font-medium flex gap-2 rounded-sm px-4 items-center justify-center py-2"
              >
                <span>Talk to Sales</span>
              </Link>
            </div>
          </div>
        </section>
        <footer className="bg-[#16181C] w-full">
          <div className="max-w-7xl mx-auto px-4 text-white py-24">
            <div className="w-full flex">
              <div className="w-4/12">
                <Link href="/">
                  <LogoDark />
                </Link>
                <p className="mt-3">
                  © Copyright {new Date().getFullYear()} Rollup
                </p>
                <p>1710 Rose Street, Berkeley, CA 94703</p>
              </div>
              <div className="w-8/12 flex justify-between">
                {footerMenus.map((menu) => (
                  <div key={menu.title} className="flex flex-col gap-2">
                    <h4 className="text-2xl font-medium">{menu.title}</h4>
                    <ul className="list-none text-lg">
                      {menu.menus.map((menu) => (
                        <li key={menu.title}>
                          <Link href={menu.url}>{menu.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex flex-col gap-2">
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
    </>
  );
}
