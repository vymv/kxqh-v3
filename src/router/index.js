import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layouts/index.vue";

export const routes = [
  {
    path: "/",
    component: Layout,
    alwaysShow: true,
    meta: { title: "首页", icon: "el-icon-s-home" },
    children: [
      {
        path: "",
        component: () => import("@/views/home.vue"),
        name: "home",
      },
    ],
  },

  {
    path: "/upload",
    component: Layout,
    alwaysShow: true,
    meta: { title: "上传文件", icon: "el-icon-upload" },
    children: [
      {
        path: "",
        component: () => import("@/views/upload.vue"),
        name: "upload",
      },
    ],
  },
  // {
  //   path: "/test",
  //   component: Layout,
  //   alwaysShow: true,
  //   meta: { title: "echart测试", icon: "el-icon-s-home" },
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("@/views/yuhun/test.vue"),
  //       name: "test",
  //     },
  //   ],
  // },

  // {
  //   path: "/yuhunselect",
  //   component: Layout,
  //   alwaysShow: true,
  //   meta: { title: "御魂筛选", icon: "el-icon-s-home" },
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("@/views/yuhun/yuhunSelect.vue"),
  //       name: "yuhunSelect",
  //     },
  //   ],
  // },
  {
    path: "/yuhun",
    component: Layout,
    alwaysShow: false,
    meta: { title: "御魂信息", icon: "el-icon-coffee-cup" },
    children: [
      {
        path: "",
        component: () => import("@/views/yuhun/summary.vue"),
        name: "summary",
        meta: { title: "账号信息", icon: "el-icon-watermelon" },
        //meta: { title: "账号信息" },
      },
      {
        path: "speed",
        component: () => import("@/views/yuhun/speed.vue"),
        name: "speed",
        meta: { title: "速度", icon: "el-icon-trophy-1" },
        //meta: { title: "速度" },
      },
      {
        path: "analysis",
        component: () => import("@/views/yuhun/maxSpeedCount.vue"),
        name: "analysis",
        meta: { title: "满速分布", icon: "el-icon-s-data" },
        //meta: { title: "满速分布" },
      },
      {
        path: "/maxgrowth",
        component: Layout,
        meta: { title: "各种类成长情况", icon: "el-icon-s-opportunity" },
        //meta: { title: "各种类御魂成长情况" },
        component: () => import("@/views/yuhun/maxGrowth.vue"),
        name: "maxgrowth",
      },
      {
        path: "/levelcount",
        component: Layout,
        meta: { title: "御魂总体情况", icon: "el-icon-data-analysis" },
        //meta: { title: "御魂总体情况" },
        component: () => import("@/views/yuhun/levelcount.vue"),
        name: "levelcount",
      },
      // {
      //   path: "list",
      //   component: () => import("@/views/yuhun/yuhunList.vue"),
      //   name: "list",
      //   meta: { title: "御魂列表", icon: "el-icon-grape" },
      // },

      // {
      //   path: "rank",
      //   component: () => import("@/views/yuhun/rank.vue"),
      //   name: "rank",
      //   meta: { title: "御魂评分", icon: "el-icon-data-line" },
      // },
    ],
  },
  // {
  //   path: "/calc",
  //   component: Layout,
  //   alwaysShow: false,
  //   meta: { title: "御魂计算器", icon: "el-icon-coffee-cup" },
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("@/views/calc/panel.vue"),
  //       name: "panel",
  //       meta: { title: "面板选择", icon: "el-icon-watermelon" },
  //     },
  //   ],
  // },
  {
    path: "/:catchAll(.*)",
    name: "404",
    redirect: "/",
    hidden: true,
  },
];

// 用工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
