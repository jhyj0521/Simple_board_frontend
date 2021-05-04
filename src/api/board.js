import { axiosServiceWithAuth } from "./index";

const getBoardList = data => {
  return axiosServiceWithAuth.get("boards/lists", {
    params: {
      currentPageNo: data.currentPageNo
    }
  });
};

const getBoardSearchList = data => {
  return axiosServiceWithAuth.get("boards/searchLists", {
    params: {
      searchWord: data.searchWord,
      currentPageNo: data.currentPageNo
    }
  });
};

const getBoardDetail = boardNo => {
  return axiosServiceWithAuth.get(`boards/${boardNo}`);
};

const addPost = data => {
  return axiosServiceWithAuth.post("boards/new", data);
};

export default { getBoardList, getBoardSearchList, getBoardDetail, addPost };
