type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiResponseBody<TData = unknown> = {
  data: TData;
  meta: {
    pagination: TData extends Array<unknown> ? Pagination : null;
  };
};

export type StrapiMedia = {
  id: number;
  attributes: {
    name: string;
    url: string;
    alternativeText: null | string;
    caption: null | string;
    ext: string;
    width: number;
    height: number;
  };
};
