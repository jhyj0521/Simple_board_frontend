/* eslint-disable no-unused-vars */
import boardService from "../service/boardService";

export const board = {
  actions: {
    async getBoardList({ commit }, board) {
      const result = await boardService.getBoardList(board);
      return result.data.data;
    }
  }
};
