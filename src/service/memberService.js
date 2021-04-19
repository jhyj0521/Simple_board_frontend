import axios from "axios";

// API 설정 공통화
const axiosService = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

const register = data => {
  return axiosService.post("members/new", data);
};

const login = data => {
  return axiosService.post("members/login", data, { withCredentials: true });
};

export default { register, login };
