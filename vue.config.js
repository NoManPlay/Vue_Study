/*
 * @Author: qtx
 * @Date: 2020-03-05 12:09:44
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 20:57:48
 * @Description:
 */
const path = require("path");

const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === "procution" ? "/iview-admin/" : "/";

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  //打包不生成.map
  productionSourceMap: false,
  // devServer: {
  //   proxy: "http://localhost:4000"
  // }
};
