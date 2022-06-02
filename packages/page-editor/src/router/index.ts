import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import editor from "../views/editor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: editor
  },
  {
    path: "/render",
    name: "render",
    component: () => import("../views/render.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
