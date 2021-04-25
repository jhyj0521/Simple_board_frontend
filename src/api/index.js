import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createAxiosService() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });
}

function createAxiosServiceWithAuth() {
  const axiosService = axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });

  return setInterceptors(axiosService);
}

export const axiosService = createAxiosService();
export const axiosServiceWithAuth = createAxiosServiceWithAuth();
