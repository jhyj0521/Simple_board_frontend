import { axiosService } from "./index";

const register = data => {
  return axiosService.post("members/new", data);
};

const login = data => {
  return axiosService.post("members/login", data, { withCredentials: true });
};

export default { register, login };
