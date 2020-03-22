import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/Pages/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade' },
  },
  {
    path: '/intro',
    name: 'Intro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "intro" */ '@/Pages/Intro'),
    meta: {
      layout: 'full',
      transition: 'fade-in-down'
    }
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
