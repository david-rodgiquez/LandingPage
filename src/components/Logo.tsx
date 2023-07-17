import { useTheme } from "next-themes";
import LogoLight from "./icons/LogoLight";
import LogoDark from "./icons/LogoDark";

export default function Logo() {
  const { theme } = useTheme();
  const Logo = theme === "dark" ? LogoDark : LogoLight;
  return <Logo className="h-[26px] w-auto" />;
}
