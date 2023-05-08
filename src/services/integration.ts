import { markdownToHTML } from "@/lib/markdown";
import { StrapiMedia, StrapiResponseBody } from "@/types";
import strapiFetcher from "@/utils/strapiFetcher";

type Integration = {
  id: number;
  attributes: {
    title: string;
    body: string;
    featuredOnLandingPage: boolean;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
          subsectionTag: string;
          slug: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    };
  };
};

export async function getIntegrations() {
  const params = new URLSearchParams();

  params.append("populate", "thumbnail");
  params.append("populate", "author");
  params.append("populate", "author.avatar");
  params.append("populate", "category");

  const res = await strapiFetcher.get<StrapiResponseBody<Integration[]>>(
    "/integrations",
    { params: params }
  );

  return res.data;
}

export async function getIntegrationBySlug(slug: string) {
  const params = new URLSearchParams();

  params.append("populate", "thumbnail");
  params.append("populate", "author");
  params.append("populate", "author.avatar");
  params.append("populate", "category");
  params.append("filters[slug][$eq]", slug);

  const res = await strapiFetcher.get<StrapiResponseBody<Integration[]>>(
    "/integrations",
    { params: params }
  );

  const integration = res.data.data[0];
  if (!integration) return;

  return {
    ...integration.attributes,
    body: markdownToHTML(integration.attributes.body),
  };
}
