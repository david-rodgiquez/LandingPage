import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export default function Textarea({
  label,
  ...props
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { label: string }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={props.id} className="font-medium ">
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        className="outline-none border px-3 py-2 rounded-md"
        {...props}
      />
    </div>
  );
}
