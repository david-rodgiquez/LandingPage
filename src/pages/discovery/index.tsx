import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import loadStytch, { DiscoveredOrganizations } from "../../lib/loadStytch";
import { getDiscoverySessionData } from "../../lib/sessionService";
import { getFooter, getHeader } from "@/services/header";
import Layout from "@/components/Layout/Layout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import IconArrowLongRight from "@/components/icons/IconArrowLongRight";

type Props = {
  discovered_organizations: DiscoveredOrganizations;
};

const DiscoveredOrganizationsList = ({ discovered_organizations }: Props) => {
  const formatMembership = ({
    membership,
    organization,
  }: Pick<DiscoveredOrganizations[0], "membership" | "organization">) => {
    if (membership.type === "pending_member") {
      return `Join ${organization.organization_name}`;
    }
    if (membership.type === "eligible_to_join_by_email_domain") {
      return `Join ${organization.organization_name} via your ${membership.details.domain} email`;
    }
    if (membership.type === "invited_member") {
      return `Accept Invite for ${organization.organization_name}`;
    }
    return `Continue to ${organization.organization_name}`;
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col gap-1">
        <h3 className="text-xl font-bold">Your Organizations</h3>
        {!discovered_organizations.length ? (
          <p className="text-sm text-gray-600">No existing organizations.</p>
        ) : (
          <p className="text-sm text-gray-600">Select an organization.</p>
        )}
      </div>
      {discovered_organizations.length ? (
        <div className="w-full flex flex-col gap-4">
          {discovered_organizations.map(({ organization, membership }) => (
            <div
              key={organization.organization_id}
              className="w-full flex gap-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-20 w-20 object-cover flex-shrink-0"
                src={
                  organization.organization_logo_url || "/img/placeholder.jpg"
                }
                alt={organization.organization_name}
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold">
                  {organization.organization_name}
                </h4>
                <Link
                  className="bg-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-500 text-xs font-semibold flex gap-1 items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white px-4 py-1 rounded"
                  href={`/api/discovery/${organization.organization_id}`}
                >
                  <span>{formatMembership({ organization, membership })}</span>
                  <IconArrowLongRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {/* <ul>
        {discovered_organizations.map(({ organization, membership }) => (
          <li key={organization.organization_id}>
            <Link href={`/api/discovery/${organization.organization_id}`}>
              <span>{formatMembership({ organization, membership })}</span>
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

const CreateNewOrganization = () => {
  const [organization, setOrganization] = useState({
    organization_name: "",
    email_allowed_domains: "",
  });

  const isDisabled = organization.organization_name.length < 3;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganization((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-xl font-bold">Create a new Organization</h3>
      <form
        method="POST"
        action="/api/discovery/create"
        className="flex flex-col gap-4 w-full items-stretch"
      >
        <Input
          name="organization_name"
          id="organization_name"
          label="Organization Name"
          placeholder="ACME INC."
          required
          value={organization.organization_name}
          onChange={onInputChange}
        />
        <div className="w-full flex flex-col gap-2 items-start">
          <Input
            name="email_allowed_domains"
            id="email_allowed_domains"
            label="Allowed Domains"
            placeholder="acme.com"
            value={organization.email_allowed_domains}
            onChange={onInputChange}
          />
          <p className="text-xs text-gray-500 text-left">
            Anyone with email addresses at these domains can automatically join
            your organization.
          </p>
        </div>
        <Button type="submit" disabled={isDisabled}>
          Create Organization
        </Button>
      </form>
    </div>
  );
};

export default function Discovery({
  discovered_organizations,
  header,
  footer,
  canCreateOrganization,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout
      footerMenus={footer.menus}
      headerLogo={header.logo}
      headerMenus={header.menus}
    >
      <div className="w-full flex justify-center ">
        <div className="my-24 max-w-xl w-full p-8 flex flex-col gap-6 rounded-lg">
          <h1 className="text-2xl font-bold">Welcome To Rollup</h1>
          <DiscoveredOrganizationsList
            discovered_organizations={discovered_organizations}
          />
          {canCreateOrganization && <CreateNewOrganization />}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const discoverySessionData = getDiscoverySessionData(
    context.req,
    context.res
  );
  if (discoverySessionData.error) {
    return { redirect: { statusCode: 307, destination: `/login` } };
  }
  const intermediateSession = context.req.cookies["intermediate_session"];

  const { discovered_organizations, request_id } =
    await loadStytch().discovery.organizations.list({
      intermediate_session_token: discoverySessionData.intermediateSession,
      session_jwt: discoverySessionData.sessionJWT,
    });

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
      discovered_organizations,
      canCreateOrganization: Boolean(intermediateSession),
    },
  };
};
