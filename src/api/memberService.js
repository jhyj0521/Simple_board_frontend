import axios from "axios";

function register(member) {
  console.log(member);
  const url = "http://localhost:8080/members/new";
  return axios.post(url, member);
}

export default { register };
