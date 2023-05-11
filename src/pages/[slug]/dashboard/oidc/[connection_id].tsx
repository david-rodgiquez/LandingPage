import { OrgService } from "../../../../lib/orgService";
import { SSOService } from "../../../../lib/ssoService";
import React, { BaseSyntheticEvent, FormEventHandler, useRef } from "react";
import { updateOidcSSOConn } from "../../../../lib/api";
import { useRouter } from "next/router";
import { formatSSOStartURL, OIDCConnection } from "../../../../lib/loadStytch";
import { useAuth, withSession } from "../../../../lib/sessionService";
import Link from "next/link";
import { getFooter, getHeader } from "@/services/header";
import Layout from "@/components/Layout/Layout";
import type { Member, Organization } from "stytch";
import type { HeaderMenu } from "@/components/Layout/Header";
import type { StrapiMedia } from "@/types";
import type { FooterMenu } from "@/components/Layout/Footer";
import Input from "@/components/Input";

type Props = {
  connection: OIDCConnection;
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
  user,
  organization,
  header,
  footer,
}: Props) {
  const router = useRouter();
  const panelContainerRef = useRef<HTMLDivElement>(null);

  // @ts-ignore
  const urlSectionClick = (e) => {
    e.preventDefault();
    const panelEl = panelContainerRef.current;
    if (!panelEl) return;
    panelEl.style.display = panelEl.style.display === "flex" ? "none" : "flex";
  };

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    await updateOidcSSOConn({
      connection_id: connection.connection_id,
      display_name: data.get("display_name") as string,
      client_id: data.get("client_id") as string,
      client_secret: data.get("client_secret") as string,
      issuer: data.get("issuer") as string,
      authorization_url: data.get("authorization_url") as string,
      token_url: data.get("token_url") as string,
      userinfo_url: data.get("userinfo_url") as string,
      jwks_url: data.get("jwks_url") as string,
    });

    // Force a reload to refresh the conn list
    await router.replace(router.asPath);
  };

  return (
    <Layout
      footerMenus={footer.menus}
      headerLogo={header.logo}
      headerMenus={header.menus}
      organization={organization}
      user={user}
    >
      <div className="w-full flex py-20 flex-col gap-6 max-w-3xl mx-auto">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Edit OIDC Connection</h1>
          <div className="w-full flex gap-6">
            <Input
              type="text"
              name="display_name"
              id="display_name"
              defaultValue={connection.display_name}
              disabled
              label="Display Name"
            />
            <Input
              type="text"
              name="status"
              id="status"
              disabled
              defaultValue={connection.status}
              label="Status"
            />
          </div>
          <Input
            type="text"
            name="connection_id"
            id="connection_id"
            disabled
            defaultValue={connection.connection_id}
            label="Connection ID"
          />
          <Input
            type="url"
            name="redirect_url"
            id="redirect_url"
            disabled
            defaultValue={connection.redirect_url}
            label="Redirect URL"
          />
          <div className="w-full flex gap-6">
            <Input
              type="text"
              name="client_id"
              id="client_id"
              defaultValue={connection.client_id}
              label="Client ID"
              placeholder="Client ID"
            />
            <Input
              type="text"
              name="client_secret"
              id="client_secret"
              defaultValue={connection.client_secret}
              label="Client Secret"
              placeholder="Client Secret"
            />
          </div>
          <Input
            type="url"
            name="issuer"
            id="issuer"
            defaultValue={connection.issuer}
            label="Issuer URL"
          />
          <hr />
          <p>
            If you provide a valid Issuer URL using an IDP that supports a
            well-known configuration page, these endpoints will be
            auto-populated.
          </p>
          <button
            type="button"
            className="px-4 py-1 rounded-md text-sm font-medium flex gap-2 w-max mx-auto bg-indigo-100 text-indigo-900 hover:bg-indigo-200 transition-colors"
            onClick={urlSectionClick}
          >
            <span>Endpoints</span>
            <span>
              <b>+</b>
            </span>
          </button>
          <div
            ref={panelContainerRef}
            style={{ display: "none" }}
            className="w-full flex flex-col gap-6"
          >
            <div className="w-full flex gap-6">
              <Input
                defaultValue={connection.authorization_url}
                id="authorization_url"
                name="authorization_url"
                label="Authorization URL"
                placeholder="Authorization URL"
              />
              <Input
                defaultValue={connection.token_url}
                id="token_url"
                name="token_url"
                label="Token URL"
                placeholder="Token URL"
              />
            </div>
            <div className="w-full flex gap-6">
              <Input
                defaultValue={connection.userinfo_url}
                id="userinfo_url"
                name="userinfo_url"
                label="User Info URL"
                placeholder="User Info URL"
              />
              <Input
                defaultValue={connection.jwks_url}
                id="jwks_url"
                name="jwks_url"
                label="Jwks URL"
                placeholder="Jwks URL"
              />
            </div>
          </div>
          <button
            className="bg-indigo-600  disabled:cursor-not-allowed disabled:bg-indigo-500 flex items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white text-sm px-6 py-2 rounded"
            type="submit"
          >
            Save
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

  const connection = await SSOService.list(org.organization_id).then((res) => {
    return res.oidc_connections.find(
      (conn) => conn.connection_id === connection_id
    );
  });

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
