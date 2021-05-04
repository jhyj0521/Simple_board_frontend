/* eslint-disable no-unused-vars */
import boardService from "@/api/board";

export const board = {
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
      return result.data.data.info;
    },
    async addPost({ commit }, post) {
      const result = await boardService.addPost(post);
      return result.data;
    },
    async clickLike({ commit }, boardNo) {
      const result = await boardService.clickLike(boardNo);
      return result.data;
    }
  }
};
