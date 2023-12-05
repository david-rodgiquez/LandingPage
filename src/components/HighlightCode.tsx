import { Highlight, HighlightProps, themes, Prism } from "prism-react-renderer";
import { useEffect } from "react";

export default function HighlightCode(props: Omit<HighlightProps, "children">) {
  useEffect(() => {
    const init = async () => {
      window.Prism = Prism;
      await Promise.all([
        // @ts-ignore
        import("prismjs/components/prism-ruby"),
        // @ts-ignore
        import("prismjs/components/prism-php-extras"),
        // @ts-ignore
        import("prismjs/components/prism-csharp"),
        // @ts-ignore
        import("prismjs/components/prism-bash"),
        // @ts-ignore
        import("prismjs/components/prism-java"),
      ]);
    };

    init();
  }, []);
  return (
    <Highlight
      theme={{
        ...themes.oneDark,
        plain: { ...themes.oneDark, backgroundColor: "#1C2127" },
      }}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="py-2 overflow-x-hidden">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="px-2 w-10 inline-block text-[#717AA8] select-none">
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
