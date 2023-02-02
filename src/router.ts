import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Legal from "./views/Legal.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/legal",
    name: "legal",
    component: Legal,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
