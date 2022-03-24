<script setup>
import { RouterLink, RouterView } from "vue-router"
import "./index.scss"
</script>

<template>
  <nav
    class="nav"
    :style="{
      'background-color': `rgba(255, 255, 255, ${navbar_opacity})`,
      '--tw-shadow': `0 4px 6px -1px rgb(0 0 0 / ${navbar_opacity / 10}`,
    }"
  >
    <div class="navbar">
      <RouterLink to="/" class="navbar-logo">
        <img
          src="/src/assets/logo-light.png"
          alt="logo"
          class="navbar-logo__light"
        />
        <img
          src="/src/assets/logo-dark.png"
          alt="logo"
          class="navbar-logo__dark"
          :style="{ opacity: navbar_opacity }"
        />
      </RouterLink>
      <div class="navbar-menu">
        <a
          href="#"
          class="navbar-link"
          onclick="return false"
          :style="{ color: link_color }"
        >
          <font-awesome-icon icon="bars" class="navbar-link__icon" />
        </a>
        <div class="navbar-items" :style="{ color: nav_color }">
          <RouterLink to="/" class="navbar-item"> Home </RouterLink>
          <RouterLink to="/members" class="navbar-item"> Members </RouterLink>
          <RouterLink to="/about" class="navbar-item"> About </RouterLink>
          <RouterLink to="/news" class="navbar-item"> News </RouterLink>
          <!-- <RouterLink to="/audition" class="navbar-item">
          Audition
        </RouterLink> -->
        </div>
      </div>
    </div>
  </nav>
  <main :style="{ paddingTop: $route.path === '/' ? 0 : '3.5rem' }">
    <RouterView />
  </main>
  <footer class="footer">
    <img src="/src/assets/logo-light.png" alt="Re:Memories" class="pb-4" />
    <div class="link-service">
      <router-link to="/about">About Us</router-link> |
      <router-link to="/terms">Guidelines</router-link> |
      <router-link to="/privacy">Privacy Policy</router-link> |
      <a href="/#contact" @click="toContact">Contact</a> |
      <router-link to="/audition">Audition</router-link>
    </div>
    <div class="link-sosmed">
      <a
        href="https://www.youtube.com/channel/UCJZnhqz3mNpWJJ1FGrAy_qA"
        target="_blank"
        class="hover:bg-[#ff0000] hover:text-white"
      >
        <font-awesome-icon :icon="['fab', 'youtube']" class="fa-fw" />
      </a>
      <a
        href="https://twitter.com/Rememories_id"
        target="_blank"
        class="hover:bg-[#1d9bf0] hover:text-white"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" class="fa-fw" />
      </a>
      <a
        href="https://www.instagram.com/rememories.id/"
        target="_blank"
        class="hover:bg-gradient-to-br from-[#3f6ac9] via-[#e54576] to-[#ffc650] hover:text-white"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" class="fa-fw" />
      </a>
      <a
        href="https://www.facebook.com/rememories.id/"
        target="_blank"
        class="hover:bg-[#1878f4] hover:text-white"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" class="fa-fw" />
      </a>
      <a
        href="https://discord.com/invite/FsvMsA7DFj"
        target="_blank"
        class="hover:bg-[#5865F2] hover:text-white"
      >
        <font-awesome-icon :icon="['fab', 'discord']" class="fa-fw" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.warteg.evelyn_family_app"
        target="_blank"
        class="hover:bg-slate-800 hover:text-white"
      >
        <font-awesome-icon :icon="['fab', 'google-play']" class="fa-fw" />
      </a>
    </div>

    <div class="copyright">
      2020-{{ new Date().getFullYear() }} &copy; Re:Memories All Rights
      Reserved.
    </div>
  </footer>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
  faDiscord,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faBars,
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
  faDiscord,
  faGooglePlay
)

export default {
  data() {
    return {
      navbar_open: false,
      navbar_opacity: 1,
      link_color: "rgb(20, 20, 20)",
      nav_color: "rgb(20, 20, 20)",
    }
  },
  created() {
    window.addEventListener("click", (e) => {
      const getTarget = e.target.closest(".navbar-link")

      if (getTarget) {
        this.navbar_open = !this.navbar_open
        this.recolorNavBar()

        if (!this.navbar_open) document.activeElement.blur()
      } else {
        this.navbar_open = false
        this.recolorNavBar()
      }
    })

    window.addEventListener("unfocus", () => {
      document.activeElement.blur()
      this.navbar_open = false
      this.recolorNavBar()
    })

    window.addEventListener("resize", () => this.recolorNavBar())
    window.addEventListener("scroll", () => this.recolorNavBar())
  },
  mounted() {
    this.$watch(
      () => this.$route.path,
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 50))
        this.recolorNavBar()
      },
      { immediate: true }
    )
  },
  methods: {
    async recolorNavBar() {
      if (this.$route.path === "/") {
        await new Promise((resolve) => setTimeout(resolve, 100))
        const opacity =
          window.innerWidth > 1024
            ? 0 +
              Math.min(
                1,
                Math.max(0, window.scrollY / (window.innerHeight - 75))
              )
            : 0 +
              Math.min(
                1,
                Math.max(0, (window.scrollY / window.innerHeight) * 2)
              )

        this.navbar_opacity =
          this.navbar_open && window.innerWidth <= 640 ? 1 : opacity

        const linkColor = this.navbar_open
          ? 20
          : Math.max(20, Math.min(255, 255 - opacity * 255))
        const navColor = window.innerWidth <= 640 ? 20 : linkColor

        this.link_color = `rgb(${linkColor}, ${linkColor}, ${linkColor})`
        this.nav_color = `rgb(${navColor}, ${navColor}, ${navColor})`
      } else {
        this.navbar_opacity = 1
        this.link_color = "rgb(20, 20, 20)"
        this.nav_color = "rgb(20, 20, 20)"
      }
    },
    scrollHash(hash) {
      if (!this.$route.hash) return
      let element = document.getElementById(hash.replace("#", ""))

      if (element) {
        const headerOffset = 70
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    },
    async toContact(e) {
      e.preventDefault()
      await new Promise((resolve) => setTimeout(resolve, 50))
      if (this.$route.path !== "/#contact")
        this.$router.push({
          path: "/",
          hash: "#contact",
        })

      this.scrollHash("contact")
    },
  },
}
</script>

<style lang="scss">
.nav {
  @apply h-14 w-screen fixed shadow-md transition duration-200 ease-in-out z-10;
}

.navbar {
  @apply container w-[95vw] mx-auto h-full flex items-center justify-between;

  &-logo {
    @apply relative h-full w-[11.25rem] inline-block;

    &__light,
    &__dark {
      @apply absolute top-1/2 -translate-y-1/2;
    }

    &__dark {
      @apply transition duration-200 ease-in-out;
    }
  }

  &-link {
    @apply inline-block text-xl mr-2 py-1 px-2 sm:hidden rounded-md;
  }

  &:focus-within {
    .navbar-items {
      @apply scale-y-100;
    }
  }

  &-items {
    @apply flex flex-col absolute right-0 top-14 w-screen p-2 bg-white scale-y-0 origin-top transition duration-200 ease-in-out;

    @media (min-width: 640px) {
      @apply flex-row static w-auto items-center justify-end bg-transparent p-0 scale-y-100;
    }
  }

  &-item {
    @apply inline-block px-2 py-1 sm:mx-0.5 my-0.5 sm:my-0 font-medium rounded-md hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-200 ease-in-out;

    &.router-link-active {
      @apply bg-gray-300 bg-opacity-50;
    }
  }
}

.footer {
  @apply py-6 bg-slate-700 flex flex-col items-center justify-center;
}

.link-sosmed {
  @apply flex items-center;

  a {
    @apply text-xl px-2 py-1.5 rounded-full bg-white/30 text-slate-700 transition-colors duration-200 ease-in-out;

    &:not(:last-child) {
      @apply mr-2;
    }
  }
}

.link-service {
  @apply text-slate-400 text-sm pb-4;

  a {
    @apply text-slate-100 hover:text-slate-400 duration-200 ease-in-out;
  }
}

.copyright {
  @apply text-xs mt-4 text-center text-slate-300;
}
</style>
