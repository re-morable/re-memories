import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import MembersView from "../views/MembersView.vue"
import AboutView from "../views/AboutView.vue"

// when url is /discord, redirect to https://discord.gg/
if (document.location.pathname === "/discord")
  document.location.replace("https://discord.com/invite/FsvMsA7DFj")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/members",
      name: "members",
      component: MembersView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
})

export default router
