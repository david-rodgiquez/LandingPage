import { OrgService } from "../../../../lib/orgService";
import { SSOService } from "../../../../lib/ssoService";
import React, {
  DetailedHTMLProps,
  FormEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { updateSamlSSOConn } from "../../../../lib/api";
import { useRouter } from "next/router";
import { formatSSOStartURL, SAMLConnection } from "../../../../lib/loadStytch";
import {
  getOptionalAuthSession,
  useAuth,
  withSession,
} from "../../../../lib/sessionService";
import Link from "next/link";
import type { Member, Organization } from "stytch";
import Layout from "@/components/Layout/Layout";
import { getFooter, getHeader } from "@/services/header";
import { HeaderMenu } from "@/components/Layout/Header";
import { FooterMenu } from "@/components/Layout/Footer";
import { StrapiMedia } from "@/types";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

type Props = {
  connection: SAMLConnection;
  organization: Organization;
  user: Member;
  header: {
    menus: HeaderMenu[];
    logo: StrapiMedia["attributes"];
  };
  footer: {
    menus: FooterMenu[];
  };
};

function ConnectionEditPage({
  connection,
  organization,
  user,
  header,
  footer,
}: Props) {
  const router = useRouter();

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    await updateSamlSSOConn({
      certificate: data.get("certificate") as string,
      connection_id: connection.connection_id,
      display_name: data.get("display_name") as string,
      email_attribute: data.get("email_attribute") as string,
      first_name_attribute: data.get("first_name_attribute") as string,
      idp_entity_id: data.get("idp_entity_id") as string,
      idp_sso_url: data.get("idp_sso_url") as string,
      last_name_attribute: data.get("last_name_attribute") as string,
    });

    // Force a reload to refresh the conn list
    await router.replace(router.asPath);
  };

  return (
    <Layout
      organization={organization}
      user={user}
      headerMenus={header.menus}
      footerMenus={footer.menus}
      headerLogo={header.logo}
    >
      <div className="w-full flex py-20 flex-col gap-6 max-w-3xl mx-auto">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Edit SAML Connection</h1>
          <div className="w-full flex gap-6">
            <Input
              type="text"
              name="display_name"
              id="display_name"
              disabled
              value={connection.display_name}
              label="Display Name"
            />
            <Input
              type="text"
              name="status"
              id="status"
              disabled
              value={connection.status}
              label="Status"
            />
          </div>
          <Input
            type="url"
            name="acs_url"
            id="acs_url"
            disabled
            value={connection.acs_url}
            label="ACS URL"
          />
          <Input
            type="url"
            name="audience_uri"
            id="audience_uri"
            disabled
            value={connection.audience_uri}
            label="Audience URI"
          />
          <div className="w-full flex gap-6">
            <Input
              type="url"
              name="idp_sso_url"
              id="idp_sso_url"
              defaultValue={connection.idp_sso_url}
              label="SSO URL"
              placeholder="https://idp.com/sso/start"
            />
            <Input
              type="url"
              name="idp_entity_id"
              id="idp_entity_id"
              defaultValue={connection.idp_entity_id}
              label="IDP Entity ID"
              placeholder="https://idp.com/sso/start"
            />
          </div>
          <div className="w-full grid grid-cols-3 gap-6">
            <Input
              type="text"
              name="email_attribute"
              id="email_attribute"
              defaultValue={connection.attribute_mapping["email"]}
              label="Email Attribute"
              placeholder="NameID"
            />
            <Input
              type="text"
              name="first_name_attribute"
              id="first_name_attribute"
              defaultValue={connection.attribute_mapping["first_name"]}
              label="First Name Attribute"
              placeholder="firstName"
            />
            <Input
              type="text"
              name="last_name_attribute"
              id="last_name_attribute"
              defaultValue={connection.attribute_mapping["last_name"]}
              label="Last Name Attribute"
              placeholder="lastName"
            />
          </div>
          <Textarea
            id="certificate"
            name="certificate"
            defaultValue={connection.verification_certificates[0]?.certificate}
            label="Signing Certificate"
            placeholder="-------BEGIN ------"
            rows={5}
          />
          <button
            type="submit"
            className="bg-indigo-600  disabled:cursor-not-allowed disabled:bg-indigo-500 flex items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white text-sm px-6 py-2 rounded"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-between w-full items-center">
          <Link
            className="underline decoration-2 decoration-indigo-600 underline-offset-2 hover:text-indigo-600 transition-colors"
            href={`/${router.query.slug}/dashboard`}
          >
            Back
          </Link>
          <a
            className="underline decoration-2 decoration-indigo-600 underline-offset-2 hover:text-indigo-600 transition-colors"
            href={formatSSOStartURL(connection.connection_id)}
          >
            Test Connection
          </a>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withSession<
  Props,
  { slug: string; connection_id: string }
>(async (context) => {
  const connection_id = context.params!["connection_id"];
  const { member } = useAuth(context);

  const org = await OrgService.findByID(member.organization_id);
  if (org === null) {
    return { redirect: { statusCode: 307, destination: `/login` } };
  }

  const connection = await SSOService.list(org.organization_id).then((res) =>
    res.saml_connections.find((conn) => conn.connection_id === connection_id)
  );

  if (!connection) {
    return {
      redirect: {
        statusCode: 307,
        destination: `/${org.organization_slug}/dashboard`,
      },
    };
  }

  const [header, footer] = await Promise.all([getHeader(), getFooter()]);

  return {
    props: {
      connection,
      organization: org,
      user: member,
      header: {
        menus: header.menu,
        logo: header.logo.data.attributes,
      },
      footer: {
        menus: footer.menus,
      },
    },
  };
});

export default ConnectionEditPage;
