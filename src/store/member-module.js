/* eslint-disable no-unused-vars */
import memberService from "../api/member";
import { getAuthFromCookie } from "@/utils/cookies";

export const member = {
  state: {
    token: getAuthFromCookie() || ""
  },
  actions: {
    async register({ commit }, member) {
      const result = await memberService.register(member);
      console.log(result);
    },
    async login({ commit }, member) {
      const result = await memberService.login(member);
      commit("setToken", getAuthFromCookie());
      return result;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  }
};
