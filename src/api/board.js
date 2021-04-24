import axios from "axios";
import { setInterceptors } from "./common/interceptors";

// API 설정 공통화
function createAxiosService() {
  const axiosService = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true
  });

  return setInterceptors(axiosService);
}

const axiosService = createAxiosService();

const getBoardList = data => {
  return axiosService.get("boards/lists", data);
};

export default { getBoardList };
