import { markdownToHTML } from "@/lib/markdown";
import { StrapiMedia, StrapiResponseBody } from "@/types";
import strapiFetcher from "@/utils/strapiFetcher";

type Customer = {
  id: number;
  attributes: {
    name: string;
    body: string;
    featuredOnLandingPage: boolean;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: {
      data: StrapiMedia;
    };
    thumbnail: {
      data: StrapiMedia;
    };
    author: {
      id: number;
      name: string;
      url: string;
      avatar: {
        data: StrapiMedia;
      };
    };
  };
};

export async function getCustomers() {
  const params = new URLSearchParams();

  params.append("populate", "thumbnail");
  params.append("populate", "logo");
  params.append("populate", "author");
  params.append("populate", "author.avatar");
  params.append("populate", "tags");

  const res = await strapiFetcher.get<StrapiResponseBody<Customer[]>>(
    "/customers",
    { params: params }
  );

  return res.data;
}

export async function getCustomerBySlug(slug: string) {
  const params = new URLSearchParams();

  params.append("populate", "thumbnail");
  params.append("populate", "logo");
  params.append("populate", "author");
  params.append("populate", "author.avatar");
  params.append("populate", "tags");
  params.append("filters[slug][$eq]", slug);

  const res = await strapiFetcher.get<StrapiResponseBody<Customer[]>>(
    `/customers`,
    {
      params: params,
    }
  );

  const changelog = res.data.data[0];
  if (!changelog) return;

  return {
    ...changelog.attributes,
    body: markdownToHTML(changelog.attributes.body),
  };
}
