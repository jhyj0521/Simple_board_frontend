/* eslint-disable no-unused-vars */
import memberService from "@/api/member";
import {
  getAuthFromCookie,
  getMemberNameFromCookie,
  deleteCookie
} from "@/utils/cookies";

export const member = {
  state: {
    token: getAuthFromCookie() || "",
    memberName: getMemberNameFromCookie() || "",
    memberNo: ""
  },
  getters: {
    isLogin(state) {
      return state.memberName !== "";
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
      commit("setMemberName", getMemberNameFromCookie());
      return result;
    },
    async getJwtInfo({ commit }) {
      const result = await memberService.getJwtInfo();
      commit("setMemberNo", result.data.data.memberNo);
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
      (state.token = ""), (state.memberName = "");
      deleteCookie("jwt");
      deleteCookie("memberName");
    }
  }
};
