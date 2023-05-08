import { markdownToHTML } from "@/lib/markdown";
import { StrapiMedia, StrapiResponseBody } from "@/types";
import strapiFetcher from "@/utils/strapiFetcher";

type Tag = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

type Changelog = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
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
    tags: {
      data: Tag[];
    };
  };
};

export async function getChangelogs() {
  const params = new URLSearchParams();

  params.append("populate", "thumbnail");
  params.append("populate", "author");
  params.append("populate", "author.avatar");
  params.append("populate", "tags");

  const res = await strapiFetcher.get<StrapiResponseBody<Changelog[]>>(
    "/changelogs",
    { params: params }
  );

  return res.data;
}

export async function getChangelogBySlug(slug: string) {
  const params = new URLSearchParams();

  params.append("populate", "thumbnail");
  params.append("populate", "author");
  params.append("populate", "author.avatar");
  params.append("populate", "tags");
  params.append("filters[slug][$eq]", slug);

  const res = await strapiFetcher.get<StrapiResponseBody<Changelog[]>>(
    `/changelogs`,
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
