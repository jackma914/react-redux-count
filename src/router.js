import Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./components/Login.vue";
import Ground from "./components/Ground.vue";
import { def } from "@vue/shared";

const routes = [
  {
    name: "Home",
    component: Ground,
    path: "/",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
