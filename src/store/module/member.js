/* eslint-disable no-unused-vars */
import memberService from "@/api/member";
import { getAuthFromCookie, deleteCookie } from "@/utils/cookies";

export const member = {
  state: {
    token: getAuthFromCookie() || "",
    memberName: "",
    memberNo: ""
  },
  getters: {
    isLogin(state) {
      return state.token !== "";
    }
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
    },
    async getJwtInfo({ commit }) {
      const result = await memberService.getJwtInfo();
      commit("setMemberNo", result.data.data.memberNo);
      commit("setMemberName", result.data.data.memberName);
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setMemberName(state, memberName) {
      state.memberName = memberName;
    },
    setMemberNo(state, memberNo) {
      state.memberNo = memberNo;
    },
    logout(state) {
      state.token = "";
      deleteCookie("jwt");
    }
  }
};
