import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Shopping from '../views/Shopping.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    redirect: "/Home"
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    meta: {
      title: "首页"
    }
  },
  {
    path: "/Shopping",
    name: "Home",
    component: Shopping,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shopping.vue"),
    meta: {
      title: "购物车"
    }
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    meta: {
      title: "个人中心"
    }
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router;
