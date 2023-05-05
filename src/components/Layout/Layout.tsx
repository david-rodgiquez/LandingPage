import { ReactNode } from "react";
import Footer, { type FooterMenu } from "./Footer";
import Header, { HeaderLogo, type HeaderMenu } from "./Header";
import { Organization } from "stytch";
import { Member } from "@stytch/vanilla-js";

export default function Layout({
  headerMenus,
  footerMenus,
  headerLogo,
  children,
  organization,
  user,
}: {
  headerMenus: HeaderMenu[];
  footerMenus: FooterMenu[];
  headerLogo: HeaderLogo;
  children: ReactNode;
  organization?: Organization | null;
  user?: Member | null;
}) {
  return (
    <>
      <Header
        organization={organization}
        user={user}
        menus={headerMenus}
        logo={headerLogo}
      />
      <main className="w-full min-h-[calc(100vh-57px-85px)] px-4 max-w-5xl mx-auto ">
        {children}
      </main>
      <Footer menus={footerMenus} />
    </>
  );
}
