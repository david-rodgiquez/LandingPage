import React, { FormEventHandler, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { EmailLoginForm } from "./EmailLoginForm";
import { discoveryStart } from "../lib/api";

const ContinueToTenantForm = ({ onBack }: { onBack: () => void }) => {
  const [slug, setSlug] = useState<string>("");
  const router = useRouter();

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    router.push(`${slug}/login`);
  };

  return (
    <div className="w-full flex items-center flex-col gap-4">
      <h1 className="text-center font-bold text-xl">
        What is your Organization&apos;s Domain?
      </h1>
      <p>
        Don&apos;t know your organization&apos;s Domain? Find your{" "}
        <Link className="text-indigo-600" href="" onClick={onBack}>
          organizations
        </Link>
        .
      </p>
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-2">
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="acme-corp"
          className="px-4 outline-none py-2 border rounded-lg w-full"
        />
        <button
          className="bg-indigo-600 w-full hover:bg-indigo-700 transition-colors text-white py-2 rounded-lg font-medium disabled:bg-indigo-400"
          id="button"
          type="submit"
          disabled={!slug}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

const LoginDiscoveryForm = () => {
  const [isDiscovery, setIsDiscovery] = useState(true);

  return (
    <div>
      {isDiscovery ? (
        <EmailLoginForm title="Sign in" onSubmit={discoveryStart}>
          <p className="text-center">
            We&apos;ll email you a magic code for a password-free sign in.
            <br />
            You&apos;ll be able to choose which organization you want to access.
            <br />
            Or you can{" "}
            <Link
              className="text-indigo-600"
              href=""
              onClick={() => setIsDiscovery(false)}
            >
              sign in manually instead
            </Link>
            .
          </p>
        </EmailLoginForm>
      ) : (
        <ContinueToTenantForm onBack={() => setIsDiscovery(true)} />
      )}
    </div>
  );
};

export default LoginDiscoveryForm;
