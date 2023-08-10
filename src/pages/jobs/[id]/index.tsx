import LayoutPage from "@/components/LayoutPage";
import { getJobPostingInfo } from "@/lib/ashby";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Page({
  job,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const title = `${job.title} Job | Rollup`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LayoutPage>
        <main className="w-full font-blender text-[#1B283B] dark:text-white mt-3 mb-20 ">
          {/*  */}
          <div className="max-w-7xl px-4 mx-auto">
            <Link
              href="/jobs"
              className="font-berkeley text-base text-[#2D72D2] dark:text-[#4C90F0] flex gap-8 items-center"
            >
              <span>&lt;</span>
              <span>Back to Careers</span>
            </Link>
          </div>
          {/*  */}
          <div className="max-w-7xl px-4 mx-auto mt-20">
            <h1 className="text-5xl font-bold">{job.title}</h1>
            <div className="w-full flex mt-10">
              <div className="w-4/12  border-[#4C90F0] border-dashed border-r-2">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-berkeley text-sm">Location</p>
                    <p className="text-xl dark:text-[#ABB3BF]">
                      {job.address.postalAddress.addressLocality},{" "}
                      {job.address.postalAddress.addressCountry}
                    </p>
                  </div>
                  <div>
                    <p className="font-berkeley text-sm">Type</p>
                    <p className="text-xl dark:text-[#ABB3BF]">
                      {job.employmentType}
                    </p>
                  </div>
                  <div>
                    <p className="font-berkeley text-sm">Department</p>
                    <p className="text-xl dark:text-[#ABB3BF]">
                      {job.departmentName}
                    </p>
                  </div>
                  <div>
                    <p className="font-berkeley text-sm">Compensation</p>
                    <p className="text-xl dark:text-[#ABB3BF]">
                      {job.compensation.compensationTiers[0]?.title}
                    </p>
                    <p className="text-xl dark:text-[#ABB3BF]">                      
                      {job.compensation.compensationTierSummary}
                    </p>
                  </div>
                  <Link
                    target="_blank"
                    href={job.externalLink+"/application"}
                    className="dark:bg-[#252A31] dark:border-[#ABB3BF] dark:shadow-[3px_3px_0_0_#ffffff] py-3 mt-6 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex justify-between items-center w-max gap-10 text-base bg-[#EDEFF2] hover:shadow-none dark:hover:shadow-none transition-shadow shadow-[3px_3px_0_0_#3B3F44]"
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
                  target="_blank"
                  href={job.externalLink+"/application"}
                  className="dark:bg-[#252A31] dark:border-[#ABB3BF] dark:shadow-[3px_3px_0_0_#ffffff] py-3 mt-6 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex justify-between items-center w-max gap-10 text-base bg-[#EDEFF2] hover:shadow-none dark:hover:shadow-none transition-shadow shadow-[3px_3px_0_0_#3B3F44]"
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
