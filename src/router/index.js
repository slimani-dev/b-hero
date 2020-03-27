import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/Pages/Home";

import profile from './profile'
import request from './request'

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
    component: () => import('@/Pages/Intro'),
    meta: {
      layout: 'full',
      transition: 'fade-in-down'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/Pages/Login/Login'),
    meta: {
      layout: 'full',
      transition: 'fade-in-down'
    }
  },
  {
    path: '/phoneLogin',
    name: 'PhoneLogin',
    component: () => import('@/Pages/Login/PhoneLogin'),
    meta: {
      layout: 'back-only',
      transition: 'fade-in-down'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: 'smooth'});
  },
  base: process.env.BASE_URL,
  routes: routes.concat(profile, request)
})

export default router
