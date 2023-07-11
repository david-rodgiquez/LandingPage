import Head from "next/head";
import LayoutPage from "@/components/LayoutPage";
import { SVGProps } from "react";

import CollinPhoto from "../../../public/img/team/collin.jpg";
import BenjaminPhoto from "../../../public/img/team/benjamin.jpg";
import GabrielPhoto from "../../../public/img/team/gabriel.jpg";
import TrevorPhoto from "../../../public/img/team/trevor.jpg";
import NkechiPhoto from "../../../public/img/team/nkechi.jpg";
import MathewPhoto from "../../../public/img/team/mathew.jpg";
import CoreyPhoto from "../../../public/img/team/corey.jpg";
import AngusPhoto from "../../../public/img/team/angus.jpg";
import Image from "next/image";
import Link from "next/link";

function IconPlace(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="51"
      viewBox="0 0 38 51"
      fill="none"
      {...props}
    >
      <path
        d="M18.75 0.25C24.0885 0.380208 28.5156 2.20312 32.0312 5.71875C35.5469 9.23438 37.3698 13.6615 37.5 19C37.5 21.0182 37.2396 22.8411 36.7188 24.4688C36.1979 26.1615 35.1888 28.1471 33.6914 30.4258C32.194 32.7695 30.0456 35.8945 27.2461 39.8008C25.4232 42.4049 23.2422 45.5625 20.7031 49.2734C20.1823 49.9245 19.5312 50.25 18.75 50.25C17.9688 50.25 17.3177 49.9245 16.7969 49.2734C14.3229 45.6276 12.1419 42.5026 10.2539 39.8984C7.45443 35.9271 5.30599 32.7695 3.80859 30.4258C2.3112 28.1471 1.30208 26.1615 0.78125 24.4688C0.260417 22.8411 0 21.0182 0 19C0.130208 13.6615 1.95312 9.23438 5.46875 5.71875C8.98438 2.20312 13.4115 0.380208 18.75 0.25ZM19.4336 48.3945C21.9076 44.7487 24.0885 41.6237 25.9766 39.0195C25.9766 38.9544 25.9766 38.9219 25.9766 38.9219C28.7109 35.0156 30.8268 31.9557 32.3242 29.7422C33.7565 27.4635 34.7331 25.5755 35.2539 24.0781C35.7747 22.5156 36.0026 20.8229 35.9375 19C35.8073 14.1172 34.1146 10.0807 30.8594 6.89062C27.6693 3.63542 23.6328 1.94271 18.75 1.8125C13.8672 1.94271 9.83073 3.63542 6.64062 6.89062C3.38542 10.0807 1.69271 14.1172 1.5625 19C1.4974 20.8229 1.72526 22.5156 2.24609 24.0781C2.76693 25.5755 3.74349 27.431 5.17578 29.6445C6.60807 31.9232 8.72396 35.0156 11.5234 38.9219C13.4115 41.5911 15.5924 44.7487 18.0664 48.3945C18.3268 48.6549 18.5547 48.7526 18.75 48.6875C18.9453 48.7526 19.1732 48.6549 19.4336 48.3945Z"
        fill="#2D72D2"
      />
    </svg>
  );
}

function IconUsers(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="51"
      viewBox="0 0 63 51"
      fill="none"
      {...props}
    >
      <path
        d="M54.3945 19C56.6732 19.0651 58.5938 19.9115 60.1562 21.5391C61.6536 23.1667 62.4349 25.1849 62.5 27.5938C62.3698 29.026 61.6211 29.8073 60.2539 29.9375H43.75C43.2943 29.8724 43.0339 29.612 42.9688 29.1562C43.0339 28.7005 43.2943 28.4401 43.75 28.375H60.2539C60.6445 28.3099 60.8724 28.0495 60.9375 27.5938C60.8724 25.5755 60.2214 23.9154 58.9844 22.6133C57.7474 21.3112 56.2174 20.6276 54.3945 20.5625H46.875C46.4193 20.5625 45.9635 20.6276 45.5078 20.7578C45.0521 20.8229 44.7266 20.6276 44.5312 20.1719C44.4661 19.651 44.6615 19.3255 45.1172 19.1953C45.7031 19.0651 46.2891 19 46.875 19H54.3945ZM50 15.875C47.7865 15.8099 45.931 15.0612 44.4336 13.6289C43.0013 12.1315 42.2526 10.276 42.1875 8.0625C42.2526 5.84896 43.0013 3.99349 44.4336 2.49609C45.931 1.0638 47.7865 0.315104 50 0.25C52.2135 0.315104 54.069 1.0638 55.5664 2.49609C56.9987 3.99349 57.7474 5.84896 57.8125 8.0625C57.7474 10.276 56.9987 12.1315 55.5664 13.6289C54.069 15.0612 52.2135 15.8099 50 15.875ZM50 1.8125C48.2422 1.8776 46.7773 2.49609 45.6055 3.66797C44.4336 4.83984 43.8151 6.30469 43.75 8.0625C43.8151 9.82031 44.4336 11.2852 45.6055 12.457C46.7773 13.6289 48.2422 14.2474 50 14.3125C51.7578 14.2474 53.2227 13.6289 54.3945 12.457C55.5664 11.2852 56.1849 9.82031 56.25 8.0625C56.1849 6.30469 55.5664 4.83984 54.3945 3.66797C53.2227 2.49609 51.7578 1.8776 50 1.8125ZM12.5 15.875C10.2865 15.8099 8.43099 15.0612 6.93359 13.6289C5.5013 12.1315 4.7526 10.276 4.6875 8.0625C4.7526 5.84896 5.5013 3.99349 6.93359 2.49609C8.43099 1.0638 10.2865 0.315104 12.5 0.25C14.7135 0.315104 16.569 1.0638 18.0664 2.49609C19.4987 3.99349 20.2474 5.84896 20.3125 8.0625C20.2474 10.276 19.4987 12.1315 18.0664 13.6289C16.569 15.0612 14.7135 15.8099 12.5 15.875ZM12.5 1.8125C10.7422 1.8776 9.27734 2.49609 8.10547 3.66797C6.93359 4.83984 6.3151 6.30469 6.25 8.0625C6.3151 9.82031 6.93359 11.2852 8.10547 12.457C9.27734 13.6289 10.7422 14.2474 12.5 14.3125C14.2578 14.2474 15.7227 13.6289 16.8945 12.457C18.0664 11.2852 18.6849 9.82031 18.75 8.0625C18.6849 6.30469 18.0664 4.83984 16.8945 3.66797C15.7227 2.49609 14.2578 1.8776 12.5 1.8125ZM19.5312 29.1562C19.4661 29.612 19.2057 29.8724 18.75 29.9375H2.24609C0.878906 29.8073 0.130208 29.026 0 27.5938C0.0651042 25.1849 0.846354 23.1667 2.34375 21.5391C3.90625 19.9115 5.85938 19.0651 8.20312 19H15.625C16.1458 19 16.7318 19.0651 17.3828 19.1953C17.8385 19.3255 18.0339 19.651 17.9688 20.1719C17.7734 20.6276 17.4479 20.8229 16.9922 20.7578C16.5365 20.6276 16.0807 20.5625 15.625 20.5625H8.20312C6.3151 20.6276 4.7526 21.3112 3.51562 22.6133C2.27865 23.9154 1.6276 25.5755 1.5625 27.5938C1.6276 28.0495 1.85547 28.3099 2.24609 28.375H18.75C19.2057 28.4401 19.4661 28.7005 19.5312 29.1562ZM31.25 31.5C28.3854 31.4349 25.9766 30.4583 24.0234 28.5703C22.1354 26.6172 21.1914 24.2083 21.1914 21.3438C21.2565 18.4792 22.2331 16.0703 24.1211 14.1172C26.0091 12.2292 28.3854 11.2526 31.25 11.1875C34.0495 11.2526 36.4258 12.2292 38.3789 14.1172C40.2669 16.0703 41.2435 18.4792 41.3086 21.3438C41.2435 24.2083 40.2669 26.6172 38.3789 28.5703C36.4909 30.4583 34.1146 31.4349 31.25 31.5ZM31.25 12.75C28.8411 12.8151 26.8229 13.6615 25.1953 15.2891C23.5677 16.9167 22.7214 18.9349 22.6562 21.3438C22.7214 23.7526 23.5677 25.7708 25.1953 27.3984C26.8229 29.026 28.8411 29.8724 31.25 29.9375C33.6589 29.8724 35.6771 29.026 37.3047 27.3984C38.9323 25.7708 39.7786 23.7526 39.8438 21.3438C39.7786 18.9349 38.9323 16.9167 37.3047 15.2891C35.6771 13.6615 33.6589 12.8151 31.25 12.75ZM36.1328 34.625C40.0391 34.6901 43.2943 35.9596 45.8984 38.4336C48.5026 40.9076 49.8698 43.9674 50 47.6133C50 48.3945 49.7396 49.013 49.2188 49.4688C48.6979 49.9896 48.0469 50.25 47.2656 50.25H15.2344C14.4531 50.25 13.8021 49.9896 13.2812 49.4688C12.7604 49.013 12.5 48.3945 12.5 47.6133C12.6302 43.9674 13.9974 40.9076 16.6016 38.4336C19.2057 35.9596 22.4609 34.6901 26.3672 34.625H36.1328ZM47.2656 48.6875C47.9818 48.6224 48.3724 48.2643 48.4375 47.6133C48.3724 44.4232 47.168 41.7214 44.8242 39.5078C42.4805 37.3594 39.5833 36.2526 36.1328 36.1875H26.3672C22.9167 36.2526 20.0195 37.3594 17.6758 39.5078C15.332 41.7214 14.1276 44.4232 14.0625 47.6133C14.1276 48.2643 14.5182 48.6224 15.2344 48.6875H47.2656Z"
        fill="#2D72D2"
      />
    </svg>
  );
}

function IconShakeHand(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="40"
      viewBox="0 0 63 40"
      fill="none"
      {...props}
    >
      <path
        d="M61.9688 6.75C62.4245 6.8151 62.6849 7.07552 62.75 7.53125V32.5312C62.6849 32.987 62.4245 33.2474 61.9688 33.3125H56.5C54.4818 33.1823 53.2448 32.1406 52.7891 30.1875H51.6172C51.1615 30.1224 50.901 29.862 50.8359 29.4062C50.901 28.8854 51.1615 28.625 51.6172 28.625H52.5938V8.3125H49.957L49.6641 8.11719C45.6276 4.14583 40.8099 2.1276 35.2109 2.0625H34.332C33.7461 2.0625 33.2253 2.25781 32.7695 2.64844L23.1016 11.5352C22.5156 12.1211 22.1901 12.8372 22.125 13.6836C22.125 14.4648 22.418 15.181 23.0039 15.832C23.3294 16.2227 23.8828 16.5482 24.6641 16.8086C25.4453 17.0039 26.2591 16.8411 27.1055 16.3203C27.2357 16.1901 27.3659 16.0599 27.4961 15.9297C27.6263 15.7995 28.2122 15.2461 29.2539 14.2695C30.2956 13.293 32.2812 11.5026 35.2109 8.89844C35.6016 8.63802 35.9596 8.67057 36.2852 8.99609C36.5456 9.38672 36.5456 9.74479 36.2852 10.0703L28.2773 17.2969C27.3008 18.0781 26.3242 18.4688 25.3477 18.4688C23.7852 18.3385 22.6133 17.8177 21.832 16.9062C20.9206 15.9297 20.4974 14.8229 20.5625 13.5859C20.5625 12.4141 21.0182 11.3724 21.9297 10.4609L22.0273 10.3633L31.6953 1.47656C32.4766 0.825521 33.3555 0.5 34.332 0.5H35.2109C41.1354 0.565104 46.2461 2.64844 50.543 6.75H61.9688ZM61.1875 31.75V8.3125H54.1562V29.4062C54.2865 30.8385 55.0677 31.6198 56.5 31.75H61.1875ZM33.4531 15.6367L48.0039 27.4531C48.8503 28.1693 49.306 29.0482 49.3711 30.0898C49.5013 31.1315 49.2409 32.1081 48.5898 33.0195L47.6133 34.0938C46.8971 34.9401 46.0508 35.4284 45.0742 35.5586C44.0326 35.6888 43.0885 35.4284 42.2422 34.7773L39.6055 37.9023C38.8242 38.8789 37.8477 39.4323 36.6758 39.5625C35.4388 39.6276 34.3646 39.3021 33.4531 38.5859L32.2812 37.5117C31.1094 38.6836 29.7096 39.3672 28.082 39.5625C27.8216 39.5625 27.5612 39.5625 27.3008 39.5625C25.6732 39.5625 24.2083 39.0417 22.9062 38L14.2148 30.1875H10.2109C9.75521 32.1406 8.51823 33.1823 6.5 33.3125H1.03125C0.575521 33.2474 0.315104 32.987 0.25 32.5312V7.53125C0.315104 7.01042 0.575521 6.75 1.03125 6.75L12.457 6.65234C16.7539 2.61589 21.8971 0.565104 27.8867 0.5C28.2773 0.565104 28.5378 0.825521 28.668 1.28125C28.6029 1.73698 28.3424 1.9974 27.8867 2.0625C22.2227 2.1276 17.3724 4.11328 13.3359 8.01953L13.043 8.21484H10.4062V28.625H14.8008L23.8828 36.8281C25.0547 37.7396 26.3893 38.1302 27.8867 38C29.3841 37.8047 30.6211 37.1211 31.5977 35.9492L32.0859 35.4609L34.4297 37.4141C35.0156 37.8698 35.6992 38.0651 36.4805 38C37.2617 37.8698 37.9128 37.5117 38.4336 36.9258L42.0469 32.5312L43.1211 33.5078C44.293 34.2891 45.3997 34.1589 46.4414 33.1172L47.3203 31.9453C48.1667 30.7734 48.069 29.6992 47.0273 28.7227L32.4766 16.9062C32.0859 16.5156 32.0208 16.125 32.2812 15.7344C32.6719 15.4089 33.0625 15.3763 33.4531 15.6367ZM8.84375 29.4062V8.3125H1.8125V31.75H6.5C7.93229 31.6198 8.71354 30.8385 8.84375 29.4062Z"
        fill="#2D72D2"
      />
    </svg>
  );
}

function IconFork(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      {...props}
    >
      <rect width="68" height="68" fill="white" />
      <path
        d="M15.7505 25.0891C16.2208 28.441 17.986 34.1756 24.497 36.6463C31.1667 39.1821 31.1667 41.1796 31.1667 42.5V42.9618C27.0867 44.1915 24.0833 47.94 24.0833 52.4166C24.0833 57.885 28.5317 62.3333 34 62.3333C39.4683 62.3333 43.9167 57.885 43.9167 52.4166C43.9167 47.94 40.9133 44.1915 36.8333 42.9618V42.5C36.8333 41.1796 36.8333 39.1821 43.503 36.6491C50.014 34.1785 51.7792 28.4438 52.2495 25.092C56.4173 23.9161 59.5 20.1223 59.5 15.5833C59.5 10.115 55.0517 5.66663 49.5833 5.66663C44.115 5.66663 39.6667 10.115 39.6667 15.5833C39.6667 19.9806 42.5623 23.6725 46.5347 24.9701C46.121 27.0526 44.9338 30.0446 41.497 31.3508C38.1197 32.6315 35.6802 34.051 34 35.7028C32.3198 34.051 29.8832 32.6315 26.503 31.3508C23.0662 30.0446 21.8762 27.0526 21.4653 24.9701C25.4377 23.6725 28.3333 19.9806 28.3333 15.5833C28.3333 10.115 23.885 5.66663 18.4167 5.66663C12.9483 5.66663 8.5 10.115 8.5 15.5833C8.5 20.1223 11.5827 23.9161 15.7505 25.0891ZM49.5833 11.3333C51.9265 11.3333 53.8333 13.2401 53.8333 15.5833C53.8333 17.9265 51.9265 19.8333 49.5833 19.8333C47.2402 19.8333 45.3333 17.9265 45.3333 15.5833C45.3333 13.2401 47.2402 11.3333 49.5833 11.3333ZM38.25 52.4166C38.25 54.7598 36.3432 56.6666 34 56.6666C31.6568 56.6666 29.75 54.7598 29.75 52.4166C29.75 50.0735 31.6568 48.1666 34 48.1666C36.3432 48.1666 38.25 50.0735 38.25 52.4166ZM18.4167 11.3333C20.7598 11.3333 22.6667 13.2401 22.6667 15.5833C22.6667 17.9265 20.7598 19.8333 18.4167 19.8333C16.0735 19.8333 14.1667 17.9265 14.1667 15.5833C14.1667 13.2401 16.0735 11.3333 18.4167 11.3333Z"
        fill="#A8B3C2"
      />
    </svg>
  );
}

const teams = [
  {
    name: "Collin",
    role: "CEO",
    photo: CollinPhoto,
  },
  {
    name: "Benjamin",
    role: "CHIEF OF STAFF",
    photo: BenjaminPhoto,
  },
  {
    name: "Gabriel",
    role: "FOUNDING TEAM",
    photo: GabrielPhoto,
  },
  {
    name: "Trevor",
    role: "FOUNDING TEAM",
    photo: TrevorPhoto,
  },
  {
    name: "Nkechi",
    role: "ANGEL INVESTOR",
    photo: NkechiPhoto,
  },
  {
    name: "Mathew",
    role: "ATTORNEY",
    photo: MathewPhoto,
  },
  {
    name: "Corey",
    role: "TITLE",
    photo: CoreyPhoto,
  },
  {
    name: "Angus",
    role: "TITLE",
    photo: AngusPhoto,
  },
];

function LineForkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1279"
      height="2"
      viewBox="0 0 1279 2"
      fill="none"
    >
      <path
        d="M1279 1L-63 1"
        stroke="url(#paint0_linear_215_888)"
        strokeDasharray="4 4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_215_888"
          x1="519.831"
          y1="-0.185551"
          x2="520.406"
          y2="-21.6985"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4C90F0" />
          <stop offset="1" stopColor="#4C90F0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <LayoutPage>
        <main className="w-full font-blender text-[#1B283B] mt-20">
          {/*  */}
          <div className="w-full max-w-4xl px-4 flex gap-4 mx-auto flex-col items-center justify-center">
            <span className="uppercase text-base font-berkeley text-[#2D72D2]">
              OUR MISSION
            </span>
            <h1 className="text-5xl text-center font-bold ">
              Empowering engineering teams
              <br />
              worldwide with a cutting-edge collaboration
              <br />
              platform—unleashing speed, power,
              <br />
              and unrivaled usability.
            </h1>
          </div>
          {/*  */}
          <div className="grid grid-cols-3 w-full mt-28 gap-9 max-w-7xl px-4 mx-auto">
            {[
              {
                title: "why we're here",
                icon: <IconPlace />,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi lectus, lacinia non leo a, eleifend varius lorem. Curabitur ante turpis, efficitur eget neque blandit, fringilla finibus est.",
              },
              {
                title: "why we're here",
                icon: <IconUsers />,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi lectus, lacinia non leo a, eleifend varius lorem. Curabitur ante turpis, efficitur eget neque blandit, fringilla finibus est.",
              },
              {
                title: "why we're here",
                icon: <IconShakeHand />,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi lectus, lacinia non leo a, eleifend varius lorem. Curabitur ante turpis, efficitur eget neque blandit, fringilla finibus est.",
              },
            ].map((content, i) => (
              <div className="w-full flex flex-col gap-6" key={i}>
                {content.icon}
                <h3 className="text-2xl font-bold">{content.title}</h3>
                <p className="text-[#3B3F44] text-xl">{content.description}</p>
              </div>
            ))}
          </div>

          {/*  */}
          <div className="w-full flex flex-col justify-center items-center mt-28 max-w-3xl mx-auto text-center gap-5">
            <h2 className="font-bold text-4xl">
              Backed by some of the world&apos;s best.
            </h2>
            <p className="text-[#3B3F44] text-xl">
              Rollup is backed by world class investors with a track record of
              investing in successful, category-defining companies. We&apos;re
              thrilled to have their support.
            </p>
            <div className="flex gap-9 mt-16 relative">
              <div className="absolute -right-12 -z-0 mt-9">
                <LineForkIcon />
              </div>
              <div className="flex gap-9 z-10">
                {Array(10)
                  .fill(null)
                  .map((e, i) => (
                    <IconFork key={i} />
                  ))}
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className="w-full pt-28 pb-20 relative before:left-0 before:top-0 before:bg-no-repeat before:bg-contain before:w-[364px] before:h-[364px] before:absolute before:bg-[url(/img/about-team-decoration.png)] after:right-0 after:bottom-0 after:bg-no-repeat after:bg-contain after:w-[364px] after:h-[364px] after:absolute after:bg-[url(/img/about-team-decoration.png)]"
            style={{
              background:
                "linear-gradient(360deg, rgba(207, 228, 255, 0.27) 0%, rgba(228, 240, 255, 0.00) 100%)",
            }}
          >
            <div className="max-w-7xl px-4 mx-auto w-full flex flex-col gap-16">
              <h2 className="text-4xl font-bold  text-center">Meet our team</h2>
              <div className="grid grid-cols-4 gap-8 gap-y-24 mb-12">
                {teams.map((team) => (
                  <div key={team.name} className="relative w-full ">
                    <div className="border border-[#1B283B]">
                      <Image
                        src={team.photo}
                        className="object-cover w-full"
                        alt={team.name}
                      />
                    </div>
                    <div className="absolute text-[#404854] -bottom-8 inset-x-0 mx-auto w-56 h-16 px-4 flex items-center justify-center flex-col text-center z-10 bg-white border border-[#1B283B]">
                      <h3 className="font-bold text-xl ">{team.name}.</h3>
                      <span className="font-berkeley text-xs ">
                        {team.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="#"
                className={`self-center font-berkeley px-6 dark:bg-white bg-[#EDEFF2] py-3 border text-[#1B283B] border-[#1B283B] rounded-sm hover:shadow-none transition-shadow flex items-center justify-between shadow-[6px_6px_0_0_#404854]`}
              >
                Become a part of the team
              </Link>
            </div>
          </div>
        </main>
      </LayoutPage>
    </>
  );
}
