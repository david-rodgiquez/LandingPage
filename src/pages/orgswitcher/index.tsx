import Link from "next/link";
import loadStytch, {
  Member,
  DiscoveredOrganizations,
} from "../../lib/loadStytch";
import {
  getDiscoverySessionData,
  useAuth,
  withSession,
} from "../../lib/sessionService";
import { getFooter, getHeader } from "@/services/header";
import { HeaderLogo, HeaderMenu } from "@/components/Layout/Header";
import { FooterMenu } from "@/components/Layout/Footer";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout/Layout";

type Props = {
  discovered_organizations: DiscoveredOrganizations;
  user: Member;
};

const OrgSwitcherList = ({ discovered_organizations, user }: Props) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10 my-10">
        <h3 className="text-3xl font-bold">Your Organizations</h3>
        <ul className="list-disc pl-8">
          {discovered_organizations.map(({ organization }) => (
            <li key={organization.organization_id}>
              <Link
                className="underline underline-offset-2 decoration-indigo-600 decoration-2 font-semibold hover:text-indigo-600 transition-colors"
                href={`/api/discovery/${organization.organization_id}`}
              >
                <span>{organization.organization_name}</span>
                {organization.organization_id === user.organization_id && (
                  <span>&nbsp;(Active)</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function OrgSwitcher({
  header,
  footer,
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout
      footerMenus={footer.menus}
      headerLogo={header.logo}
      headerMenus={header.menus}
    >
      <div className="card">
        <OrgSwitcherList {...props} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = withSession<
  Props & {
    header: { menus: HeaderMenu[]; logo: HeaderLogo };
    footer: { menus: FooterMenu[] };
  }
>(async (context: GetServerSidePropsContext) => {
  const { member } = useAuth(context);
  const discoverySessionData = getDiscoverySessionData(
    context.req,
    context.res
  );
  if (discoverySessionData.error) {
    console.log("No session tokens found...");
    return { redirect: { statusCode: 307, destination: `/login` } };
  }

  const [header, footer, { discovered_organizations }] = await Promise.all([
    getHeader(),
    getFooter(),
    await loadStytch().discovery.organizations.list({
      intermediate_session_token: discoverySessionData.intermediateSession,
      session_jwt: discoverySessionData.sessionJWT,
    }),
  ]);

  return {
    props: {
      user: member,
      discovered_organizations,
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
