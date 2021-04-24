import axios from "axios";
import { setInterceptors } from "./common/interceptors";

// API 설정 공통화
function createAxiosService() {
  const axiosService = axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });

  return setInterceptors(axiosService);
}

const axiosService = createAxiosService();

const register = data => {
  return axiosService.post("members/new", data);
};

const login = data => {
  return axiosService.post("members/login", data, { withCredentials: true });
};

export default { register, login };
