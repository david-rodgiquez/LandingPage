import Button from "@/components/Button";
import Checkbox from "@/components/Checbox";
import Input from "@/components/Input";
import type { FooterMenu } from "@/components/Layout/Footer";
import { HeaderLogo, HeaderMenu } from "@/components/Layout/Header";
import Layout from "@/components/Layout/Layout";
import IconArrowLongRight from "@/components/icons/IconArrowLongRight";
import IconSpinner from "@/components/icons/IconSpinner";
import { getGravatarUrl } from "@/lib/gravatar";
import { OrgService } from "@/lib/orgService";
import { useAuth, withSession } from "@/lib/sessionService";
import { getFooter, getHeader } from "@/services/header";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import type { Member, Organization } from "stytch";

type Props = {
  organization: Organization;
  user: Member;
};

export default function SettingsPage({
  organization,
  user,
  header,
  footer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [updatedOrganization, setUpdatedOrganization] = useState<{
    organization_name: string;
    email_allowed_domains: string;
    organization_logo_url: string;
    wordmark_logo_url: string;
  }>({
    organization_name: organization.organization_name,
    email_allowed_domains: organization.email_allowed_domains.join(",") ?? "",
    organization_logo_url: organization.organization_logo_url,
    wordmark_logo_url: organization.trusted_metadata.wordmark_logo_url ?? "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "error" | "success";
    message: string;
  }>();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedOrganization((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage(undefined);
    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/organization/${organization.organization_id}`,
        {
          method: "POST",
          body: JSON.stringify(updatedOrganization),
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
          message: "Organization info updated successfully.",
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
      organization={organization}
      user={user}
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
            <h1 className="text-3xl font-medium">Organization Info</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <Input
                type="text"
                name="organization_name"
                id="organization_name"
                label="Organization Name"
                value={updatedOrganization.organization_name}
                onChange={onChangeInput}
                required
              />
              <Input
                type="text"
                name="email_allowed_domains"
                id="email_allowed_domains"
                label="Allowed Domains"
                placeholder="acme.com,acme.io,acme.dev"
                value={updatedOrganization.email_allowed_domains}
                onChange={onChangeInput}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-20 w-20 object-cover flex-shrink-0 border"
                src={
                  updatedOrganization.organization_logo_url ||
                  "/img/placeholder.jpg"
                }
                alt={updatedOrganization.organization_name}
              />
              <Input
                type="url"
                name="organization_logo_url"
                id="organization_logo_url"
                label="Square Logo URL"
                value={updatedOrganization.organization_logo_url}
                onChange={onChangeInput}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-20 w-full p-2 object-contain flex-shrink-0 border"
                src={
                  updatedOrganization.wordmark_logo_url ||
                  "/img/wordmark-logo.png"
                }
                alt={updatedOrganization.organization_name}
              />
              <Input
                type="url"
                name="wordmark_logo_url"
                id="wordmark_logo_url"
                label="Wordmark Logo URL"
                value={updatedOrganization.wordmark_logo_url}
                onChange={onChangeInput}
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

  const [header, footer] = await Promise.all([getHeader(), getFooter()]);

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
    },
  };
});
