<script setup>
import { RouterLink, RouterView } from "vue-router"
import "./index.scss"
</script>

<template>
  <nav
    class="nav"
    :style="{ backgroundColor: bg_color, '--tw-shadow': nav_shadow }"
  >
    <div class="navbar">
      <div class="navbar-logo">
        <img
          src="/src/assets/logo-light.png"
          alt="logo"
          class="navbar-logo__light"
        />
        <img
          src="/src/assets/logo-dark.png"
          alt="logo"
          :style="{ opacity: logo_opacity }"
          class="navbar-logo__dark"
        />
      </div>
    </div>
  </nav>
  <main :style="{ paddingTop: this.$route.path === '/' ? 0 : '3.5rem' }">
    <RouterView />
  </main>
  <footer>
    <!-- get year today -->
    2021-{{ new Date().getFullYear() }} &copy; Re:Memories
  </footer>
</template>

<script>
export default {
  data() {
    return {
      bg_color: `rgba(255, 255, 255, 1)`,
      nav_shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`,
      logo_opacity: 1,
    }
  },
  created() {
    this.$watch(
      () => this.$route.path,
      () => {
        if (this.$route.path === "/") {
          this.bg_color = `rgba(255, 255, 255, 0)`
          this.nav_shadow = `0 4px 6px -1px rgb(0 0 0 / 0), 0 2px 4px -2px rgb(0 0 0 / 0)`
          this.logo_opacity = 0

          window.addEventListener("scroll", () => {
            // const opacity = 0 + window.scrollY / 500
            // scroll to limit 75vh from top and max 1
            const opacity =
              0 +
              Math.min(
                1,
                Math.max(0, window.scrollY / (window.innerHeight - 75))
              )

            console.log(window.scrollY)
            this.bg_color = `rgba(255, 255, 255, ${opacity})`
            this.logo_opacity = opacity
            this.nav_shadow = `0 4px 6px -1px rgb(0 0 0 / ${
              opacity / 10
            }), 0 2px 4px -2px rgb(0 0 0 / ${opacity / 10})`
          })
        } else {
          this.bg_color = `rgba(255, 255, 255, 1)`
          this.nav_shadow = `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
          this.logo_opacity = 1
        }
      },
      { immediate: true }
    )
  },
}
</script>

<style lang="scss">
.nav {
  @apply h-14 w-screen fixed shadow-md;
}

.navbar {
  @apply container w-[95vw] mx-auto h-full flex items-center justify-between;

  &-logo {
    @apply relative h-full w-[11.25rem];

    &__light,
    &__dark {
      @apply absolute top-1/2 -translate-y-1/2;
    }
  }
}
</style>
