import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Checkbox({
  label,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string }) {
  return (
    <div className="text-sm flex w-full gap-2">
      <input
        type="checkbox"
        className="outline-none border px-3 py-2 rounded-md"
        {...props}
      />
      <label htmlFor={props.id}>
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
    </div>
  );
}
