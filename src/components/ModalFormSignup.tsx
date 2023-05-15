import { isValidEmail } from "@/lib/validation";
import Modal from "./Modal";
import { ChangeEvent, FormEvent, useState } from "react";
import { discoveryStart } from "@/lib/api";
import Input from "./Input";
import Button from "./Button";
import IconSpinner from "./icons/IconSpinner";
import Textarea from "./Textarea";
import createStrapiRollupUser from "@/services/rollup-user";

const STATUS = {
  INIT: 0,
  SENT: 1,
  ERROR: 2,
};

export default function ModalFormSignup({
  onClose,
  title,
}: {
  onClose: () => void;
  title: string;
}) {
  const [emlSent, setEMLSent] = useState(STATUS.INIT);
  const [email, setEmail] = useState("");
  const [openedTab, setOpenedTab] = useState<
    "email" | "about" | "get-started" | "thanks" | "welcome"
  >("email");
  const [about, setAbout] = useState({
    firstName: "",
    lastName: "",
    organization: "",
  });
  const [gettingStarted, setGettingStarted] = useState({
    work: "",
    tool: "",
  });

  const isDisabled = !isValidEmail(email);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeAbout = (e: ChangeEvent<HTMLInputElement>) => {
    setAbout((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onGettingStarted = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setGettingStarted((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    if (openedTab === "email") {
      // const resp = await discoveryStart(email);
      // if (resp.status === 200) {
      //   setOpenedTab("about");
      //   setEMLSent(STATUS.SENT);
      // } else {
      //   setEMLSent(STATUS.ERROR);
      // }
      setOpenedTab("about")
    } else if (openedTab === "about") {
      setOpenedTab("get-started");
    } else if (openedTab === "get-started") {
      try {
        const resp = await discoveryStart(email);
        if (resp.status === 200) {
          setEMLSent(STATUS.SENT);
          try {
            await createStrapiRollupUser({ email, ...about, ...gettingStarted });
          } catch (error) {
          }
          setOpenedTab("welcome");
        } else {
          setEMLSent(STATUS.ERROR);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        // setOpenedTab("welcome");
      }
    } else {
      onClose();
    }
    setIsLoading(false);
  };

  const handleTryAgain = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setEMLSent(STATUS.INIT);
    setOpenedTab("email")
  };

  return (
    <Modal title={title} onCancel={onClose}>
      {openedTab != "welcome" ? (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2 border rounded px-6 py-4">
            <h3 className="text-lg font-semibold ">Email</h3>
            {emlSent === STATUS.INIT && openedTab === "email" && (
              <div className="w-full">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  label="Email Address"
                  placeholder="john@gmail.com"
                  required
                />
              </div>
            )}
          </div>
          <div className="w-full flex flex-col gap-2 border rounded px-6 py-4">
            <h3 className="text-lg font-semibold ">About You</h3>
            {openedTab === "about" && (
              <div className="w-full flex flex-col gap-2">
                <Input
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
            )}
          </div>
          <div className="w-full flex flex-col gap-2 border rounded px-6 py-4">
            <h3 className="text-lg font-semibold ">Getting Started</h3>
            {openedTab === "get-started" && (
              <div className="w-full flex flex-col gap-2">
                <Textarea
                  value={gettingStarted.work}
                  onChange={onGettingStarted}
                  name="work"
                  id="work"
                  label="What are you currently working on?"
                />
                <Textarea
                  value={gettingStarted.tool}
                  onChange={onGettingStarted}
                  name="tool"
                  id="tool"
                  label="What don't you love about the workflows, software, or tools you use every day?"
                />
              </div>
            )}
          </div>
          {/* {emlSent === STATUS.SENT && openedTab === "get-started" && (
              <div className="w-full flex flex-col text-sm">
                <p className="text-green-700">
                  An email was sent to <strong>{email}</strong>.{" "}
                  <button
                    type="button"
                    className="text-indigo-600 font-semibold cursor-pointer hover:underline hover:underline-offset-2 decoration-indigo-700 decoration-2"
                    onClick={handleTryAgain}
                  >
                    Try again.
                  </button>
                </p>
              </div>
            )} */}
            {emlSent === STATUS.ERROR && openedTab === "get-started" && (
              <div className="w-full flex flex-col text-sm">
                <p className="text-red-700">
                  Failed to send email to <strong>{email}</strong>.{" "}
                  <button
                    type="button"
                    className="text-indigo-600 font-semibold cursor-pointer hover:underline hover:underline-offset-2 decoration-indigo-700 decoration-2"
                    onClick={handleTryAgain}
                  >
                    Try again.
                  </button>
                </p>
              </div>
            )}
          <Button type="submit" disabled={isDisabled || isLoading}>
            {isLoading ? <IconSpinner /> : "Next"}
          </Button>
        </form>
      ) : (
        <div className="w-full flex flex-col gap-6">
          <div className="w-full space-y-2">
            <h3 className="text-xl font-semibold">
              Thank you for your interest.
            </h3>
            <p>
              If there&apos;s a fit, we&apos;ll response in 24-48 hours with a
              welcome email
            </p>
          </div>
          <div className="w-full space-y-2">
            <h3 className="text-xl font-semibold">After your welcome email</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                Our landing page will give you access to learn more about Rollup
              </li>
              <li>We&apos;ll schedule an introductory call</li>
              <li>You&apos;ll receive early-access to Rollup</li>
            </ol>
          </div>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </div>
      )}
    </Modal>
  );
}
