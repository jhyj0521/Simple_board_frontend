import memberService from "../api/memberService";

export const member = {
  state: {},
  actions: {
    async register({ commit }, member) { // eslint-disable-line no-unused-vars
      try {
        const result = await memberService.register(member);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
