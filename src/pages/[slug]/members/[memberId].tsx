import Button from "@/components/Button";
import Checkbox from "@/components/Checbox";
import Input from "@/components/Input";
import type { FooterMenu } from "@/components/Layout/Footer";
import type { HeaderLogo, HeaderMenu } from "@/components/Layout/Header";
import Layout from "@/components/Layout/Layout";
import IconArrowLongRight from "@/components/icons/IconArrowLongRight";
import IconSpinner from "@/components/icons/IconSpinner";
import { getGravatarUrl } from "@/lib/gravatar";
import { OrgService } from "@/lib/orgService";
import { useAuth, withSession } from "@/lib/sessionService";
import { SSOService } from "@/lib/ssoService";
import { getFooter, getHeader } from "@/services/header";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import type { Member, Organization } from "stytch";

type Props = {
  user: Member;
  organization: Organization;
};

export default function MemberPage({
  footer,
  header,
  user,
  organization,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [updatedUser, setUpdatedUser] = useState<{
    firstName?: string;
    lastName?: string;
    avatarUrl: string;
    emailSubscribed: boolean;
  }>({
    firstName: user.untrusted_metadata.firstName ?? "",
    lastName: user.untrusted_metadata.lastName ?? "",
    avatarUrl:
      user.untrusted_metadata.avatarUrl ?? getGravatarUrl(user.email_address),
    emailSubscribed: user.untrusted_metadata.emailSubscribed ?? false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "error" | "success";
    message: string;
  }>();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage(undefined);
    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/organization/${organization.organization_id}/members/${user.member_id}`,
        {
          method: "POST",
          body: JSON.stringify(updatedUser),
          headers: { "content-type": "application/json" },
        }
      );
      if (!res.ok) {
        const data = res.headers
          .get("content-type")
          ?.includes("application/json")
          ? await res.json()
          : null;
        throw new Error(data & data.message ? data.message : res.statusText);
      } else {
        setMessage({
          type: "success",
          message: "User info updated successfully.",
        });
      }
    } catch (error) {
      setMessage({ type: "error", message: (error as Error).message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout
      footerMenus={footer.menus}
      headerLogo={header.logo}
      headerMenus={header.menus}
      user={user}
      organization={organization}
    >
      <div className="flex w-full">
        <div className="w-full flex my-12 justify-center">
          <div className="w-4/12">
            <Link
              className="border w-max flex items-center h-max gap-2 border-indigo-700 hover:bg-indigo-100 text-indigo-700 text-sm px-4 py-1 transition-colors font-semibold rounded"
              href={`/${organization.organization_slug}/dashboard`}
            >
              <IconArrowLongRight className="h-6 w-6 rotate-180" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <div className="w-4/12 flex flex-col gap-10">
            <h1 className="text-3xl font-medium">User Info</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="w-full flex gap-4">
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  value={updatedUser.firstName}
                  onChange={onChangeInput}
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  value={updatedUser.lastName}
                  onChange={onChangeInput}
                  required
                />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-20 w-20 object-cover flex-shrink-0 border"
                src={updatedUser.avatarUrl}
                alt={user.name}
              />
              <Input
                type="url"
                name="avatarUrl"
                id="avatarUrl"
                label="Avatar URL"
                value={
                  updatedUser.avatarUrl.includes("gravatar")
                    ? ""
                    : updatedUser.avatarUrl
                }
                onChange={onChangeInput}
              />
              <Checkbox
                checked={updatedUser.emailSubscribed}
                onChange={(e) =>
                  setUpdatedUser((prev) => ({
                    ...prev,
                    emailSubscribed: e.target.checked,
                  }))
                }
                name="emailSubscribed"
                id="emailSubscribed"
                label="Email updates subscription."
              />
              {message && (
                <p
                  className={`text-sm ${
                    message.type === "error" ? "text-red-600" : "text-green-700"
                  }`}
                >
                  {message.message}
                </p>
              )}
              <Button disabled={isLoading} type="submit">
                {isLoading ? <IconSpinner /> : "Update"}
              </Button>
            </form>
          </div>
          <div className="w-4/12"></div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withSession<
  Props & {
    header: { menus: HeaderMenu[]; logo: HeaderLogo };
    footer: { menus: FooterMenu[] };
  },
  { slug: string }
>(async (context: GetServerSidePropsContext) => {
  const { member } = useAuth(context);
  const org = await OrgService.findByID(member.organization_id);

  if (org === null) {
    return { redirect: { statusCode: 307, destination: `/login` } };
  }

  const [members, ssoConnections, header, footer] = await Promise.all([
    OrgService.findAllMembers(org.organization_id),
    SSOService.list(org.organization_id),
    getHeader(),
    getFooter(),
  ]);

  return {
    props: {
      header: {
        menus: header.menu,
        logo: header.logo.data.attributes,
      },
      footer: {
        menus: footer.menus,
      },
      organization: org,
      user: member,
      members,
      saml_connections: ssoConnections.saml_connections ?? [],
      oidc_connections: ssoConnections.oidc_connections ?? [],
    },
  };
});
