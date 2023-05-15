import strapiFetcher from "@/utils/strapiFetcher";

type CreateStrapiRollupUserBody = {
  email: string;
  firstName: string;
  lastName?: string;
  organization?: string;
  work?: string;
  tool?: string;
};

export default function createStrapiRollupUser(
  user: CreateStrapiRollupUserBody
) {
  return strapiFetcher.post("/rollup-users", { data: user });
}
