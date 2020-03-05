/*
 * @Author: qtx
 * @Date: 2020-03-05 13:47:02
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 22:09:53
 * @Description:
 */
import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    alias: "/homepage",
    name: "name",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  //动态路由加载
  {
    path: "/argu/:name",
    name: "argu",
    component: () => import("@/views/argu.vue")
  },
  //嵌套路由
  {
    path: "/parent",
    component: () => import("@/views/parent.vue"),
    children: [
      {
        path: "child",
        component: () => import("@/views/child.vue")
      }
    ]
  },
  {
    path: "/named_view",
    components: {
      default: () => import("@/views/child.vue"),
      email: () => import("@/views/email.vue"),
      tel: () => import("@/views/tel.vue")
    }
  },
  //重定向
  {
    path: "/main",
    redirect: "/"
  },
  {
    path: "/store",
    component: () => import("@/views/store.vue")
  },
  {
    path: "*",
    component: () => import("@/views/error.vue")
  }
];
