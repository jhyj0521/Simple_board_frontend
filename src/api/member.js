import { axiosService, axiosServiceWithAuth } from "./index";
import { deleteCookie } from "../utils/cookies";

const register = async data => {
  return await axiosService.post("members/new", data);
};

const login = async data => {
  return await axiosService.post("members/login", data, {
    withCredentials: true
  });
};

const getJwtInfo = async () => {
  try {
    return await axiosServiceWithAuth.post("jwt");
  } catch (error) {
    if (error.response.status === 401) {
      deleteCookie("jwt");
      alert("접속이 종료 되었습니다. 다시 로그인 하세요.");
      location.replace("/login");
    }
  }
};

export default { register, login, getJwtInfo };
