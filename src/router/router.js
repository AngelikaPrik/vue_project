import { createRouter, createWebHistory } from "vue-router";
import Main from "@pages/Main.vue";
import PostsPage from "@pages/PostsPage.vue";
import About from "@pages/About.vue";
import PostsDetails from "@pages/PostsDetails.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/posts", component: PostsPage },
  { path: "/about", component: About },
  { path: "/posts/:id", component: PostsDetails }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
