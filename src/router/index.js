import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/Pages/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: 'smooth'});
  },
  base: process.env.BASE_URL,
  routes
})

export default router
