import Image from "next/image";
import LogoLight from "../../public/img/logo-light.png";
import LogoDark from "../../public/img/logo-dark.svg";
import { useTheme } from "next-themes";

export default function Logo() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? LogoDark : LogoLight}
      alt={"Rollup"}
      priority
      className="h-[26px] w-auto"
    />
  );
}
