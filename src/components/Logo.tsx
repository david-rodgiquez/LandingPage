import { useTheme } from "next-themes";
import LogoLight from "./icons/LogoLight";
import LogoDark from "./icons/LogoDark";

export default function Logo() {
  const { theme, systemTheme } = useTheme();

  const Logo =
    theme === "system"
      ? systemTheme === "light"
        ? LogoLight
        : LogoDark
      : theme === "light"
      ? LogoLight
      : LogoDark;

  return <Logo className="h-[26px] w-auto" />;
}
