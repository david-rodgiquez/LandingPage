import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";

export default function ClientOnlyElement({
  children,
}: {
  children: ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return <>{hydrated && children}</>;
}
