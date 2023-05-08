import showdown from "showdown";

const converter = new showdown.Converter();

export function markdownToHTML(markdown: string) {
  return converter.makeHtml(markdown);
}
