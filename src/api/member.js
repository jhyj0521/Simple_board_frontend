import { axiosService, axiosServiceWithAuth } from "./index";

const register = data => {
  return axiosService.post("members/new", data);
};

const login = data => {
  return axiosService.post("members/login", data, { withCredentials: true });
};

const getJwtInfo = () => {
  return axiosServiceWithAuth.post("jwt");
};

export default { register, login, getJwtInfo };
