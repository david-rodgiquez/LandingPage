import md5 from "md5";

export function getGravatarUrl(email: string) {
  return `//www.gravatar.com/avatar/${md5(email, {
    encoding: "binary",
  })}?d=identicon`;
}
