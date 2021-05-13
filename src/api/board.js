import { axiosServiceWithAuth } from "./index";

const getBoardList = async data => {
  return await axiosServiceWithAuth.get("boards/lists", {
    params: {
      currentPageNo: data.currentPageNo
    }
  });
};

const getBoardSearchList = async data => {
  return await axiosServiceWithAuth.get("boards/searchLists", {
    params: {
      searchWord: data.searchWord,
      currentPageNo: data.currentPageNo
    }
  });
};

const getBoardDetail = async boardNo => {
  return await axiosServiceWithAuth.get(`boards/${boardNo}`);
};

const addPost = async data => {
  return await axiosServiceWithAuth.post("boards/new", data);
};

const editPost = async data => {
  return await axiosServiceWithAuth.post(`boards/${data.boardNo}/edit`, data);
};

const deletePost = async boardNo => {
  return await axiosServiceWithAuth.post(`boards/${boardNo}/delete`, boardNo);
};

const clickLike = async data => {
  return await axiosServiceWithAuth.post("likes/update", data);
};

const addComment = async data => {
  return await axiosServiceWithAuth.post("comments/new", data);
};

const deleteComment = async commentNo => {
  return await axiosServiceWithAuth.post(`comments/${commentNo}/delete`);
};

const getCommentList = async data => {
  return await axiosServiceWithAuth.get("comments/lists", {
    params: {
      boardNo: data.boardNo,
      recordsPerPage: data.recordsPerPage
    }
  });
};

export default {
  getBoardList,
  getBoardSearchList,
  getBoardDetail,
  addPost,
  editPost,
  deletePost,
  clickLike,
  addComment,
  deleteComment,
  getCommentList
};
