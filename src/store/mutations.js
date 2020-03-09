/*
 * @Author: qtx
 * @Date: 2020-03-05 13:52:09
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 20:41:33
 * @Description:
 */
import vue from "vue";

const mutations = {
  SET_APP_NAME(state, params) {
    state.appName = params;
  },
  SET_APP_VERSION(state) {
    vue.set(state, "appVersion", "v2.0");
  }
};
export default mutations;
