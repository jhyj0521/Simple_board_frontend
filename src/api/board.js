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

const clickLike = data => {
  return axiosServiceWithAuth.post("likes/update", data);
};

const addComment = data => {
  return axiosServiceWithAuth.post("comments/new", data);
};

const getCommentList = data => {
  return axiosServiceWithAuth.get("comments/lists", {
    params: {
      boardNo: data.boardNo
    }
  });
};

export default {
  getBoardList,
  getBoardSearchList,
  getBoardDetail,
  addPost,
  clickLike,
  addComment,
  getCommentList
};
