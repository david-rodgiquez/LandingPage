import Link from "next/link";
import React, { FormEventHandler, useEffect, useState } from "react";

const STATUS = {
  INIT: 0,
  SENT: 1,
  ERROR: 2,
};

const isValidEmail = (emailValue: string) => {
  // Overly simple email address regex
  const regex = /\S+@\S+\.\S+/;
  return regex.test(emailValue);
};

type Props = React.PropsWithChildren<{
  title: string;
  onSubmit: (email: string) => Promise<{ status: number }>;
}>;
export const EmailLoginForm = ({ title, onSubmit, children }: Props) => {
  const [emlSent, setEMLSent] = useState(STATUS.INIT);
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!isValidEmail(email));
  }, [email]);

  const onSubmitFormHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    // Disable button right away to prevent sending emails twice
    if (isDisabled) {
      return;
    } else {
      setIsDisabled(true);
    }

    if (isValidEmail(email)) {
      const resp = await onSubmit(email);
      if (resp.status === 200) {
        setEMLSent(STATUS.SENT);
      } else {
        setEMLSent(STATUS.ERROR);
      }
    }
  };

  const handleTryAgain = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setEMLSent(STATUS.INIT);
  };

  return (
    <div className="w-full flex items-center flex-col gap-4">
      <h1 className="text-xl font-bold">{title}</h1>
      {children}
      {emlSent === STATUS.INIT && (
        <form
          onSubmit={onSubmitFormHandler}
          className="w-full flex flex-col gap-2"
        >
          <input
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="px-4 outline-none py-2 border rounded-lg w-full"
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-2 rounded-lg font-medium disabled:bg-indigo-400"
            disabled={isDisabled}
            id="button"
            type="submit"
          >
            Continue
          </button>
          <p className="text-sm">
            Dont have an account yet?{" "}
            <Link href="/signup" className="text-indigo-600">
              signup
            </Link>
          </p>
        </form>
      )}
      {emlSent === STATUS.SENT && (
        <div className="flex text-center flex-col gap-2 w-full">
          <h2 className="font-bold">Check your email</h2>
          <p>{`An email was sent to ${email}`}</p>
          <a
            className="text-indigo-600 cursor-pointer"
            onClick={handleTryAgain}
          >
            Click here to try again.
          </a>
        </div>
      )}
      {emlSent === STATUS.ERROR && (
        <div className="flex text-center flex-col gap-2 w-full">
          <h2 className="text-red-700">Something went wrong!</h2>
          <p>{`Failed to send email to ${email}`}</p>
          <a
            className="text-indigo-600 cursor-pointer"
            onClick={handleTryAgain}
          >
            Click here to try again.
          </a>
        </div>
      )}
    </div>
  );
};
