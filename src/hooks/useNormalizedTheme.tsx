import { useTheme } from "next-themes";

export default function useNormalizedTheme() {
  const { theme, systemTheme } = useTheme();
  return theme === "system" ? systemTheme : theme;
}
