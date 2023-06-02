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
      <label htmlFor={props.id} className="font-medium dark:text-white">
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        className="dark:bg-gray-700 dark:border-gray-500 dark:text-white outline-none border px-3 py-2 rounded-md"
        {...props}
      />
    </div>
  );
}
