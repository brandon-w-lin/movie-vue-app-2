import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesEdit from "../views/MoviesEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "movies-index",
    component: MoviesIndex,
  },
  {
    path: "/movies/:id",
    name: "movies-show",
    component: MoviesShow,
  },
  {
    path: "/movies/submit",
    name: "movies-submit",
    component: MoviesNew,
  },
  {
    path: "/movies/:id/edit",
    name: "movies-edit",
    component: MoviesEdit,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
