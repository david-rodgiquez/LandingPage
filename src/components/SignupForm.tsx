import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { discoveryStart } from "../lib/api";
import Link from "next/link";

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

const isValidOrgName = (organizationName: string) => {
  return organizationName.length > 3;
};

const SignupForm = () => {
  const [emlSent, setEMLSent] = useState(STATUS.INIT);
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const isValid = isValidEmail(email);
    setIsDisabled(!isValid);
  }, [email]);

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    if (isValidEmail(e.target.value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    // Disable button right away to prevent sending emails twice
    if (isDisabled) {
      return;
    } else {
      setIsDisabled(true);
    }

    if (isValidEmail(email)) {
      const resp = await discoveryStart(email);
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
    // setEmail('');
    // setOrganizationName('');
  };

  return (
    <div className="w-full flex items-center flex-col gap-4">
      {emlSent === STATUS.INIT && (
        <>
          <h1 className="text-center font-bold text-xl">Sign up</h1>
          <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1">
              <label className="text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="px-4 outline-none py-2 border rounded-lg w-full"
              />
            </div>
            <button
              className="bg-indigo-600 w-full hover:bg-indigo-700 transition-colors text-white py-2 rounded-lg font-medium disabled:bg-indigo-400"
              disabled={isDisabled}
              id="button"
              type="submit"
            >
              Continue
            </button>
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-600">
                Login
              </Link>
            </p>
          </form>
        </>
      )}
      {emlSent === STATUS.SENT && (
        <div className="w-full flex flex-col gap-2 text-center">
          <h1 className="text-center font-bold text-xl">Check your email</h1>
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
    </div>
  );
};

export default SignupForm;
