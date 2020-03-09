/*
 * @Author: qtx
 * @Date: 2020-03-09 17:46:41
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 17:58:08
 * @Description:
 */
const getters = {
  appNameWithVersion: state => {
    return `${state.appName} v2.0`;
  }
};
export default getters;
