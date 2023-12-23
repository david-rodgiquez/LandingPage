import NewLayout from "@/components/NewLayout";
import IconChevronRight from "@/components/icons/IconChevronRight";
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
      <NewLayout>
        <main className="w-full font-blender dark:text-white mt-20 md:mt-32 mb-20 ">
          {/*  */}
          <div className="max-w-7xl mx-auto px-4">
            <Link
              href="/jobs"
              className="text-xl hover:text-[#2D72D2] font-medium flex gap-4 items-center w-max"
            >
              <IconChevronRight className="rotate-180 h-4 w-4" />
              <span>Back to Careers</span>
            </Link>
          </div>
          {/*  */}
          <div className="max-w-7xl mx-auto mt-10 px-4">
            <h1 className="text-5xl font-bold">{job.title}</h1>
            <div className="w-full flex mt-10 flex-col gap-12 md:gap-0 md:flex-row">
              <div className="w-full md:w-4/12 font-medium border-[#4C90F0] md:border-dashed md:border-r-2">
                <div className="flex flex-col gap-6">
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
                    href={job.externalLink + "/application"}
                    className="bg-[#2D72D2] rounded-sm hover:bg-[#215DB0] transition-colors text-white w-full text-center md:w-max px-6 py-2 text-xl"
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-8/12 md:pl-8 flex flex-col gap-8">
                <div
                  className="jobinfo-content"
                  dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
                />
                <Link
                  target="_blank"
                  href={job.externalLink + "/application"}
                  className="bg-[#2D72D2] rounded-sm hover:bg-[#215DB0] transition-colors text-white w-full text-center md:w-max px-6 py-2 text-xl"
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </main>
      </NewLayout>
    </>
  );
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ id: string }>
) => {
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
