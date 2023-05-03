import Image from "next/image";
import Link from "next/link";

export type HeaderLogo = {
  url: string;
  height: number;
  width: number;
};

export type HeaderMenu = {
  id: number;
  url: string;
  title: string;
};

export default function Header({
  logo,
  menus,
}: {
  logo: HeaderLogo;
  menus: HeaderMenu[];
}) {
  return (
    <header className="w-full border-b">
      <div className="w-full max-w-5xl flex items-center justify-between mx-auto px-4 py-2">
        <Link href="/">
          <Image
            priority
            className="h-10 w-auto"
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}${logo.url}`}
            alt="logo"
            height={logo.height}
            width={logo.width}
          />
        </Link>
        <div className="flex gap-6 items-center">
          {menus.map((menu) => (
            <Link key={menu.id} href={menu.url} className="font-medium ">
              {menu.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
