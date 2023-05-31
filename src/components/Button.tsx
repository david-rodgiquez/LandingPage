import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      className="bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-300 flex items-center justify-center font-medium flex-shrink-0 hover:bg-blue-900 transition-colors text-white px-6 py-2 rounded"
      {...props}
    />
  );
}
