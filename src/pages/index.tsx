import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { getOptionalAuthSession } from "@/lib/sessionService";
import useToggle from "@/hooks/useToggle";
import Modal from "@/components/Modal";
import {
  DetailedHTMLProps,
  FormEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from "react";
import IconSpinner from "@/components/icons/IconSpinner";

function Input({
  label,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string }) {
  return (
    <div className="text-sm flex w-full flex-col gap-1">
      <label htmlFor={props.id} className="font-medium ">
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
      <input className="outline-none border px-3 py-2 rounded-md" {...props} />
    </div>
  );
}

function InputTextarea({
  label,
  ...props
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { label: string }) {
  return (
    <div className="text-sm flex w-full flex-col gap-1">
      <label htmlFor={props.id} className="font-medium ">
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        className="outline-none border px-3 py-2 rounded-md"
        {...props}
      />
    </div>
  );
}

function Checkbox({
  label,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string }) {
  return (
    <div className="text-sm flex w-full gap-2">
      <input
        type="checkbox"
        className="outline-none border px-3 py-2 rounded-md"
        {...props}
      />
      <label htmlFor={props.id}>
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
    </div>
  );
}

const createUser = (str: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str === "fail") {
        reject(null);
      } else {
        resolve(null);
      }
    }, 2000);
  });
};

function GetAccessButton() {
  const [isOpenModal, toggleModal] = useToggle();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    organization: "",
    currentlyWorkingOn: "",
    softwareUsed: "",
    isSubscribe: true,
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const res = await createUser("fail");
      // setError("something went wrong");
    } catch (error) {
      setError("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        // onClick={toggleModal}
        className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-2 rounded flex items-center justify-center font-medium"
      >
        Get Access
      </button>
      {isOpenModal && (
        <Modal title="Get access to Rollup" onCancel={toggleModal}>
          <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              name="email"
              id="email"
              label="Email"
              placeholder="john@gmail.com"
              required
            />
            <Input
              value={data.firstName}
              onChange={(e) =>
                setData((prev) => ({ ...prev, firstName: e.target.value }))
              }
              type="text"
              name="firstName"
              id="firstName"
              label="First Name"
              placeholder="John"
              required
            />
            <Input
              value={data.lastName}
              onChange={(e) =>
                setData((prev) => ({ ...prev, lastName: e.target.value }))
              }
              type="text"
              name="lastName"
              id="lastName"
              label="Last Name"
              placeholder="Doe"
              required
            />
            <Input
              value={data.organization}
              onChange={(e) =>
                setData((prev) => ({ ...prev, organization: e.target.value }))
              }
              type="text"
              name="organization"
              id="organization"
              label="Organizational Affiliation"
              placeholder="ACME Corp"
            />
            <InputTextarea
              value={data.currentlyWorkingOn}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  currentlyWorkingOn: e.target.value,
                }))
              }
              rows={4}
              id="currentlyWorkingOn"
              name="currentlyWorkingOn"
              label="What are you currently working on?"
            />
            <InputTextarea
              value={data.softwareUsed}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  softwareUsed: e.target.value,
                }))
              }
              rows={4}
              id="softwareUsed"
              name="softwareUsed"
              label="What don't you love about the workflows, software, or tools you use very day?"
            />
            {error && <p className="text-sm text-red-700">{error}</p>}
            <div className="w-full flex justify-between items-center">
              <Checkbox
                checked={data.isSubscribe}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    isSubscribe: e.target.checked,
                  }))
                }
                label="Subscribe to Product and Company Updates"
                id="isSubscribe"
                name="isSubscribe"
              />
              <button
                disabled={isLoading}
                type="submit"
                className="bg-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-500 w-24 flex items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white text-sm px-6 py-2 rounded"
              >
                {!isLoading ? "Submit" : <IconSpinner />}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}

export default function Home({
  user,
  organization,
  header: { menus, logo },
  footer: { menus: footerMenus },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isAuthenticated = organization && user;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout
        user={user}
        organization={organization}
        footerMenus={footerMenus}
        headerLogo={logo}
        headerMenus={menus}
      >
        <div className="w-full pb-12 pt-28 flex justify-between">
          <div className="w-4/12 flex flex-col gap-8">
            <h1 className="text-4xl leading-tight font-semibold mt-10">
              Rollup is a new collaborative platform for enginering complex
              hardware.
            </h1>
            {!isAuthenticated && <GetAccessButton />}
          </div>
          <div className="w-8/12 flex justify-end">
            <div className="w-full max-w-3xl h-[480px] bg-blue-100 text-blue-300 text-3xl flex items-center justify-center">
              image
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const [header, footer, { organization, user }] = await Promise.all([
    getHeader(),
    getFooter(),
    getOptionalAuthSession(context.req, context.res),
  ]);

  return {
    props: {
      organization,
      user,
      header: {
        menus: header.menu,
        logo: header.logo.data.attributes,
      },
      footer: {
        menus: footer.menus,
      },
    },
  };
};
