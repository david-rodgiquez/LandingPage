import axios from "axios";

const strapiFetcher = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/api`,
});

export default strapiFetcher;
