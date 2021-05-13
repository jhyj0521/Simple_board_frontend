import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/Signup.vue")
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/Main.vue"),
    meta: { auth: true }
  },
  {
    path: "/post/add",
    name: "add",
    component: () => import("@/views/Post.vue"),
    meta: { auth: true }
  },
  {
    path: "/post/:boardNo",
    name: "detail",
    component: () => import("@/views/PostDetail.vue"),
    meta: { auth: true }
  },
  {
    path: "/post/:boardNo/edit",
    name: "edit",
    component: () => import("@/views/PostEdit.vue"),
    meta: { auth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    next("/login");
    return;
  }
  next();
});

export default router;
