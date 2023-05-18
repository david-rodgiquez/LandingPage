import { isValidEmail } from "@/lib/validation";
import Modal from "./Modal";
import { ChangeEvent, FormEvent, useState } from "react";
import { discoveryStart } from "@/lib/api";
import Input from "./Input";
import Button from "./Button";
import IconSpinner from "./icons/IconSpinner";
import Textarea from "./Textarea";
import createStrapiRollupUser from "@/services/rollup-user";
import IconChevronRight from "./icons/IconChevronRight";
import IconXMark from "./icons/IconXMark";

const STATUS = {
  INIT: 0,
  SENT: 1,
  ERROR: 2,
};

type Section = "email" | "about" | "get-started" | "verify-notice";

export default function ModalFormSignup({
  onClose,
  title,
}: {
  onClose: () => void;
  title: string;
}) {
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState({
    firstName: "",
    lastName: "",
    organization: "",
  });
  const [gettingStarted, setGettingStarted] = useState({
    work: "",
    tool: "",
  });
  const [emlSent, setEMLSent] = useState(STATUS.INIT);
  const [openedSections, setOpenedSections] = useState<Section[]>(["email"]);
  const isDisabled =
    !isValidEmail(email) || !about.firstName || !about.lastName;
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
    try {
      const resp = await discoveryStart(email);
      if (resp.status === 200) {
        setEMLSent(STATUS.SENT);
        try {
          await createStrapiRollupUser({
            email,
            ...about,
            ...gettingStarted,
          });
        } catch (error) {}
        setOpenedSections(["verify-notice"]);
      } else {
        setEMLSent(STATUS.ERROR);
        setOpenedSections((prev) =>
          !prev.includes("email") ? prev.concat("email") : prev
        );
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
    setIsLoading(false);
  };

  const handleTryAgain = (e: any) => {
    setEMLSent(STATUS.INIT);
    setOpenedSections((prev) =>
      !prev.includes("email") ? prev.concat("email") : prev
    );
  };

  const toggleClickSection = (section: Section) => {
    setOpenedSections((prev) => {
      if (prev.includes(section)) {
        return prev.filter((p) => p !== section);
      } else {
        return prev.concat(section);
      }
    });
  };

  return (
    <Modal title={title} onCancel={onClose}>
      {!openedSections.includes("verify-notice") ? (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2 border rounded px-6 py-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleClickSection("email")}
            >
              <h3 className="text-lg font-semibold ">Email</h3>
              <IconChevronRight
                className={`h-6 w-6 transition-transform ${
                  openedSections.includes("email") ? "rotate-90" : ""
                }`}
              />
            </div>
            {openedSections.includes("email") && (
              <div className="w-full flex flex-col gap-2">
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
                {emlSent === STATUS.ERROR && (
                  <div className="w-full flex flex-col text-sm">
                    <p className="text-red-700 flex items-center gap-1">
                      Failed to send email to <strong>{email}</strong>.{" "}
                      <button
                        type="button"
                        className="text-indigo-600 font-semibold cursor-pointer hover:underline hover:underline-offset-2 decoration-indigo-700 decoration-2"
                        onClick={handleTryAgain}
                      >
                        <IconXMark className="h-4 w-4" />
                      </button>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="w-full flex flex-col gap-2 border rounded px-6 py-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleClickSection("about")}
            >
              <h3 className="text-lg font-semibold ">About You</h3>
              <IconChevronRight
                className={`h-6 w-6 transition-transform ${
                  openedSections.includes("about") ? "rotate-90" : ""
                }`}
              />
            </div>
            {openedSections.includes("about") && (
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
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleClickSection("get-started")}
            >
              <h3 className="text-lg font-semibold ">Getting Started</h3>
              <IconChevronRight
                className={`h-6 w-6 transition-transform ${
                  openedSections.includes("get-started") ? "rotate-90" : ""
                }`}
              />
            </div>
            {openedSections.includes("get-started") && (
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
                <div className="w-full flex gap-2">
                  <input type="checkbox" id="subscribe" name="subscribe" />
                  <label htmlFor="subscribe" className="text-sm font-medium">
                    Subscribe to Product and Company Updates
                  </label>
                </div>
              </div>
            )}
          </div>

          <Button type="submit" disabled={isDisabled || isLoading}>
            {isLoading ? <IconSpinner /> : "Submit"}
          </Button>
        </form>
      ) : (
        <div className="w-full flex flex-col gap-6">
          <div className="w-full space-y-2">
            <h3 className="text-xl font-semibold">Verify your email</h3>
            <p>
              A verification email has been sent to <strong>{email}</strong>
            </p>
            <div className="flex gap-4 text-xs">
              <a
                href="https://mail.google.com/"
                className="bg-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-500 flex items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white px-6 py-2 rounded"
                target="_blank"
              >
                Open Gmail
              </a>
              <a
                href="https://www.microsoft365.com/"
                target="_blank"
                className="bg-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-500 flex items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white px-6 py-2 rounded"
              >
                Open Office 365
              </a>
            </div>
          </div>
          <div className="w-full space-y-2">
            <h3 className="text-xl font-semibold">
              After verifying your email
            </h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                You&apos;ll create an organization or link you account to an
                existing organization with your domain.
              </li>
              <li>
                If we approve your request, we&apos;ll email you and you&apos;ll
                receive access to materials to learn more about Rollup.
              </li>
              <li>
                We&apos;ll schedule an introductory call to get you on board.
              </li>
              <li>You&apos;ll receive access to Rollup.</li>
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
