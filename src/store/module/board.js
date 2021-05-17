/* eslint-disable no-unused-vars */
import boardService from "@/api/board";

export const board = {
  state: {
    boardInfo: {},
    commentList: []
  },
  actions: {
    async getBoardList({ commit }, criteria) {
      const result = await boardService.getBoardList(criteria);
      return result.data.data;
    },
    async getBoardSearchList({ commit }, criteria) {
      const result = await boardService.getBoardSearchList(criteria);
      return result.data.data;
    },
    async getBoardDetail({ commit, dispatch }, boardNo) {
      const result = await boardService.getBoardDetail(boardNo);
      commit("setBoardInfo", result.data.data.info);
      dispatch("getCommentList", {
        boardNo: boardNo,
        recordsPerPage: 100
      });
    },
    async addPost({ commit }, post) {
      const result = await boardService.addPost(post);
      return result.data;
    },
    async editPost({ commit }, post) {
      await boardService.editPost(post);
    },
    async deletePost({ commit }, boardNo) {
      await boardService.deletePost(boardNo);
    },
    async clickLike({ commit, dispatch }, boardNo) {
      await boardService.clickLike(boardNo);
      dispatch("getBoardDetail", boardNo.boardNo);
    },
    async addComment({ commit, dispatch }, data) {
      await boardService.addComment(data);
      dispatch("getBoardDetail", data.boardNo);
    },
    async deleteComment({ commit, dispatch }, data) {
      await boardService.deleteComment(data.commentNo);
      dispatch("getBoardDetail", data.boardNo);
    },
    async getCommentList({ commit }, data) {
      const result = await boardService.getCommentList(data);
      commit("setCommentList", result.data.data.list);
    }
  },
  mutations: {
    setBoardInfo(state, info) {
      let boardContent = info.content.replace(/\n/g, "<br/>");
      boardContent = boardContent.replace(/ /g, "&nbsp;&nbsp;");
      info.content = boardContent;
      state.boardInfo = info;
    },
    setCommentList(state, list) {
      list.forEach(comment => {
        comment.content = comment.content.replace(/\n/g, "<br/>");
        comment.content = comment.content.replace(/ /g, "&nbsp;&nbsp;");
      });
      state.commentList = list;
    }
  }
};
