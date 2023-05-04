import Image from "next/image";
import Link from "next/link";
import AvatarDefault from "../../../public/img/avatar-default.png";
import { useUser } from "@auth0/nextjs-auth0/client";
import IconSpinner from "../icons/IconSpinner";
import useToggle from "@/hooks/useToggle";

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

function UserAvatar() {
  const { user, error, isLoading } = useUser();
  const [isOpenFloatingMenu, toggleOpenFloatingMenu, setIsOpenFloatingMenu] =
    useToggle();

  return (
    <div className="flex items-center relative">
      <div className="flex items-center ">
        {isLoading ? (
          <IconSpinner className="h-8 w-8 text-indigo-600" />
        ) : error ? (
          <p>{error.message}</p>
        ) : user ? (
          <button
            type="button"
            onClick={toggleOpenFloatingMenu}
            className="flex gap-3 items-center relative"
          >
            <p className="font-medium text-sm">{user.nickname}</p>
            <div className="h-8 w-8 rounded-full overflow-hidden relative">
              {user.picture ? (
                <Image
                  priority
                  src={user.picture}
                  alt={user.nickname ?? "user"}
                  height={480}
                  width={480}
                />
              ) : (
                <Image
                  priority
                  src={AvatarDefault}
                  alt="user"
                  height={360}
                  width={360}
                />
              )}
            </div>
            {isOpenFloatingMenu && (
              <div
                onClick={() => setIsOpenFloatingMenu(false)}
                className="bg-white flex w-full text-left divide-y flex-col min-w-[100px] absolute border shadow-xl z-10 top-10 rounded-lg text-sm font-medium right-0"
              >
                <Link
                  href="/user/profile"
                  className="hover:text-indigo-600 transition-colors py-2 px-4"
                >
                  Profile
                </Link>
                <Link
                  href="/api/auth/logout"
                  className="hover:text-indigo-600 transition-colors py-2 px-4"
                >
                  Logout
                </Link>
              </div>
            )}
          </button>
        ) : (
          <Link
            href="/api/auth/login"
            className="bg-indigo-700 hover:bg-indigo-800 transition-colors px-4 py-1 font-medium text-sm text-white rounded-lg"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

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
        <div className="flex gap-10 items-center">
          <div className="w-full gap-6 flex items-center">
            {menus.map((menu) => (
              <Link key={menu.id} href={menu.url} className="font-medium ">
                {menu.title}
              </Link>
            ))}
          </div>
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
