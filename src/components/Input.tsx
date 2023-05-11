import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input({
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
