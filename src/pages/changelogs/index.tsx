import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { getChangelogs } from "@/services/changelog";
import Link from "next/link";
import Image from "next/image";
import { getOptionalAuthSession } from "@/lib/sessionService";
import cookie from "cookies";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// export default function ChangelogsPage({
//   organization,
//   user,
//   changelogs,
//   header: { menus, logo },
//   footer: { menus: footerMenus },
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <>
//       <Head>
//         <title>Changelogs</title>
//       </Head>
//       <Layout
//         organization={organization}
//         user={user}
//         footerMenus={footerMenus}
//         headerLogo={logo}
//         headerMenus={menus}
//       >
//         <div className="w-full py-8 flex flex-col gap-6">
//           <h1 className="text-3xl font-bold">Changelogs</h1>
//           <div className="w-full grid grid-cols-3 gap-4">
//             {changelogs.data.map((changelog) => (
//               <div className="w-full border rounded-lg" key={changelog.id}>
//                 <Image
//                   src={changelog.attributes.thumbnail.data.attributes.url}
//                   height={changelog.attributes.thumbnail.data.attributes.height}
//                   width={changelog.attributes.thumbnail.data.attributes.width}
//                   alt={
//                     changelog.attributes.thumbnail.data.attributes.caption ??
//                     changelog.attributes.title
//                   }
//                   className="w-full aspect-video"
//                 />
//                 <div className="w-full px-6 py-4 flex flex-col gap-2">
//                   <h2 className="text-xl font-bold">
//                     <Link href={`/changelogs/${changelog.attributes.slug}`}>
//                       {changelog.attributes.title}
//                     </Link>
//                   </h2>
//                   <div className="w-full text-sm flex gap-2 items-center">
//                     <div className="flex gap-2 items-center">
//                       <div className="h-7 w-7 object-contain rounded-full overflow-hidden">
//                         <Image
//                           src={
//                             changelog.attributes.author.avatar.data.attributes
//                               .url
//                           }
//                           alt={
//                             changelog.attributes.author.avatar.data.attributes
//                               .caption ?? changelog.attributes.author.name
//                           }
//                           height={
//                             changelog.attributes.author.avatar.data.attributes
//                               .height
//                           }
//                           width={
//                             changelog.attributes.author.avatar.data.attributes
//                               .width
//                           }
//                           className="w-full"
//                         />
//                       </div>
//                       <p className="font-semibold">
//                         {changelog.attributes.author.name}
//                       </p>
//                     </div>
//                     &middot;
//                     <p className="text-gray-500">
//                       {new Date(
//                         changelog.attributes.createdAt
//                       ).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// }

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   if (!context.req.cookies?.session_token) {
//     return {
//       redirect: {
//         destination: "/",
//       },
//     };
//   }

//   console.log(context.req.headers.cookie);

//   const res = await fetch("https://api.astronautdolphins.com/auth/refresh", {
//     headers: { Cookie: context.req.headers.cookie || "" },
//     credentials: "include",
//   });
//   const data = await res.json();
//   console.log(data);

//   // console.log(context.req.cookies?.session_token);

//   const [
//     header,
//     footer,
//     changelogs,
//     // { organization, user }
//   ] = await Promise.all([
//     getHeader(),
//     getFooter(),
//     getChangelogs(),
//     getOptionalAuthSession(context.req, context.res),
//   ]);

//   // if (!organization || !user) {
//   //   return {
//   //     redirect: {
//   //       destination: "/",
//   //     },
//   //   };
//   // }

//   return {
//     props: {
//       organization: null,
//       user: null,
//       changelogs: changelogs,
//       header: {
//         menus: header.menu,
//         logo: header.logo.data.attributes,
//       },
//       footer: {
//         menus: footer.menus,
//       },
//     },
//   };
// };

function useClientSideAuthentication({
  policy,
  redirectTo,
}: {
  policy?: "required" | "optional";
  redirectTo?: string;
} = {}) {
  const router = useRouter();

  const [status, setStatus] = useState<
    "idle" | "authenticated" | "loading" | "unauthenticated"
  >("idle");

  useEffect(() => {
    const getRefreshToken = async () => {
      setStatus("loading");
      const res = await fetch("https://api.rollup.ai/auth/refresh", {
        credentials: "include",
      });

      const isJsonResponse = res.headers
        .get("content-type")
        ?.includes("application/json");

      const data = isJsonResponse
        ? ((await res.json()) as { accessToken: string })
        : null;

      if (res.ok && data?.accessToken) {
        setStatus("authenticated");
      } else {
        setStatus("unauthenticated");
      }
    };

    getRefreshToken();
  }, []);

  useEffect(() => {
    if (policy === "required" && status === "unauthenticated") {
      router.replace(redirectTo || "/");
    }
  }, [policy, redirectTo, router, status]);

  return { status };
}

export default function ChangelogsPage({
  changelogs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { status } = useClientSideAuthentication({
    policy: "required",
    redirectTo: "/",
  });

  if (status !== "authenticated") return null;

  return (
    <>
      <Head>
        <title>Changelogs</title>
      </Head>
      <main className="w-full min-h-[calc(100vh-57px-85px)] px-4 max-w-screen-2xl mx-auto ">
        <div className="w-full py-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Changelogs</h1>
          <div className="w-full grid grid-cols-3 gap-4">
            {changelogs.data.map((changelog) => (
              <div className="w-full border rounded-lg" key={changelog.id}>
                <Image
                  src={changelog.attributes.thumbnail.data.attributes.url}
                  height={changelog.attributes.thumbnail.data.attributes.height}
                  width={changelog.attributes.thumbnail.data.attributes.width}
                  alt={
                    changelog.attributes.thumbnail.data.attributes.caption ??
                    changelog.attributes.title
                  }
                  className="w-full aspect-video"
                />
                <div className="w-full px-6 py-4 flex flex-col gap-2">
                  <h2 className="text-xl font-bold">
                    <Link href={`/changelogs/${changelog.attributes.slug}`}>
                      {changelog.attributes.title}
                    </Link>
                  </h2>
                  <div className="w-full text-sm flex gap-2 items-center">
                    <div className="flex gap-2 items-center">
                      <div className="h-7 w-7 object-contain rounded-full overflow-hidden">
                        <Image
                          src={
                            changelog.attributes.author.avatar.data.attributes
                              .url
                          }
                          alt={
                            changelog.attributes.author.avatar.data.attributes
                              .caption ?? changelog.attributes.author.name
                          }
                          height={
                            changelog.attributes.author.avatar.data.attributes
                              .height
                          }
                          width={
                            changelog.attributes.author.avatar.data.attributes
                              .width
                          }
                          className="w-full"
                        />
                      </div>
                      <p className="font-semibold">
                        {changelog.attributes.author.name}
                      </p>
                    </div>
                    &middot;
                    <p className="text-gray-500">
                      {new Date(
                        changelog.attributes.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const changelogs = await getChangelogs();

  return {
    props: {
      changelogs,
    },
  };
};

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   if (!context.req.cookies?.session_token) {
//     return {
//       redirect: {
//         destination: "/",
//       },
//     };
//   }

//   console.log(context.req.headers.cookie);

//   const res = await fetch("https://api.astronautdolphins.com/auth/refresh", {
//     headers: { Cookie: context.req.headers.cookie || "" },
//     credentials: "include",
//   });
//   const data = await res.json();
//   console.log(data);

//   // console.log(context.req.cookies?.session_token);

//   const [
//     header,
//     footer,
//     changelogs,
//     // { organization, user }
//   ] = await Promise.all([
//     getHeader(),
//     getFooter(),
//     getChangelogs(),
//     getOptionalAuthSession(context.req, context.res),
//   ]);

//   // if (!organization || !user) {
//   //   return {
//   //     redirect: {
//   //       destination: "/",
//   //     },
//   //   };
//   // }

//   return {
//     props: {
//       organization: null,
//       user: null,
//       changelogs: changelogs,
//       header: {
//         menus: header.menu,
//         logo: header.logo.data.attributes,
//       },
//       footer: {
//         menus: footer.menus,
//       },
//     },
//   };
// };
