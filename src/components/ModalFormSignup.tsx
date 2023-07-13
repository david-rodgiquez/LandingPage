import Modal from "./Modal";
import {
  ChangeEvent,
  DetailedHTMLProps,
  FormEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from "react";
import IconSpinner from "./icons/IconSpinner";
import createStrapiRollupUser from "@/services/rollup-user";
import Link from "next/link";
import IconGoogle from "./icons/IconGoogle";
import { discoveryStart } from "@/lib/api";
import IconGmail from "./icons/IconGmail";
import IconOffice365 from "./icons/IconOffice365";

function Input({
  label,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string }) {
  return (
    <div className="text-md flex w-full flex-col gap-1 items-start font-blender">
      <label htmlFor={props.id} className="font-semibold dark:text-gray-300">
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
      <input
        className="dark:bg-transparent dark:border-gray-500 dark:text-white outline-none border px-3 py-2 rounded h-10 w-full"
        {...props}
      />
    </div>
  );
}

function Textarea({
  label,
  ...props
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { label: string }) {
  return (
    <div className="text-md flex w-full flex-col gap-1 font-blender">
      <label htmlFor={props.id} className="font-semibold dark:text-gray-300">
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        className="dark:bg-transparent dark:border-gray-500 dark:text-white outline-none border px-3 py-2 rounded"
        {...props}
      />
    </div>
  );
}

type Section = "signup-option" | "about" | "otp";

export default function ModalFormSignup({
  onClose,
  title,
}: {
  onClose: () => void;
  title: string;
}) {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    work: "",
    tool: "",
  });
  const [aboutSubmitState, setAboutSubmitState] = useState<{
    status: "loading" | "idle" | "error" | "success";
    error: string;
  }>({ status: "idle", error: "" });

  // const [otpSubmitState, setOtpSubmitState] = useState<{
  //   status: "loading" | "idle" | "error" | "success";
  //   error: string;
  // }>({ status: "idle", error: "" });

  // const [resendOtpSubmitState, setResendOtpSubmitState] = useState<{
  //   status: "loading" | "idle" | "error" | "success";
  //   error: string;
  // }>({ status: "idle", error: "" });

  const [openedSections, setOpenedSections] =
    useState<Section>("signup-option");

  const onChangeAbout = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAbout((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAboutSubmitState((prev) => ({ ...prev, status: "loading" }));
    try {
      const resp = await discoveryStart(email);
      if (resp.status === 200) {
        try {
          await createStrapiRollupUser({
            email,
            ...about,
          });
        } catch (error) {}
        setAboutSubmitState((prev) => ({ ...prev, status: "success" }));
        setOpenedSections("otp");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setAboutSubmitState((prev) => ({
        ...prev,
        status: "error",
        error: (error as Error).message || "Something went wrong",
      }));
    }
  };

  // const onSubmitOtp = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const otp = new FormData(e.currentTarget).get("otp")?.toString();
  //   if (!otp) return;
  //   setResendOtpSubmitState((prev) => ({ ...prev, status: "idle", error: "" }));
  //   setOtpSubmitState((prev) => ({ ...prev, status: "loading", error: "" }));
  //   try {
  //     const res = await fetch("/api/auth/passwordless", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ email, otp }),
  //     });

  //     if (!res.ok) {
  //       const data = res.headers
  //         .get("content-type")
  //         ?.includes("application/json")
  //         ? ((await res.json()) as { message: string })
  //         : null;

  //       throw new Error(data?.message || res.statusText);
  //     }

  //     await router.push("/discovery");
  //     setOtpSubmitState((prev) => ({ ...prev, status: "success", error: "" }));
  //   } catch (error) {
  //     setOtpSubmitState((prev) => ({
  //       ...prev,
  //       status: "error",
  //       error: (error as unknown as Error).message,
  //     }));
  //   }
  // };

  // const onResendOtp = async () => {
  //   setResendOtpSubmitState((prev) => ({ ...prev, status: "loading" }));
  //   try {
  //     const resp = await fetch(
  //       `/api/auth/signin?provider=passwordless&email=${email}`
  //     );
  //     if (resp.status === 200) {
  //       setResendOtpSubmitState((prev) => ({ ...prev, status: "success" }));
  //       setOpenedSections("otp");
  //     } else {
  //       throw new Error("Something went wrong");
  //     }
  //   } catch (error) {
  //     setResendOtpSubmitState((prev) => ({
  //       ...prev,
  //       status: "error",
  //       error: (error as Error).message || "Something went wrong",
  //     }));
  //   }
  // };

  return (
    <Modal
      title={openedSections === "otp" ? "Verify your email" : title}
      onCancel={onClose}
    >
      <div className="font-blender">
        {openedSections === "signup-option" ? (
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2 ">
              <Link
                className="rounded dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-transparent hover:bg-gray-50 transition-colors font-medium flex gap-3 border dark:border-gray-500 items-center justify-center py-2"
                href={`https://test.stytch.com/v1/b2b/public/oauth/google/discovery/start?public_token=${process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN}&discovery_redirect_url=${window.origin}/api/callback`}
              >
                <IconGoogle className="h-6 w-auto" />
                <span>Continue with Google</span>
              </Link>
            </div>
            <p className="font-semibold text-center w-full dark:border-b-gray-500 border-b mb-2 mt-3 leading-[0.1em]">
              <span className="pb-2 bg-white dark:bg-gray-800 dark:text-white px-3">
                or continue with email
              </span>
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setOpenedSections("about");
              }}
              className="flex flex-col gap-4 w-full"
            >
              <Input
                autoFocus
                type="email"
                name="email"
                id="email"
                label="You Email"
                placeholder="Enter Here"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#2D72D2] hover:bg-[#2369cc] transition-colors text-white h-10 w-full font-medium rounded flex items-center justify-center font-blender"
              >
                Continue
              </button>
            </form>
          </div>
        ) : openedSections === "about" ? (
          <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-lg font-semibold dark:text-white">
                About You
              </h3>
              <Input
                autoFocus
                value={about.firstName}
                onChange={onChangeAbout}
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                placeholder="John"
                required
              />
              <Input
                value={about.lastName}
                onChange={onChangeAbout}
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                required
              />
              <Input
                value={about.organization}
                onChange={onChangeAbout}
                type="text"
                name="organization"
                id="organization"
                label="Organization"
                placeholder="Acme Corp"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-lg font-semibold dark:text-white">
                Getting Started
              </h3>
              <Textarea
                value={about.work}
                onChange={onChangeAbout}
                name="work"
                id="work"
                label="What are you currently working on?"
                required
              />
              <Textarea
                value={about.tool}
                onChange={onChangeAbout}
                name="tool"
                id="tool"
                label="What don't you love about the workflows, software, or tools you use every day?"
              />
              <div className="w-full flex gap-2 dark:text-white">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  defaultChecked
                />
                <label htmlFor="subscribe" className="font-semibold">
                  Subscribe to Product and Company Updates
                </label>
              </div>
            </div>
            <div className="flex items-center w-full justify-between">
              <button
                disabled={aboutSubmitState.status === "loading"}
                onClick={() => setOpenedSections("signup-option")}
                type="button"
                className="h-10 dark:text-white dark:hover:bg-gray-700/20 disabled:opacity-40 hover:bg-gray-50 transition-colors font-medium rounded flex items-center justify-center px-6"
              >
                Back
              </button>
              <button
                disabled={aboutSubmitState.status === "loading"}
                type="submit"
                className="bg-[#2D72D2] px-6 hover:bg-[#2369cc] disabled:opacity-40 transition-colors text-white h-10 font-medium rounded flex items-center justify-center "
              >
                {aboutSubmitState.status === "loading" ? (
                  <IconSpinner />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        ) : openedSections === "otp" ? (
          <div className="w-full flex flex-col gap-4 text-lg dark:text-white text-[#111418]">
            <p className="font-medium">
              A verification email has been sent to <strong>{email}</strong>
            </p>
            <div className="w-full flex gap-4 text-[#404854] font-medium">
              <Link
                href="https://mail.google.com/mail/"
                className="w-1/2 flex gap-4 border-2 dark:text-gray-300 dark:hover:text-white transition-colors border-[#C5CBD3] dark:border-gray-500 rounded-sm justify-center items-center py-1.5"
              >
                <IconGmail />
                <span>Open Gmail</span>
              </Link>
              <Link
                href="https://outlook.office.com/mail/inbox/"
                className="w-1/2 flex gap-4 border-2 dark:text-gray-300 dark:hover:text-white transition-colors border-[#C5CBD3] dark:border-gray-500 rounded-sm justify-center items-center py-1.5"
              >
                <IconOffice365 />
                <span>Open Office 365</span>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">After verifying your email:</p>
              <ol className="list-decimal pl-4 font-medium space-y-2">
                <li>
                  You&apos;ll create an organization or link you account to an
                  existing organization with your domain
                </li>
                <li>
                  If we approve your request, we&apos;ll email you and
                  you&apos;ll receive access to materials to learn more about
                  Rollup
                </li>
                <li>
                  We&apos;ll schedule an introductory call to get you on board
                </li>
                <li>You&apos;ll receive access to Rollup</li>
              </ol>
            </div>
          </div>
        ) : null}
      </div>
    </Modal>
  );
}
