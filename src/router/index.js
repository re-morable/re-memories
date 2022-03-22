import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
const posts = await import.meta.glob("./../../posts/*.md", {
  assert: { type: "raw" },
})

// when url is /discord, redirect to https://discord.gg/
if (document.location.pathname === "/discord")
  document.location.replace("https://discord.com/invite/FsvMsA7DFj")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top when route changed
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
})

export default router
