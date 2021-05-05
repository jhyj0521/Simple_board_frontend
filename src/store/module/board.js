/* eslint-disable no-unused-vars */
import boardService from "@/api/board";

export const board = {
  state: {
    boardInfo: {}
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
    async getBoardDetail({ commit }, boardNo) {
      const result = await boardService.getBoardDetail(boardNo);
      commit("setBoardInfo", result.data.data.info);
    },
    async addPost({ commit }, post) {
      const result = await boardService.addPost(post);
      return result.data;
    },
    async clickLike({ commit, dispatch }, boardNo) {
      await boardService.clickLike(boardNo);
      dispatch("getBoardDetail", boardNo.boardNo);
    },
    async addComment({ commit }, data) {
      const result = await boardService.addComment(data);
      return result.data.data;
    },
    async getCommentList({ commit }, data) {
      const result = await boardService.getCommentList(data);
      return result.data.data.list;
    }
  },
  mutations: {
    setBoardInfo(state, info) {
      state.boardInfo = info;
    }
  }
};
