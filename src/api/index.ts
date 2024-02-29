import axios from "axios";
import authApi from "./auth";
import dealsApi from "./deals";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 30_000,
});

const api = {
  auth: authApi,
  deals: dealsApi,
};

export default api;
