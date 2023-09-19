import loadStytch from "./loadStytch";

const stytch = loadStytch();

export const SSOService = {
  list: async function (organization_id: string) {
    return stytch.sso.get({ organization_id });
  },
  createSaml: async function (display_name: string, organization_id: string) {
    return stytch.sso.saml.create({
      organization_id,
      display_name,
    });
  },
  createOidc: async function (display_name: string, organization_id: string) {
    return stytch.sso.oidc.create({
      organization_id,
      display_name,
    });
  },
};
