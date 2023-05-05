import React, { useState } from "react";
import Link from "next/link";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import loadStytch, { DiscoveredOrganizations } from "../../lib/loadStytch";
import { getDiscoverySessionData } from "../../lib/sessionService";
import { getFooter, getHeader } from "@/services/header";
import Layout from "@/components/Layout/Layout";

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
    <div className="w-full text-center flex items-center flex-col gap-4">
      <h3 className="text-xl font-bold">Your Organizations</h3>
      {discovered_organizations.length === 0 && (
        <p className="text-sm text-gray-600">No existing organizations.</p>
      )}
      <ul>
        {discovered_organizations.map(({ organization, membership }) => (
          <li key={organization.organization_id}>
            <Link href={`/api/discovery/${organization.organization_id}`}>
              <span>{formatMembership({ organization, membership })}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CreateNewOrganization = () => {
  const [orgName, setOrgName] = useState("");
  return (
    <div className="w-full text-center flex items-center flex-col gap-4">
      <h3>Or, create a new Organization</h3>
      <form
        method="POST"
        action="/api/discovery/create"
        className="flex flex-col gap-2 w-full items-start"
      >
        <label htmlFor="organization_name" className="text-sm font-semibold">
          Organization Name
        </label>
        <input
          id="organization_name"
          type={"text"}
          placeholder={`Foo Corp`}
          name="organization_name"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          className="px-4 outline-none py-2 border rounded-lg w-full"
        />
        <button
          className="bg-indigo-600 w-full hover:bg-indigo-700 transition-colors text-white py-2 rounded-lg font-medium disabled:bg-indigo-400"
          disabled={orgName.length < 3}
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default function Discovery({
  discovered_organizations,
  header,
  footer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout
      footerMenus={footer.menus}
      headerLogo={header.logo}
      headerMenus={header.menus}
    >
      <div className="w-full flex items-center justify-center ">
        <div className="my-24 max-w-xl w-full border p-8 rounded-lg">
          <DiscoveredOrganizationsList
            discovered_organizations={discovered_organizations}
          />
          <CreateNewOrganization />
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
    console.log("No session tokens found...");
    return { redirect: { statusCode: 307, destination: `/login` } };
  }

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
    },
  };
};
