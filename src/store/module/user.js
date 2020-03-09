/*
 * @Author: qtx
 * @Date: 2020-03-05 13:53:48
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 18:11:12
 * @Description:
 */
const state = {
  userName: "QTX"
};

const getters = {
  firstLetter: state => {
    return state.userName.substr(0, 1);
  }
};

const mutations = {
  //
};

const actions = {
  //
};

export default {
  state,
  getters,
  mutations,
  actions
};
