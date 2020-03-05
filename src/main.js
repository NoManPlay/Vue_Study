/*
 * @Author: qtx
 * @Date: 2020-03-05 12:09:45
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 22:59:09
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bus from "./lib/bus";

Vue.config.productionTip = false;
Vue.prototype.$bus = Bus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
