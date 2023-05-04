import { STRAPI_BASE_URL } from "@/config";
import axios from "axios";

const strapiFetcher = axios.create({
  baseURL: `${STRAPI_BASE_URL}/api`,
});

export default strapiFetcher;
