import Head from "next/head";
import LayoutPage from "@/components/LayoutPage";

const countries = {
  global: {
    name: "Global",
    background: "rgba(227, 226, 224, 0.5)",
    color: "rgb(50, 48, 44)",
  },
  us: {
    name: "United States",
    background: "rgba(227, 226, 224, 0.5)",
    color: "rgb(50, 48, 44)",
  },
  eu: {
    name: "European Union",
    background: "rgb(245, 224, 233)",
    color: "rgb(76, 35, 55)",
  },
  uk: {
    name: "United Kingdom",
    background: "rgb(255, 226, 221)",
    color: "rgb(93, 23, 21)",
  },
  germany: {
    name: "Germany",
    background: "rgb(211, 229, 239)",
    color: "rgb(24, 51, 71)",
  },
  ireland: {
    name: "Ireland",
    background: "rgb(232, 222, 238)",
    color: "rgb(65, 36, 84)",
  },
  australia: {
    name: "Australia",
    background: "rgb(219, 237, 219)",
    color: "rgb(28, 56, 41)",
  },
  ukraine: {
    name: "Ukraine",
    background: "rgb(238, 224, 218)",
    color: "rgb(68, 42, 30)",
  },
  canada: {
    name: "Canada",
    background: "rgb(227, 226, 224)",
    color: "rgb(50, 48, 44)",
  },
} as const;

const subjects = {
  authorizedUserIdentifiers: {
    name: "Authorized User Identifiers",
    background: "rgb(245, 224, 233)",
    color: "rgb(76, 35, 55)",
  },
  internetAndNetworkActivityData: {
    name: "Internet And Network Activity Data",
    background: "rgb(253, 236, 200)",
    color: "rgb(64, 44, 27)",
  },
  employmentData: {
    name: "Employment Data",
    background: "rgb(211, 229, 239)",
    color: "rgb(24, 51, 71)",
  },
  otherPersonalData: {
    name: "Other Personal Data that Customer or its Authorized Users elect to submit to the Services",
    background: "rgb(255, 226, 221)",
    color: "rgb(93, 23, 21)",
  },
} as const;

const rows = [
  {
    appName: "Amazon Web Services",
    description: "Hosting and storage systems provider.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.internetAndNetworkActivityData,
    ],
    countries: [countries.us],
  },
  {
    appName: "Archbee",
    description:
      "Product documentation platform that provides a docs tool for software teams and products.",
    subjects: [subjects.authorizedUserIdentifiers],
    countries: [countries.us],
  },
  {
    appName: "Birdeastsbug",
    description:
      "Technical screen recording tool that helps development teams to catch, report and fix bugs faster.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.internetAndNetworkActivityData,
    ],
    countries: [countries.eu],
  },
  {
    appName: "Datadog",
    description: "Monitoring and analytics for cloud-based workflows.",
    subjects: [subjects.authorizedUserIdentifiers],
    countries: [countries.us],
  },
  {
    appName: "Dialpad",
    description:
      "AI-powered cloud communications platform that turns conversations into opportunities and helps teams make smart calls.",
    subjects: [subjects.authorizedUserIdentifiers],
    countries: [countries.us],
  },
  {
    appName: "Google, Inc.",
    description: "Internet-related services and products.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.employmentData,
      subjects.internetAndNetworkActivityData,
      subjects.otherPersonalData,
    ],
    countries: [countries.global],
  },
  {
    appName: "Intercom",
    description:
      "Modern customer service software that redefines how businesses support their customers.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.internetAndNetworkActivityData,
    ],
    countries: [countries.us, countries.ireland, countries.australia],
  },
  {
    appName: "Microsoft Azure",
    description:
      "Tools and services that helps in reaching and scaling to a global audience with cloud gaming services.",
    subjects: [subjects.authorizedUserIdentifiers, subjects.otherPersonalData],
    countries: [countries.us],
  },
  {
    appName: "New Relic",
    description:
      "Digital intelligence company that delivers full-stack visibility and analytics to enterprises.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.employmentData,
      subjects.internetAndNetworkActivityData,
      subjects.otherPersonalData,
    ],
    countries: [countries.us],
  },
  {
    appName: "Notion",
    description:
      "All-in-one workspace for your notes, tasks, wikis, and databases.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.employmentData,
      subjects.internetAndNetworkActivityData,
      subjects.otherPersonalData,
    ],
    countries: [countries.global],
  },
  {
    appName: "PagerDuty",
    description:
      "Operations performance platform delivering visibility and actionable intelligence across the entire incident lifecycle.",
    subjects: [subjects.authorizedUserIdentifiers],
    countries: [countries.global, countries.eu],
  },
  {
    appName: "Railway",
    description:
      "Builds and develops software deployment platforms tailored for engineers.",
    subjects: [subjects.authorizedUserIdentifiers],
    countries: [countries.us],
  },
  {
    appName: "Retool",
    description: "Tool to build internal software fast.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.internetAndNetworkActivityData,
    ],
    countries: [countries.global],
  },
  {
    appName: "SendGrid",
    description:
      "Cloud-based customer communication platform that drives engagement and business growth.",
    subjects: [subjects.authorizedUserIdentifiers],
    countries: [countries.us],
  },
  {
    appName: "Sentry",
    description:
      "A developer of an application monitoring platform that helps developers optimize the performance of their code.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.internetAndNetworkActivityData,
    ],
    countries: [countries.us],
  },
  {
    appName: "Stytch",
    description:
      "Improves security and user experience with passwordless authentication.",
    subjects: [
      subjects.internetAndNetworkActivityData,
      subjects.employmentData,
      subjects.authorizedUserIdentifiers,
      subjects.otherPersonalData,
    ],
    countries: [countries.us],
  },
  {
    appName: "Techsoft",
    description:
      "Provides cybersecurity, process engineering, engineering support, training, multimedia and managed IT services.",
    subjects: [
      subjects.internetAndNetworkActivityData,
      subjects.authorizedUserIdentifiers,
    ],
    countries: [countries.us],
  },
  {
    appName: "Typeform",
    description:
      "A no-code SaaS platform offering tools that assist companies to engage with their audience and grow business.",
    subjects: [
      subjects.authorizedUserIdentifiers,
      subjects.employmentData,
      subjects.otherPersonalData,
    ],
    countries: [countries.us],
  },
  {
    appName: "Vercel",
    description:
      "Frontend cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web.",
    subjects: [subjects.authorizedUserIdentifiers],
    countries: [countries.us],
  },
  {
    appName: "Vitally",
    description:
      "Customer success platform (CSP) designed for maximizing productivity, visibility and collaboration, plus eliminate churn.",
    subjects: [subjects.authorizedUserIdentifiers, subjects.otherPersonalData],
    countries: [countries.global],
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>Subprocessors</title>
      </Head>
      <LayoutPage>
        <main className="w-full mx-auto max-w-6xl mt-12 font-blender mb-28">
          <div className="flex justify-center items-center flex-col gap-4 mb-14">
            <h1 className="font-bold text-4xl text-[#1B283B] dark:text-white">
              Subprocessors
            </h1>
          </div>
          <div className="w-full overflow-x-auto shadow-lg rounded-xl overflow-hidden">
            <table className="w-full text-left min-w-[1000px] table-fixed bg-white">
              <thead>
                <tr className="text-base bg-gray-100 align-text-top">
                  <th className="border px-3 py-3">Application Name</th>
                  <th className="border px-3 py-3">
                    Nature/Description of Processing
                  </th>
                  <th className="border px-3 py-3">
                    Subject of Processing/Personal Data
                  </th>
                  <th className="border px-3 py-3">
                    Country of Storage/Processing
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="text-lg align-text-top">
                    <td className="border px-3 py-2 font-medium">
                      {row.appName}
                    </td>
                    <td className="border px-3 py-2">{row.description}</td>
                    <td className="border px-3 py-2">
                      <div className="flex gap-2 flex-wrap text-base font-medium">
                        {row.subjects.map((subject) => (
                          <span
                            title={subject.name}
                            className="px-2 rounded-sm whitespace-nowrap text-ellipsis overflow-hidden"
                            style={{
                              color: subject.color,
                              background: subject.background,
                            }}
                            key={subject.name}
                          >
                            {subject.name}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="border px-3 py-2">
                      <div className="flex gap-x-2 flex-wrap text-base font-medium">
                        {row.countries.map((country) => (
                          <span
                            title={country.name}
                            className="px-2 rounded-sm whitespace-nowrap text-ellipsis overflow-hidden"
                            style={{
                              color: country.color,
                              background: country.background,
                            }}
                            key={country.name}
                          >
                            {country.name}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </LayoutPage>
    </>
  );
}
