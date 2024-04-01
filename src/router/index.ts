import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Orders from "../views/Orders.vue";
import Accounts from "../views/Accounts.vue";
import Add from "../views/Add.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/orders", component: Orders },
  { path: "/add", component: Add },
  { path: "/accounts", component: Accounts },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
