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
      console.log(result.data.data);
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
      state.boardInfo = info;
    },
    setCommentList(state, list) {
      state.commentList = list;
    }
  }
};
