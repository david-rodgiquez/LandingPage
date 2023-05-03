import strapiFetcher from "@/utils/strapiFetcher";

type Menu = { id: number; title: string; url: string };

type GetHeaderResponse = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      menu: Menu[];
      logo: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null | string;
            caption: null;
            width: number;
            height: number;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            createdAt: string;
            updatedAt: string;
          };
        };
      };
    };
  };
  meta: {};
};

type GetFooterResponse = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      menus: Menu[];
    };
  };
  meta: {};
};

export async function getHeader() {
  const params = new URLSearchParams();

  params.append("populate", "menu");
  params.append("populate", "logo");

  const res = await strapiFetcher.get<GetHeaderResponse>("/menu", {
    params: params,
  });

  return res.data.data.attributes;
}

export async function getFooter() {
  const params = new URLSearchParams();

  params.append("populate", "menus");

  const res = await strapiFetcher.get<GetFooterResponse>("/footer", {
    params: params,
  });

  return res.data.data.attributes;
}
