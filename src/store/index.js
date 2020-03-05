/*
 * @Author: qtx
 * @Date: 2020-03-05 12:09:45
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 13:55:37
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import user from "./module/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: { user }
});
