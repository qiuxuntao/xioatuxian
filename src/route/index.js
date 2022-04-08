import { createRouter, createWebHashHistory } from "vue-router";
// 导入Home组件
import Home from "../views/Home/Home.vue";

const routes = [
  // 路由规则

  // 首页路由
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/category/:id",
    name: "topcategory",
    component: () => import("@/views/TopCategory/TopCategory.vue"),
  },
  {
    path: "/category/sub/:id",
    name: "subcategory",
    component: () => import("@/views/SubCategory/SubCategory.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
