import type { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    backgroundColor: "#1C2127",
    color: "#728fcb",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#717AA8",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#063289",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#b29762",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#2d2006",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#896724",
      },
    },
    {
      types: ["imports", "token", "string"],
      style: {
        color: "#6B84FF",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
      ],
      style: {
        color: "#D272FF",
      },
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "#93abdc",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#896724",
      },
    },
  ],
};
export default theme;
