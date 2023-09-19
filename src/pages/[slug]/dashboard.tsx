import React, {
  DetailedHTMLProps,
  FormEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { OrgService } from "../../lib/orgService";
import {
  createOidcSSOConn,
  createSamlSSOConn,
  deleteMember,
  invite,
} from "../../lib/api";
import { SSOService } from "../../lib/ssoService";
import { useAuth, withSession } from "../../lib/sessionService";
import {
  Member,
  OIDCConnection,
  Organization,
  SAMLConnection,
} from "../../lib/loadStytch";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";
import { getFooter, getHeader } from "@/services/header";
import { HeaderLogo, HeaderMenu } from "@/components/Layout/Header";
import { FooterMenu } from "@/components/Layout/Footer";
import ClientOnly from "@/components/ClientOnly";
import IconArrowLongRight from "@/components/icons/IconArrowLongRight";
import { getGravatarUrl } from "@/lib/gravatar";

type Props = {
  organization: Organization;
  user: Member;
  members: Member[];
  saml_connections: SAMLConnection[];
  oidc_connections: OIDCConnection[];
};

const isValidEmail = (emailValue: string) => {
  // Overly simple email address regex
  const regex = /\S+@\S+\.\S+/;
  return regex.test(emailValue);
};

const isAdmin = (member: Member) => !!member.trusted_metadata.admin;

const SSO_METHOD = {
  SAML: "SAML",
  OIDC: "OIDC",
};

const MemberRow = ({ member, user }: { member: Member; user: Member }) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const doDelete: MouseEventHandler = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    await deleteMember(member.member_id);
    // Force a reload to refresh the user list
    router.replace(router.asPath);
    // TODO: Success toast?
  };

  const canDelete =
    /* Do not let members delete themselves! */
    member.member_id !== user.member_id &&
    /* Only admins can delete! */
    isAdmin(user);

  const deleteButton = (
    <button disabled={isDisabled} onClick={doDelete}>
      Delete User
    </button>
  );

  return (
    <li>
      [{isAdmin(member) ? "admin" : "member"}] {member.email_address} (
      {member.status}){/* Do not let members delete themselves! */}
      {canDelete ? deleteButton : null}
    </li>
  );
};

const MemberList = ({
  members,
  user,
  organization,
}: Pick<Props, "members" | "user" | "organization">) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!isValidEmail(email));
  }, [email]);

  const onInviteSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    // Disable button right away to prevent sending emails twice
    if (isDisabled) {
      return;
    } else {
      setIsDisabled(true);
    }
    await invite(email);
    // Force a reload to refresh the user list
    router.replace(router.asPath);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-full">
        <h2 className="font-semibold text-xl">Members</h2>
        <ul>
          {members.map((member) => (
            <MemberRow key={member.member_id} member={member} user={user} />
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h3 className="font-semibold text-xl">Invite New Member</h3>
        <form
          onSubmit={onInviteSubmit}
          className="flex flex-col max-w-lg gap-2"
        >
          <input
            placeholder={`your-coworker@${
              organization.email_allowed_domains[0] ?? "example.com"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="px-4 outline-none py-2 border rounded-lg w-full"
          />
          <button
            className="bg-indigo-600 w-full hover:bg-indigo-700 transition-colors text-white py-2 rounded-lg font-medium disabled:bg-indigo-400"
            disabled={isDisabled}
            type="submit"
          >
            Invite
          </button>
        </form>
      </div>
    </div>
  );
};

const IDPList = ({
  user,
  saml_connections,
  oidc_connections,
}: Pick<Props, "user" | "saml_connections" | "oidc_connections">) => {
  const [idpNameSAML, setIdpNameSAML] = useState("");
  const [idpNameOIDC, setIdpNameOIDC] = useState("");
  const [ssoMethod, setSsoMethod] = useState(SSO_METHOD.SAML);
  const router = useRouter();

  const onSamlCreate: FormEventHandler = async (e) => {
    e.preventDefault();
    const res = await createSamlSSOConn(idpNameSAML);
    if (res.status !== 200) {
      alert("Error creating connection");
      return;
    }
    const conn = await res.json();
    await router.push(
      `/${router.query.slug}/dashboard/saml/${conn.connection_id}`
    );
  };

  const onOidcCreate: FormEventHandler = async (e) => {
    e.preventDefault();
    const res = await createOidcSSOConn(idpNameOIDC);
    if (res.status !== 200) {
      alert("Error creating connection");
      return;
    }
    const conn = await res.json();
    await router.push(
      `/${router.query.slug}/dashboard/oidc/${conn.connection_id}`
    );
  };

  const onSsoMethodChange: FormEventHandler = async (e) => {
    // @ts-ignore
    setIsSaml(e.target["value"] == "SAML");
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex w-full flex-col gap-2">
        <h2 className="font-semibold text-xl">SSO Connections</h2>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">SAML</h3>
          {saml_connections.length === 0 && <p>No connections configured.</p>}
          <ul>
            {saml_connections.map((conn) => (
              <li key={conn.connection_id}>
                <Link
                  href={`/${router.query.slug}/dashboard/saml/${conn.connection_id}`}
                >
                  <span>
                    {conn.display_name} ({conn.status})
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">OIDC</h3>
          {oidc_connections.length === 0 && <p>No connections configured.</p>}
          <ul>
            {oidc_connections.map((conn) => (
              <li key={conn.connection_id}>
                <Link
                  href={`/${router.query.slug}/dashboard/oidc/${conn.connection_id}`}
                >
                  <span>
                    {conn.display_name} ({conn.status})
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*Only admins can create new SSO Connection*/}
      {isAdmin(user) && (
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Create a new SSO Connection</h3>
          <form
            onSubmit={
              ssoMethod === SSO_METHOD.SAML ? onSamlCreate : onOidcCreate
            }
            className="flex flex-col max-w-lg gap-2"
          >
            <input
              type="text"
              placeholder={
                ssoMethod === SSO_METHOD.SAML
                  ? `SAML Display Name`
                  : `OIDC Display Name`
              }
              value={ssoMethod === SSO_METHOD.SAML ? idpNameSAML : idpNameOIDC}
              onChange={
                ssoMethod === SSO_METHOD.SAML
                  ? (e) => setIdpNameSAML(e.target.value)
                  : (e) => setIdpNameOIDC(e.target.value)
              }
              className="px-4 outline-none py-2 border rounded-lg w-full"
            />
            <div className="flex gap-8">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="saml"
                  name="sso_method"
                  onChange={(e) => setSsoMethod(SSO_METHOD.SAML)}
                  checked={ssoMethod === SSO_METHOD.SAML}
                />
                <label htmlFor="saml">SAML</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="oidc"
                  onChange={(e) => setSsoMethod(SSO_METHOD.OIDC)}
                  checked={ssoMethod === SSO_METHOD.OIDC}
                />
                <label htmlFor="oidc">OIDC</label>
              </div>
            </div>
            <button
              className="bg-indigo-600 w-full hover:bg-indigo-700 transition-colors text-white py-2 rounded-lg font-medium disabled:bg-indigo-400"
              disabled={
                ssoMethod === SSO_METHOD.SAML
                  ? idpNameSAML.length < 3
                  : idpNameOIDC.length < 3
              }
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

function DetailLine({ title, value }: { title: string; value: ReactNode }) {
  return (
    <div className="w-full flex gap-6 ">
      <p className="font-semibold w-4/12">{title}</p>
      <p className="w-8/12">{value}</p>
    </div>
  );
}

function Checkbox({
  label,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string }) {
  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" {...props} />
      <label className="font-medium" htmlFor={props.id}>
        {label}
      </label>
    </div>
  );
}

export default function Dashboard({
  organization,
  user,
  members,
  saml_connections,
  oidc_connections,
  header,
  footer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout
      footerMenus={footer.menus}
      headerLogo={header.logo}
      headerMenus={header.menus}
      organization={organization}
      user={user}
    >
      <div className="flex w-full max-w-4xl mx-auto">
        <div className="w-full my-8 flex flex-col gap-16">
          <p className="text-3xl font-medium ">
            Welcome to Rollup,{" "}
            {user.untrusted_metadata.firstName || user.email_address}
          </p>
          <div className="w-full flex flex-col gap-12">
            {/* track */}
            <div className="w-full flex gap-8">
              <div className="max-w-xs w-full">
                <p className="text-xl font-bold">Track</p>
                <p>
                  Tracks at Rollup represent rollup&apos;s tailored partnerships
                  and sales processes.
                </p>
              </div>
              <table className="border-2 text-left border-collapse h-max w-full">
                <tbody>
                  <tr className="divide-x-2">
                    <th className="px-4 py-1">Current Track</th>
                    <td className="px-4 py-1 ">
                      <span className="italic">Design partner Track</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* action items */}
            <div className="w-full flex gap-8">
              <div className="max-w-xs w-full">
                <p className="text-xl font-bold">Action Items</p>
                <p>
                  These are action items you can complete to get the ball
                  rolling at Rollup. Mark them as done as you go.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <table className="border-2 text-left border-collapse h-max w-full">
                  <tbody className="divide-y-2">
                    <tr className="divide-x-2">
                      <th className="px-4 py-1 w-80">
                        Explore the Landing Page
                      </th>
                      <td className="px-4 py-1 ">
                        <Checkbox label="todo" name="todo" id="todo" />
                      </td>
                      <td className="px-4 py-1 ">
                        <Link href="#" className="text-indigo-600 font-medium">
                          LINK
                        </Link>
                      </td>
                    </tr>
                    <tr className="divide-x-2">
                      <th className="px-4 py-1 w-80">Schedule a Sales Call</th>
                      <td className="px-4 py-1 ">
                        <Checkbox label="todo" name="todo_2" id="todo_2" />
                      </td>
                      <td className="px-4 py-1 ">
                        <Link href="#" className="text-indigo-600 font-medium">
                          LINK
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="border-2 text-left border-collapse h-max w-full">
                  <tbody className="divide-y-2">
                    <tr className="divide-x-2">
                      <th className="px-4 py-1 w-80">
                        Review Technical Buyer&apos;s Jurney
                      </th>
                      <td className="px-4 py-1 ">
                        <Checkbox label="DONE" name="done_3" id="done_3" />
                      </td>
                      <td className="px-4 py-1 ">
                        <Link href="#" className="text-indigo-600 font-medium">
                          LINK
                        </Link>
                      </td>
                    </tr>
                    <tr className="divide-x-2">
                      <th className="px-4 py-1 w-80">
                        Review Design Partner Journey
                      </th>
                      <td className="px-4 py-1 ">
                        <Checkbox label="DONE" name="done_4" id="done_4" />
                      </td>
                      <td className="px-4 py-1 ">
                        <Link href="#" className="text-indigo-600 font-medium">
                          LINK
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Deployments */}
            <div className="w-full flex gap-8">
              <div className="max-w-xs w-full">
                <p className="text-xl font-bold">Deployments</p>
              </div>
              <table className="border-2 text-left border-collapse h-max w-full">
                <tbody className="divide-y-2">
                  <tr className="divide-x-2">
                    <th className="px-4 py-1">Deployment Type</th>
                    <td className="px-4 py-1 ">DEMO-Cloud</td>
                  </tr>
                  <tr className="divide-x-2">
                    <th className="px-4 py-1">Host</th>
                    <td className="px-4 py-1 ">AWS US West</td>
                  </tr>
                  <tr className="divide-x-2">
                    <th className="px-4 py-1">URL</th>
                    <td className="px-4 py-1 ">app.rollup.ai</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* subscription */}
            <div className="w-full flex gap-8">
              <div className="max-w-xs w-full">
                <p className="text-xl font-bold">Subscriptions</p>
              </div>
              <table className="border-2 text-left border-collapse h-max w-full">
                <tbody className="divide-y-2">
                  <tr className="divide-x-2">
                    <th className="px-4 py-1">Subscription ID</th>
                    <td className="px-4 py-1 ">DEMO</td>
                  </tr>
                  <tr className="divide-x-2">
                    <th className="px-4 py-1">Status</th>
                    <td className="px-4 py-1 ">ACTIVE</td>
                  </tr>
                  <tr className="divide-x-2">
                    <th className="px-4 py-1">Expires</th>
                    <td className="px-4 py-1 ">
                      <ClientOnly>
                        {new Date().toLocaleString("en", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </ClientOnly>
                    </td>
                  </tr>
                  <tr className="divide-x-2">
                    <th className="px-4 py-1">Includes</th>
                    <td className="px-4 py-1 ">app.rollup.ai</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* User Info */}
            <div className="w-full flex gap-8">
              <div className="max-w-xs w-full flex flex-col gap-2">
                <p className="text-xl font-bold">User Info</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-20 w-20 object-cover flex-shrink-0 border"
                  src={
                    user.untrusted_metadata.avatarUrl ||
                    getGravatarUrl(user.email_address)
                  }
                  alt={user.name}
                />
              </div>
              <div className="flex w-full flex-col gap-4">
                <table className="border-2 text-left border-collapse h-max w-full">
                  <tbody className="divide-y-2">
                    <tr className="divide-x-2">
                      <th className="px-4 py-1">First Name</th>
                      <td className="px-4 py-1">
                        {user.untrusted_metadata.firstName || "-"}
                      </td>
                    </tr>
                    <tr className="divide-x-2">
                      <th className="px-4 py-1">Last Name</th>
                      <td className="px-4 py-1">
                        {user.untrusted_metadata.lastName || "-"}
                      </td>
                    </tr>
                    <tr className="divide-x-2">
                      <th className="px-4 py-1">Email</th>
                      <td className="px-4 py-1 ">
                        {user.email_address || "-"}
                      </td>
                    </tr>
                    <tr className="divide-x-2">
                      <th className="px-4 py-1">Email Updates</th>
                      <td className="px-4 py-1 ">
                        <Checkbox
                          defaultChecked={
                            user.untrusted_metadata.emailSubscribed
                          }
                          label="Subscribed"
                          id="subscription"
                          name="subscription"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  className="bg-indigo-600 w-max disabled:cursor-not-allowed disabled:bg-indigo-500 text-xs font-semibold flex gap-1 items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white px-4 py-1 rounded"
                  href={`/${organization.organization_slug}/members/${user.member_id}`}
                >
                  <span>Update user info</span>
                  <IconArrowLongRight />
                </Link>
              </div>
            </div>
            {/* Firm Info */}
            <div className="w-full flex gap-8">
              <div className="max-w-xs flex-shrink-0 w-full flex flex-col gap-2">
                <p className="text-xl font-bold">Firm Info</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-20 w-20 object-cover flex-shrink-0 border"
                  src={
                    organization.organization_logo_url || "/img/placeholder.jpg"
                  }
                  alt={user.name}
                />
              </div>
              <div className="flex w-full flex-col gap-4">
                <table
                  className="border-2 text-left table-fixed border-collapse h-max w-full text-ellipsis"
                  style={{ wordWrap: "break-word" }}
                >
                  <tbody className="divide-y-2">
                    <tr className="divide-x-2">
                      <th className="px-4 py-1">Name</th>
                      <td className="px-4 py-1">
                        {organization.organization_name}
                      </td>
                    </tr>
                    <tr className="divide-x-2">
                      <th className="px-4 py-1">Logo</th>
                      <td className="px-4 py-1">
                        {organization.organization_logo_url || "SET"}
                      </td>
                    </tr>
                    <tr className="divide-x-2">
                      <th className="px-4 py-1">Primary Domain</th>
                      <td className="px-4 py-1 ">
                        {organization.trusted_metadata.primaryDomain || "-"}
                      </td>
                    </tr>
                    <tr className="divide-x-2">
                      <th className="px-4 py-1">Allowed Domains</th>
                      <td className="px-4 py-1 ">
                        {organization.email_allowed_domains.join(", ") || "-"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  className="bg-indigo-600 w-max disabled:cursor-not-allowed disabled:bg-indigo-500 text-xs font-semibold flex gap-1 items-center justify-center flex-shrink-0 hover:bg-indigo-700 transition-colors text-white px-4 py-1 rounded"
                  href={`/${organization.organization_slug}/settings`}
                >
                  <span>Update firm info</span>
                  <IconArrowLongRight />
                </Link>
              </div>
            </div>
          </div>
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
