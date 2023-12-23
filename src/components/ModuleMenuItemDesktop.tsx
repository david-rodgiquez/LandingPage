import { ModuleMenuRiveComponentWrapper, Modules } from "@/pages";

export default function ModuleMenuItemDeskrop({
  RiveComponent,
}: {
  RiveComponent: Modules[number]["RiveComponent"];
}) {
  return (
    <>
      {window?.innerWidth > 768 && (
        <ModuleMenuRiveComponentWrapper>
          <RiveComponent className="md:ml-8" />
        </ModuleMenuRiveComponentWrapper>
      )}
    </>
  );
}
