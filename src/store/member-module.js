/* eslint-disable no-unused-vars */
import memberService from "../service/memberService";

export const member = {
  state: {},
  actions: {
    async register({ commit }, member) {
      try {
        const result = await memberService.register(member);
        commit("REGISTER_SUCCESS");
        console.log(result);
      } catch (error) {
        commit("REGISTER_FAILURE", error);
        console.log(error.response.data);
      }
    }
  },
  mutations: {
    REGISTER_SUCCESS(state) {
      alert("정상적으로 회원가입 처리되었습니다.");
    },
    REGISTER_FAILURE(state, payload) {
      alert(payload.response.data.message);
    }
  }
};
