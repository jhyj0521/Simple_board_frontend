import axios from "axios";

// API 설정 공통화
const axiosService = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

const getBoardList = data => {
  return axiosService.get("boards/lists", data);
};

export default { getBoardList };
