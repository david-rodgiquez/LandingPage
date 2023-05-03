import Link from "next/link";

export type FooterMenu = {
  id: number;
  title: string;
  url: string;
};

export default function Footer({ menus }: { menus: FooterMenu[] }) {
  return (
    <footer className="w-full border-t px-4 bg-gray-900 text-white ">
      <div className="w-full max-w-5xl flex items-center justify-center gap-8 text-sm mx-auto px-4 py-8 ">
        {menus.map((menu) => (
          <Link
            key={menu.id}
            href={`${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}${menu.url}`}
          >
            {menu.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
