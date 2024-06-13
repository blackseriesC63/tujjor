import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/homePage.vue"),
    },
    {
      path: "/reviews",
      name: "reviews",
      component: () => import("../pages/reviewsPage.vue"),
    },
  ],
});

export default router;
