import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'

import { authStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: (to, from, next) => {
        const { user } = authStore()

        if (!user) {
          return next()
        }

        next('/profile')
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      beforeEnter: (to, from, next) => {
        const { user } = authStore()

        if (user) {
          return next()
        }

        next('/profile')
      }
    },

    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      beforeEnter: (to, from, next) => {
        const { user } = authStore()

        if (user) {
          return next()
        }

        next('/login')
      }
    },
  ],
});

export default router;
