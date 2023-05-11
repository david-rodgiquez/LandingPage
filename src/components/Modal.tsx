import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import IconXMark from "./icons/IconXMark";
import useOnClickOutside from "@/hooks/useOnclickOutside";

type ModalProps = {
  onCancel: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({ onCancel, title, children }: ModalProps) {
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(mainWrapperRef, onCancel);

  return createPortal(
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-[calc(100%-2rem)] md:h-full md:inset-0 flex">
        <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
          <div
            ref={mainWrapperRef}
            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div className="flex justify-between items-center px-5 py-3 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-xl dark:text-white">
                {title}
              </h3>
              <button
                onClick={onCancel}
                className="transition-colors text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconXMark />
              </button>
            </div>
            <div className="p-6 space-y-6">{children}</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 bg-opacity-50 fixed inset-0 z-40 backdrop-blur-sm"></div>
    </>,
    document.body
  );
}
