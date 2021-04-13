import axios from "axios";

const register = data => {
  const url = "http://localhost:8080/members/new";
  return axios.post(url, data);
};

export default { register };
