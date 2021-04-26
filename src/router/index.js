import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert("로그인 페이지로 이동합니다.");
    next("/login");
    return;
  }
  next();
});

export default router;
