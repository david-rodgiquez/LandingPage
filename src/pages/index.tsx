import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { getOptionalAuthSession } from "@/lib/sessionService";
import useToggle from "@/hooks/useToggle";
import Modal from "@/components/Modal";
import { FormEvent, useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { isValidEmail } from "@/lib/validation";
import { discoveryStart } from "@/lib/api";
import IconSpinner from "@/components/icons/IconSpinner";

const STATUS = {
  INIT: 0,
  SENT: 1,
  ERROR: 2,
};

function GetAccessButton() {
  const [isOpenModal, toggleModal] = useToggle();
  const [emlSent, setEMLSent] = useState(STATUS.INIT);
  const [email, setEmail] = useState("");

  const isDisabled = !isValidEmail(email);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const resp = await discoveryStart(email);
    if (resp.status === 200) {
      setEMLSent(STATUS.SENT);
    } else {
      setEMLSent(STATUS.ERROR);
    }
    setIsLoading(false);
  };

  const handleTryAgain = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setEMLSent(STATUS.INIT);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-2 rounded flex items-center justify-center font-medium"
      >
        Get Access
      </button>
      {isOpenModal && (
        <Modal title="Get access to Rollup" onCancel={toggleModal}>
          {emlSent === STATUS.INIT && (
            <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                label="Email"
                placeholder="john@gmail.com"
                required
              />
              <Button type="submit" disabled={isDisabled || isLoading}>
                {isLoading ? <IconSpinner /> : "Continue"}
              </Button>
              <p className="text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-indigo-600">
                  Login
                </Link>
              </p>
            </form>
          )}
          {emlSent === STATUS.SENT && (
            <div className="w-full flex flex-col gap-2 text-center">
              <h1 className="text-center font-bold text-xl">
                Check your email
              </h1>
              <p>{`An email was sent to ${email}`}</p>
              <button
                type="button"
                className="text-indigo-600"
                onClick={handleTryAgain}
              >
                Click here to try again.
              </button>
            </div>
          )}
          {emlSent === STATUS.ERROR && (
            <div className="w-full flex flex-col gap-2 text-center">
              <h2 className="text-center font-bold text-xl">
                Something went wrong!
              </h2>
              <p>{`Failed to send email to ${email}`}</p>
              <a
                className="text-indigo-600 cursor-pointer"
                onClick={handleTryAgain}
              >
                Click here to try again.
              </a>
            </div>
          )}
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
