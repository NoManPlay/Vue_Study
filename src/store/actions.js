/*
 * @Author: qtx
 * @Date: 2020-03-05 13:52:19
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 20:49:06
 * @Description:
 */
import { getAppName } from "@/api/app";

const actions = {
  // updateAppName({ commit }) {
  //   getAppName()
  //     .then(res => {
  //       // commit("SET_APP_NAME", res.info.appName);

  //       const {
  //         info: { appName }
  //       } = res;
  //       commit("SET_APP_NAME", appName);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  async updateAppName({ commit }) {
    try {
      const {
        info: { appName }
      } = await getAppName();
      commit("SET_APP_NAME", appName);
    } catch (err) {
      console.log(err);
    }
  }
};
export default actions;
