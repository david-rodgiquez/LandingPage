import NewLayout from "@/components/NewLayout";
import IconChevronRight from "@/components/icons/IconChevronRight";
import Head from "next/head";
import Link from "next/link";
import { ComponentProps, useState } from "react";

const plans = [
  {
    title: "Standard",
    price: {
      monthly: "$15",
      yearly: "$10",
    },
    shouldHighlight: false,
    features: {
      usage: ["Unlimited", "1 GB", "150 MB per month"],
      features: [true, true, true, true],
      security: [true, false, false, false, false],
    },
  },
  {
    title: "Plus",
    price: {
      monthly: "$30",
      yearly: "$20",
    },
    shouldHighlight: true,
    features: {
      usage: ["Unlimited", "10 GB", "250 MB per month"],
      features: [true, true, true, true],
      security: [true, true, true, false, false],
    },
  },
  {
    title: "Enterprise",
    shouldHighlight: false,
    features: {
      usage: ["Unlimited", "Unlimited", "Unlimited"],
      features: [true, true, true, true],
      security: [true, true, true, true, true],
    },
  },
] as const;

function IconCheck(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <circle cx="14" cy="14" r="11" fill="#CEF9D5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1429 10C18.9029 10 18.6886 10.088 18.5343 10.232L12.4566 15.9123C12.3604 16.0022 12.2111 16.0021 12.115 15.9122L9.46571 13.432C9.31143 13.288 9.09714 13.2 8.85714 13.2C8.38571 13.2 8 13.56 8 14C8 14.224 8.09429 14.424 8.24857 14.568L11.6771 17.768C11.8314 17.912 12.0457 18 12.2857 18C12.5257 18 12.74 17.912 12.8943 17.768L19.7514 11.368C19.9057 11.224 20 11.024 20 10.8C20 10.36 19.6143 10 19.1429 10Z"
        fill="#32A467"
      />
    </svg>
  );
}

function IconXMark(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <path
        d="M19.3033 19.3028L8.6968 8.69629"
        stroke="#C5CBD3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3033 8.69629L8.6968 19.3028"
        stroke="#C5CBD3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const planItems = [
  {
    title: "Usage",
    items: ["Members", "File upload", "File upload volumne"],
  },
  {
    title: "Features",
    items: ["Workspaces", "Integrations", "API and Webhook access", "HOOPS"],
  },
  {
    title: "Security",
    items: [
      "Admin roles",
      "Advanced authentication controls",
      "Audit log",
      "Third-party app management",
      "Domain claiming",
    ],
  },
] as const;

function getPlanItemByTitle(
  title: Lowercase<(typeof planItems)[number]["title"]>
) {
  return planItems.find((plan) => plan.title.toLocaleLowerCase() === title)!
    .items;
}

export default function Page() {
  const [periode, setPeriode] = useState<"monthly" | "yearly">("monthly");
  const [collapsedPlan, setCollapsedPlan] = useState<
    Array<(typeof plans)[number]["title"]>
  >([]);

  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <NewLayout>
        <section
          className="relative flex items-center justify-center min-h-[384px] mb-20 lg:mb-32
           before:hidden lg:before:block  before:bg-[url('/img/home-bg-line.svg')] before:w-[520px] before:h-[460px] before:absolute before:bg-no-repeat before:left-0 before:bg-right
           after:hidden lg:after:block  after:bg-[url('/img/home-bg-line.svg')] after:w-[520px] after:h-[460px] after:absolute after:bg-no-repeat after:right-0 after:bg-left
            "
        >
          <div className="flex flex-col items-center justify-center text-center gap-6 my-20 z-10 bg-white">
            <span className="uppercase font-medium text-[#4C90F0] text-xl">
              Pricing
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold ">
              Headline here
            </h1>
            <p className="font-semibold text-xl max-w-xs md:max-w-md mx-auto">
              Some details here Some details here Some details here Some details
              here Some details here
            </p>
            <div className="border border-[#D4E2F7] rounded-full">
              {(
                [
                  { title: "Monthly", value: "monthly", discount: undefined },
                  { title: "Yearly", value: "yearly", discount: "25% off" },
                ] as const
              ).map((p) => (
                <button
                  onClick={() => setPeriode(p.value)}
                  key={p.value}
                  className={`px-6 py-1.5 font-bold text-lg rounded-full border border-white min-w-[100px] lg:min-w-[160px] ${
                    periode === p.value ? "text-[#2D72D2] bg-[#E4F0FF]" : ""
                  }`}
                >
                  {p.title}{" "}
                  {p.discount && (
                    <span className="bg-[#32A467] text-white px-2 py-1 rounded-full text-sm font-medium">
                      {p.discount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
        <div className="max-w-7xl px-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 -mt-20 gap-8">
          <div className="lg:col-span-3 gap-8 flex-col hidden lg:flex">
            <div className="h-[120px]"></div>
            {planItems.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <h4 className="text-2xl font-semibold">{feature.title}</h4>
                <ul className="flex flex-col font-medium text-lg">
                  {feature.items.map((item) => (
                    <li
                      key={item}
                      className="py-2 border-b-[1px] border-dashed border-b-[#C5CBD3]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {plans.map((plan) => {
            const isCollapsed = collapsedPlan.includes(plan.title);

            return (
              <div
                key={plan.title}
                className={`lg:col-span-3 gap-6 lg:gap-8 flex flex-col lg:-m-4 p-6 rounded-lg ${
                  plan.shouldHighlight
                    ? "border border-[#4C90F0] bg-[rgba(245,248,252,0.50)] shadow-[0px_0px_0px_2px_rgba(138,187,255,0.20)]"
                    : "border lg:border-none"
                }`}
              >
                <div className="flex flex-col gap-3 relative">
                  {plan.shouldHighlight && (
                    <span className="absolute right-0 border border-[#4C90F0] rounded-full bg-[#2D72D2] text-white leading-none px-2 py-1 text-sm font-medium shadow-[0px_0px_0px_2px_#B0D3FF]">
                      Best value
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  {plan.title !== "Enterprise" ? (
                    <span className="text-4xl font-bold">
                      {plan.price[periode]}{" "}
                      <span className="font-medium text-xl text-[#5F6B7C]">
                        per user /month
                      </span>
                    </span>
                  ) : (
                    <span className="text-4xl font-bold">Let&apos;s talk!</span>
                  )}
                  <Link
                    href="#"
                    className={`text-lg font-bold text-center py-1 transition-colors rounded ${
                      !plan.shouldHighlight
                        ? "border border-[#2D72D2] hover:bg-blue-50 text-[#2D72D2]"
                        : "bg-[#2D72D2] border border-[#2D72D2] hover:border-[#215db0] text-white hover:bg-[#215db0]"
                    } `}
                  >
                    {plan.title !== "Enterprise"
                      ? "Get Started"
                      : "Contact sales"}
                  </Link>
                </div>

                <div
                  className={`w-full mt-3 flex flex-col gap-8 lg:gap-[4.275rem] ${
                    !isCollapsed ? "hidden lg:flex" : ""
                  }`}
                >
                  {(
                    Object.keys(plan.features) as Array<
                      keyof (typeof plan)["features"]
                    >
                  ).map((featureName) => {
                    const items =
                      plan.features[
                        featureName as keyof (typeof plan)["features"]
                      ];

                    const itemTitles = getPlanItemByTitle(featureName);

                    return (
                      <div key={featureName}>
                        {items.map((feature, i) => (
                          <div
                            className="h-11 flex font-medium text-base lg:text-lg items-center border-b-[1px] border-dashed border-b-[#C5CBD3]"
                            key={`${featureName}-${i}`}
                          >
                            <span className="lg:hidden leading-none">
                              {featureName === "usage" ? (
                                `${itemTitles[i]} ${feature}`
                              ) : (
                                <div className=" flex gap-2 items-center">
                                  {feature ? <IconCheck /> : <IconXMark />}
                                  <span>{itemTitles[i]}</span>
                                </div>
                              )}
                            </span>
                            <span className="hidden lg:block">
                              {typeof feature === "string" ? (
                                feature
                              ) : typeof feature === "boolean" && feature ? (
                                <IconCheck />
                              ) : (
                                <IconXMark />
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setCollapsedPlan((prev) => {
                      if (!prev.includes(plan.title)) {
                        return prev.concat(plan.title);
                      }
                      return prev.filter((p) => p !== plan.title);
                    })
                  }
                  className={`flex gap-2 justify-center items-center lg:hidden`}
                >
                  <span className="font-medium">
                    {!isCollapsed ? "More details" : "Hide details"}
                  </span>
                  <IconChevronRight
                    className={`h-3 w-3 ${
                      !isCollapsed ? "rotate-90" : "-rotate-90"
                    }`}
                  />
                </button>
                <Link
                  href="#"
                  className={`text-lg font-bold text-center py-1 transition-colors rounded ${
                    !plan.shouldHighlight
                      ? "border border-[#2D72D2] hover:bg-blue-50 text-[#2D72D2]"
                      : "bg-[#2D72D2] border border-[#2D72D2] hover:border-[#215db0] text-white hover:bg-[#215db0]"
                  } ${isCollapsed ? "block" : "hidden lg:block"}`}
                >
                  {plan.title !== "Enterprise"
                    ? "Get Started"
                    : "Contact sales"}
                </Link>
              </div>
            );
          })}
        </div>
      </NewLayout>
    </>
  );
}
