import LayoutPage from "@/components/LayoutPage";
import Head from "next/head";
import Link from "next/link";
import type { SVGProps } from "react";
import AbcImage from "../../../public/img/abc.png";
import TimerImage from "../../../public/img/timer.png";
import JobLine from "../../../public/img/job-line.png";
import Image from "next/image";
import { getJobPostings } from "@/lib/ashby";
import { InferGetServerSidePropsType } from "next";

function IconHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="54"
      height="45"
      viewBox="0 0 54 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M47.1172 3.40234C53.2695 8.67578 53.5625 18.0508 48.0938 23.7148L29.1484 43.2461C28.5625 43.832 27.7812 44.125 26.9023 44.125C26.1211 44.125 25.3398 43.832 24.7539 43.2461L5.80859 23.7148C0.339844 18.0508 0.632812 8.67578 6.78516 3.40234C9.12891 1.35156 12.0586 0.375 14.9883 0.375C18.6016 0.375 22.3125 1.9375 25.0469 4.67188L27 6.72266L28.8555 4.67188C31.5898 1.9375 35.3008 0.375 38.9141 0.375C41.8438 0.375 44.7734 1.35156 47.1172 3.40234ZM46.9219 22.6406C49.2656 20.1992 50.5352 16.8789 50.3398 13.4609C50.2422 9.94531 48.6797 6.82031 46.1406 4.57422C44.1875 2.91406 41.6484 1.9375 38.9141 1.9375C35.5938 1.9375 32.3711 3.40234 30.0273 5.84375L27 8.96875L23.875 5.84375C21.5312 3.40234 18.3086 1.9375 14.9883 1.9375C12.2539 1.9375 9.71484 2.91406 7.66406 4.57422C5.125 6.82031 3.5625 9.94531 3.46484 13.4609C3.26953 16.8789 4.53906 20.1992 6.88281 22.6406L25.7305 42.1719C26.0234 42.4648 26.4141 42.5625 26.9023 42.5625C27.3906 42.5625 27.7812 42.4648 28.0742 42.1719L46.9219 22.6406Z"
        fill="#2D72D2"
      />
    </svg>
  );
}

function IconLaptop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="63"
      height="45"
      viewBox="0 0 63 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.03125 31.625C6.54297 31.625 6.25 31.332 6.25 30.7461V5.0625C6.25 2.42578 8.30078 0.375 10.9375 0.375H51.5625C54.1016 0.375 56.25 2.42578 56.25 5.0625V30.8438C56.25 31.2344 55.8594 31.625 55.4688 31.625C54.9805 31.625 54.6875 31.2344 54.6875 30.8438V5.0625C54.6875 3.30469 53.2227 1.9375 51.5625 1.9375H10.9375C9.17969 1.9375 7.8125 3.30469 7.8125 5.0625V30.8438C7.8125 31.2344 7.42188 31.625 7.03125 31.625ZM60.9375 34.75C61.7188 34.75 62.5 35.5312 62.5 36.3125V37.875C62.5 41.293 59.668 44.125 56.25 44.125H6.25C2.73438 44.125 0 41.293 0 37.875V36.3125C0 35.4336 0.683594 34.75 1.5625 34.75H60.9375ZM60.9375 37.875V36.3125H1.5625V37.875C1.5625 40.4141 3.61328 42.5625 6.25 42.5625H56.25C58.7891 42.5625 60.9375 40.4141 60.9375 37.875Z"
        fill="#2D72D2"
      />
    </svg>
  );
}

function IconRhombus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="52"
      height="51"
      viewBox="0 0 52 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M49.5352 22.0273C51.3906 23.7852 51.3906 26.8125 49.5352 28.5703L29.2227 48.8828C28.3438 49.8594 27.1719 50.25 26 50.25C24.7305 50.25 23.5586 49.8594 22.6797 48.8828L2.36719 28.5703C0.511719 26.8125 0.511719 23.7852 2.36719 22.0273L22.6797 1.71484C23.5586 0.738281 24.7305 0.25 26 0.25C27.1719 0.25 28.3438 0.738281 29.2227 1.61719L49.5352 22.0273ZM48.4609 27.4961C49.7305 26.3242 49.7305 24.2734 48.4609 23.1016L28.1484 2.78906C27.5625 2.20312 26.7812 1.8125 26 1.8125C25.1211 1.8125 24.3398 2.20312 23.7539 2.78906L3.44141 23.1016C2.17188 24.2734 2.17188 26.3242 3.44141 27.4961L23.7539 47.8086C24.3398 48.3945 25.1211 48.6875 26 48.6875C26.7812 48.6875 27.5625 48.3945 28.1484 47.8086L48.4609 27.4961Z"
        fill="#2D72D2"
      />
    </svg>
  );
}

function IconCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 0.25C38.7695 0.25 50 11.4805 50 25.25C50 39.1172 38.7695 50.25 25 50.25C11.1328 50.25 0 39.1172 0 25.25C0 11.4805 11.1328 0.25 25 0.25ZM25 48.6875C37.8906 48.6875 48.4375 38.2383 48.4375 25.25C48.4375 12.3594 37.8906 1.8125 25 1.8125C12.0117 1.8125 1.5625 12.3594 1.5625 25.25C1.5625 38.2383 12.0117 48.6875 25 48.6875Z"
        fill="#2D72D2"
      />
    </svg>
  );
}

const values = [
  {
    Icon: IconHeart,
    title: "Value 1",
    description:
      "We have 9 community resource groups who help to drive awareness, connection and dialogue on issues that matter.",
  },
  {
    Icon: IconLaptop,
    title: "Value 2",
    description:
      "We don't put ourselves in a box when it comes to defining whether we are in-office or fully remote.",
  },
  {
    Icon: IconRhombus,
    title: "Value 3",
    description:
      "We get together once a month in hubs to connect socially. Once a year, we gather for a global company retreat.",
  },
  {
    Icon: IconCircle,
    title: "Value 4",
    description:
      "We believe you can't bring your best to Rollup unless you know that Rollup wants what's best for you.",
  },
];

export default function Page({
  departments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Jobs | Rollup</title>
      </Head>
      <LayoutPage>
        <main className="w-full font-blender text-[#1B283B] dark:text-white my-20 ">
          {/*  */}
          <div className="w-full max-w-4xl px-4 flex gap-4 mx-auto flex-col items-center justify-center">
            <span className="uppercase text-base font-berkeley text-[#2D72D2] dark:text-[#4C90F0]">
              Careers
            </span>
            <h1 className="text-5xl text-center font-bold ">
              We are bringing magical software to the world of hardware
            </h1>
            {/* <Link
              href="#"
              className="py-3 mt-6 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex justify-between items-center w-80 gap-10 text-lg bg-white hover:shadow-none transition-shadow shadow-[6px_6px_0_0_#8ABBFF]"
            >
              <span>See Open Positions</span>
              <span>&gt;</span>
            </Link> */}
          </div>

          {/*  */}
          {/*<div className="max-w-7xl px-4 mx-auto mt-32 font-blender">*/}
          {/*  <div className="w-full flex gap-6">*/}
          {/*    /!*<h2 className="text-4xl font-bold w-1/2">*!/*/}
          {/*    /!*  Rollup is a thriving community*!/*/}
          {/*    /!*  <br />*!/*/}
          {/*    /!*  of people driven by making*!/*/}
          {/*    /!*  <br />*!/*/}
          {/*    /!*  progress possible.*!/*/}
          {/*    /!*</h2>*!/*/}
          {/*    /!*<p className="text-xl w-1/2 text-[#3B3F44] dark:text-[#ABB3BF]">*!/*/}
          {/*    /!*  Our people are our core competitive advantage. While almost*!/*/}
          {/*    /!*  anything in this world can be imitated, the one thing that*!/*/}
          {/*    /!*  can&apos;t be copied is our culture. We treat our people as our*!/*/}
          {/*    /!*  source of differentiation because without the collective*!/*/}
          {/*    /!*  endeavors of Rollupers, we would be a company without a mission,*!/*/}
          {/*    /!*  a product without a purpose, an organization with no soul.*!/*/}
          {/*    /!*</p>*!/*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*  */}
          {/* <div className="max-w-7xl px-4 mx-auto mt-12 font-blender">
            <div className="w-full grid grid-cols-2 gap-10">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="w-full border flex flex-col gap-6 border-[#1B283B] p-10 bg-white shadow-[6px_6px_0_0_#1B283B] hover:bg-[#E4F0FF] transition-colors"
                >
                  <value.Icon />
                  <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-2xl">{value.title}</h3>
                    <p className="text-xl text-[#3B3F44]">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/*  */}
          {/* <div className="max-w-7xl px-4 mx-auto mt-12 font-blender">
            <div className="w-full flex gap-10">
              <div className="w-1/2">
                <div className="flex justify-center">
                  <div className="w-[515px] h-[342px] flex items-center justify-center bg-[linear-gradient(180deg,#E5E8EB_0%,rgba(229,232,235,0.00)_100%)]">
                    <Image
                      src={AbcImage}
                      alt="Abc"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex justify-end ml-5 w-full">
                  <div className="flex items-center justify-center h-[171px] w-[290px] mix-blend-multiply  bg-[linear-gradient(180deg,#F6F7F9_0%,rgba(246,247,249,0.00)_100%)]">
                    <Image
                      src={TimerImage}
                      alt="Abc"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-4 mt-20">
                <h2 className="font-bold text-4xl ">Perks & Benefits</h2>
                <p className="text-xl leading-tight">
                  We offer a comprehensive approach to benefit solutions for our
                  employees. We believe every solution should begin with access
                  to healthcare, a competitive salary, and good work-life
                  balance.
                </p>
                <div className="w-full flex gap-4">
                  <div className="w-1/2 flex gap-4">
                    <Image src={JobLine} alt="job" className="h-max" />
                    <div className="flex-col gap-6 flex text-xl ">
                      <span>
                        Health, dental
                        <br />
                        and vision insurance
                      </span>
                      <span>
                        Competitive salary
                        <br />
                        and equity
                      </span>
                      <span>
                        Better work life
                        <br />
                        balance
                      </span>
                      <span>
                        5 weeks paid vacation
                        <br />
                        and summer days
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex gap-4">
                    <Image src={JobLine} alt="job" className="h-max" />
                    <div className="flex-col gap-6 flex text-xl ">
                      <span>
                        Maternity, Parental
                        <br />
                        and Family leave
                      </span>
                      <span>
                        Latest productivity
                        <br />
                        software
                      </span>
                      <span>
                        Regular team events
                        <br />
                        and offsites
                      </span>
                      <span>
                        Paid co-working space
                        <br />
                        at an office
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/*  */}
          <div className="max-w-7xl px-4 mx-auto mt-36 font-blender flex flex-col gap-8">
            <h2 className="font-bold text-4xl">Join us</h2>
            <div className="w-full flex flex-col gap-5">
              {departments.map((department) => (
                <div key={department.departmentName}>
                  <h3 className="text-2xl font-bold">
                    {department.departmentName}
                  </h3>
                  <div className="flex flex-col ">
                    {department.jobs.map((job) => (
                      <div
                        key={job.id}
                        className="border-dashed py-4 border-b-2 border-[#7c9bc5] dark:border-[#4C90F0]"
                      >
                        <Link
                          href={`/jobs/${job.id}`}
                          className="flex items-center justify-between hover:text-[#2D72D2] dark:text-[#ABB3BF] dark:hover:text-[#4C90F0] transition-colors"
                        >
                          <h4 className="text-2xl ">{job.title}</h4>
                          <div className="text-base font-berkeley flex items-center gap-6 text-[#2D72D2] dark:text-[#4C90F0]">
                            <span>Apply</span> <span>&gt;</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </LayoutPage>
    </>
  );
}

export const getServerSideProps = async () => {
  const departments = await getJobPostings();
  return {
    props: {
      departments,
    },
  };
};
