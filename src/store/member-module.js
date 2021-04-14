/* eslint-disable no-unused-vars */
import memberService from "../service/memberService";

export const member = {
  state: {},
  actions: {
    async register({ commit }, member) {
      const result = await memberService.register(member);
      console.log(result);
    }
  },
  mutations: {}
};
