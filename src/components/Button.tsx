import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      className="bg-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-500 flex items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white text-sm px-6 py-2 rounded"
      {...props}
    />
  );
}
