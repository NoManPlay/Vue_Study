/*
 * @Author: qtx
 * @Date: 2020-03-09 20:32:06
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 20:35:20
 * @Description:
 */
export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null;
    setTimeout(() => {
      if (!err) resolve({ code: 200, info: { appName: "newAppName" } });
      else reject(err);
    });
  });
};
