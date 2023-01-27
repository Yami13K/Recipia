import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecipeView from "../views/RecipeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recipe-book",
    name: "recipe-book",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BookView.vue"),
  },
  {
    path: "/tags",
    name: "tag-view",
  },
  {
    path: "/recipe",
    name: "recipe",
    component: RecipeView,
    props(route) {
      return { recipeid: route.query.recipeid };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
