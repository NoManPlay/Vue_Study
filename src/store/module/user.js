/*
 * @Author: qtx
 * @Date: 2020-03-05 13:53:48
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 20:58:32
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
  SET_USER_NAME(state, params) {
    state.userName = params;
  }
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
