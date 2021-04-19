import Vue from "vue";
import Vuex from "vuex";

import { member } from "./member-module";
import { board } from "./board-module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    member,
    board
  }
});
