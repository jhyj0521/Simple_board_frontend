import { axiosServiceWithAuth } from "./index";

const getBoardList = data => {
  return axiosServiceWithAuth.get("boards/lists", data);
};

const addPost = data => {
  return axiosServiceWithAuth.post("boards/new", data);
};

export default { getBoardList, addPost };
