import Link from "next/link";
import IconXMark from "./icons/IconXMark";
import useToggle from "@/hooks/useToggle";
import { createPortal } from "react-dom";
import React, { ChangeEvent, useEffect, useState } from "react";
import IconChevronRight from "./icons/IconChevronRight";

const tabDetails = [
  {
    title: "Essential cookies",
    allowed: true,
    description:
      "These cookies are strictly necessary to provide you with the services and features available through our site. Because these cookies are strictly necessary to deliver the site, you cannot refuse them without impacting how the site functions.",
  },
  {
    title: "Performance cookies",
    allowed: true,
    description:
      "These cookies are strictly necessary to provide you with the services and features available through our site. Because these cookies are strictly necessary to deliver the site, you cannot refuse them without impacting how the site functions.",
  },
  {
    title: "Advertising cookies",
    allowed: true,
    description:
      "These cookies are strictly necessary to provide you with the services and features available through our site. Because these cookies are strictly necessary to deliver the site, you cannot refuse them without impacting how the site functions.",
  },
  {
    title: "Support cookies",
    allowed: true,
    description:
      "These cookies are strictly necessary to provide you with the services and features available through our site. Because these cookies are strictly necessary to deliver the site, you cannot refuse them without impacting how the site functions.",
  },
];

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-9 h-5 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#2D72D2]" />
    </label>
  );
}

function TabItem({
  detail,
  setCookie,
}: {
  detail: (typeof tabDetails)[number];
  setCookie: React.Dispatch<
    React.SetStateAction<{
      details: (typeof tabDetails)[number][];
      isAllowed: boolean;
    }>
  >;
}) {
  const [isOpened, toggleOpened] = useToggle();

  return (
    <div key={detail.title} className="w-full p-2 bg-[#E5E8EB]">
      <div className="w-full flex justify-between items-center mb-1">
        <div
          onClick={toggleOpened}
          className="flex items-center gap-1 cursor-pointer"
        >
          <IconChevronRight
            className={`h-3 w-3 text-[#404854] transition-transform ${
              isOpened ? "rotate-90" : ""
            }`}
          />
          <h4 className="font-bold text-[#111418]">{detail.title}</h4>
        </div>
        <Toggle
          checked={detail.allowed}
          onChange={(e) => {
            setCookie((prev) => {
              const copyPrev = [...prev.details];
              const indexTarget = copyPrev.findIndex(
                (cp) => cp.title === detail.title
              );
              copyPrev[indexTarget].allowed = e.target.checked;
              return { ...prev, details: copyPrev };
            });
          }}
        />
      </div>
      {isOpened && (
        <p className="text-[#383E47] text-sm leading-tight font-medium">
          {detail.description}
        </p>
      )}
    </div>
  );
}

function ModalManageCookie({
  close,
  cookie,
  setCookie,
}: {
  cookie: CookieSettings;
  setCookie: React.Dispatch<React.SetStateAction<CookieSettings>>;
  close: () => void;
}) {
  return createPortal(
    <div className="fixed z-30 backdrop-blur-sm inset-0 flex justify-center items-center font-blender">
      <div className="max-w-md w-full text-[#111418] bg-white rounded-sm border border-[#D3D8DE] overflow-hidden">
        <div className="bg-[#EDEFF2] flex justify-between items-center px-6 py-3 border-b border-[#D3D8DE]">
          <h4 className="text-lg font-bold">Manage your cookies</h4>
          <button
            onClick={close}
            type="button"
            className="h-7 w-7 hover:bg-gray-200 transition-colors flex items-center justify-center rounded"
          >
            <IconXMark className="h-5 w-5" />
          </button>
        </div>
        <div className="w-full px-6 py-3 font-medium mb-3">
          <p className="leading-snug mb-1">
            Rollup may request cookies to be set on your device. We use cookies
            to let us know when you visit our Rollup system, to understand how
            you interact with us, to enrich and personalize your user
            experience, to enable social media functionality and to customize
            your relationship with Rollup, including providing you with more
            relevant advertising.
          </p>
          <Link href="#" className="text-[#404854] underline mb-3 inline-block">
            More information
          </Link>
          <div className="w-full flex flex-col gap-2">
            {cookie.details.map((cookieDetail) => (
              <TabItem
                key={cookieDetail.title}
                detail={cookieDetail}
                setCookie={setCookie}
              />
            ))}
          </div>
        </div>
        <div className="mt-3 mb-6 px-6 flex justify-between font-medium">
          <button
            type="button"
            onClick={close}
            className="border border-[#C5CBD3] rounded-sm px-4 py-2 text-[#404854]"
          >
            Close window
          </button>
          <button
            type="button"
            onClick={close}
            className="border rounded-sm px-4 py-2 bg-[#2D72D2] text-white"
          >
            Confirm my cookies
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

type CookieSettings = {
  details: typeof tabDetails;
  isAllowed: boolean;
};

export default function ModalCookie() {
  const [cookie, setCookie] = useState(
    !localStorage.getItem("cookie")
      ? ({
          details: tabDetails,
          isAllowed: false,
        } satisfies CookieSettings)
      : (JSON.parse(localStorage.getItem("cookie") as string) as CookieSettings)
  );

  const [isOpenModalCookie, toggleModalCookie] = useToggle();

  useEffect(() => {
    localStorage.setItem("cookie", JSON.stringify(cookie));
  }, [cookie]);

  return (
    <>
      {!cookie.isAllowed && (
        <div className="font-blender max-w-xl w-full absolute bottom-3 bg-white left-3 p-4 border border-[#D3D8DE] rounded z-10 shadow-[0px_0px_0px_1px_rgba(16,22,26,0.08),0px_8px_24px_0px_rgba(16,22,26,0.10)]">
          <div className="w-full flex justify-between items-center mb-1">
            <h4 className="text-2xl font-bold">This system uses cookies</h4>
            <button
              type="button"
              className="h-7 w-7 hover:bg-gray-50 transition-colors flex items-center justify-center rounded"
            >
              <IconXMark className="h-5 w-5" />
            </button>
          </div>
          <p className="font-medium leading-snug mb-3">
            By clicking “Accept All Cookies”, you agree to the storing of
            cookies on your device to enhance site navigation, analyze site
            usage, and assist in our marketing efforts. You can manage cookies
            via your browser setting at any time, or click Accept to agree to
            our{" "}
            <Link href="/privacy" className="underline">
              Cookies Policy
            </Link>
            .
          </p>
          <div className="flex items-center font-medium gap-3">
            <button
              type="button"
              onClick={toggleModalCookie}
              className="px-3 py-2 w-36 border rounded-sm border-[#C5CBD3]"
            >
              Manage cookies
            </button>
            <button
              onClick={() => {
                setCookie((prev) => {
                  return {
                    ...prev,
                    isAllowed: true,
                  };
                });
              }}
              type="button"
              className="px-3 py-2 w-36 rounded-sm bg-[#2D72D2] text-white"
            >
              Accept all
            </button>
          </div>
        </div>
      )}
      {isOpenModalCookie && (
        <ModalManageCookie
          cookie={cookie}
          setCookie={setCookie}
          close={toggleModalCookie}
        />
      )}
    </>
  );
}
