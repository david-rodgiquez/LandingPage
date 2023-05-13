import { isValidEmail } from "@/lib/validation";
import Modal from "./Modal";
import { FormEvent, useState } from "react";
import { discoveryStart } from "@/lib/api";
import Input from "./Input";
import Button from "./Button";
import IconSpinner from "./icons/IconSpinner";

const STATUS = {
  INIT: 0,
  SENT: 1,
  ERROR: 2,
};

export default function ModalFormLogin({
  onClose,
  title,
}: {
  onClose: () => void;
  title: string;
}) {
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
    <Modal title={title} onCancel={onClose}>
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
        </form>
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
    </Modal>
  );
}
