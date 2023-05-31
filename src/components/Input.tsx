import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input({
  label,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string }) {
  return (
    <div className="flex w-full flex-col gap-1 items-start">
      <label htmlFor={props.id} className="font-medium ">
        {label}{" "}
        {props.required && <span className="text-red-500 font-sans">*</span>}
      </label>
      <input
        className="outline-none border px-3 py-2 rounded-md h-10 w-full"
        {...props}
      />
    </div>
  );
}
