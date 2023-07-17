import LayoutPage from "@/components/LayoutPage";
import { getJobPostingInfo } from "@/lib/ashby";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Page({
  job,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <LayoutPage>
        <main className="w-full font-blender text-[#1B283B] mt-3 mb-20 ">
          {/*  */}
          <div className="max-w-7xl px-4 mx-auto">
            <Link
              href="/jobs"
              className="font-berkeley text-base text-[#2D72D2] flex gap-8 items-center"
            >
              <span>&lt;</span>
              <span>Back to Career</span>
            </Link>
          </div>
          {/*  */}
          <div className="max-w-7xl px-4 mx-auto mt-20">
            <h1 className="text-5xl font-bold">{job.title}</h1>
            <div className="w-full flex mt-10">
              <div className="w-4/12  border-[#4C90F0] border-dashed border-r-2">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-berkeley text-xs">Location</p>
                    <p className="text-xl">
                      {job.address.postalAddress.addressLocality},{" "}
                      {job.address.postalAddress.addressCountry}
                    </p>
                  </div>
                  <div>
                    <p className="font-berkeley text-xs">Type</p>
                    <p className="text-xl">{job.employmentType}</p>
                  </div>
                  <div>
                    <p className="font-berkeley text-xs">Department</p>
                    <p className="text-xl">{job.departmentName}</p>
                  </div>
                  <Link
                    href="#"
                    className="py-2 mt-6 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex justify-between items-center w-max gap-10 text-base bg-[#EDEFF2] hover:shadow-none transition-shadow shadow-[3px_3px_0_0_#3B3F44]"
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="w-8/12 pl-8 flex flex-col gap-8">
                <div
                  className="jobinfo-content"
                  dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
                />
                <Link
                  href="#"
                  className="py-2 mt-6 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex justify-between items-center w-max gap-10 text-base bg-[#EDEFF2] hover:shadow-none transition-shadow shadow-[3px_3px_0_0_#3B3F44]"
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </main>
      </LayoutPage>
    </>
  );
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ id: string }>
) => {
  // console.log(ctx);
  const jobId = ctx.params!.id;
  const job = await getJobPostingInfo(jobId);

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job: job,
    },
  };
};
