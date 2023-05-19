import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import IconXMark from "./icons/IconXMark";

function isValidDomain(domain: string) {
  return /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(
    domain
  );
}

export default function InputDomains({
  label,
  value,
  onChange,
  ...props
}: Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  onChange: (domain: string, type: "add" | "delete") => void;
  label: string;
  value: string[];
}) {
  return (
    <div className="text-sm flex w-full flex-col gap-1 items-start">
      <label htmlFor={props.id} className="font-medium ">
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
      <div className="outline-none border flex-wrap px-3 py-2 flex gap-2 items-center rounded-md min-h-[2.5rem] w-full">
        {value.map((domain) => (
          <div
            key={domain}
            className="bg-indigo-100 rounded text-indigo-900 flex items-center gap-1 px-1.5 py-0.5 text-xs font-medium"
          >
            <span>{domain}</span>
            <button
              onClick={() => onChange(domain, "delete")}
              className="bg-indigo-200 hover:bg-indigo-300"
            >
              <IconXMark className="h-3 w-3" />
            </button>
          </div>
        ))}
        <input
          {...props}
          autoComplete="off"
          className="outline-none w-auto "
          onKeyDown={(e) => {
            if (e.key === "," && isValidDomain(e.currentTarget.value)) {
              e.preventDefault();
              onChange(e.currentTarget.value, "add");
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
}
