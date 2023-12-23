import { Modules, RiveComponent } from "@/pages";
import { useEffect, useRef } from "react";

export default function ModuleMenuItem({
  setOpenedModule,
  module,
  isOpened,
  RiveComponent,
}: {
  isOpened: boolean;
  module: Modules[number];
  setOpenedModule: React.Dispatch<
    React.SetStateAction<Modules[number]["title"]>
  >;
  RiveComponent: Modules[number]["RiveComponent"];
}) {
  const cardContainerRef = useRef<HTMLButtonElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const descriptionElement = cardContainerRef.current;
    const titleElement = titleRef.current;

    if (!descriptionElement || !titleElement) return;

    if (isOpened) {
      descriptionElement.style.maxHeight = `${descriptionElement.scrollHeight}px`;
    } else {
      descriptionElement.style.maxHeight = `${titleElement.clientHeight}px`;
    }
  }, [isOpened, cardContainerRef, titleRef]);

  return (
    <>
      <button
        data-is-active={isOpened}
        ref={cardContainerRef}
        type="button"
        onClick={() => {
          setOpenedModule(module.title);
        }}
        key={module.title}
        className={`text-left relative rounded-lg flex flex-col border overflow-hidden ${
          isOpened ? " border-[#DBE4EF] " : "border-transparent opacity-50"
        }`}
        style={{ transition: "max-height 0.5s" }}
      >
        <div className="flex items-center gap-2 p-5" ref={titleRef}>
          <module.icon
            className={`w-10 ${isOpened ? "stroke-[#4C90F0]" : ""}`}
          />
          <h3 className="font-bold text-xl">{module.title}</h3>
        </div>
        <p ref={descriptionRef} className="text-lg leading-tight px-5 pb-5">
          {module.description}
        </p>
      </button>
      {window.innerWidth <= 768 && isOpened && (
        <RiveComponent className="md:ml-8 mt-2" />
      )}
    </>
  );
}
