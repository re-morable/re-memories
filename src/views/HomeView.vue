<script setup>
import HomeMembers from "../components/HomeMembers.vue"
</script>

<template>
  <header
    class="header-img"
    :style="{ backgroundPosition: `50% ${header_scroll}` }"
  ></header>
  <section class="">
    <div class="container w-[95vw] mx-auto pt-5">
      <h1 class="text-slate-800 pl-5">Members</h1>
      <HomeMembers />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      header_scroll: "0",
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      // when media query min-width: 1024px
      if (window.innerWidth > 1024) {
        // when scroll down, scroll background image to up
        if (window.scrollY > 0) {
          this.header_scroll = `${Math.min(
            250,
            50 + Math.round(window.scrollY / 3)
          )}%`
        } else {
          this.header_scroll = "50%"
        }
      } else {
        // when scroll down, scroll background image to up
        if (window.scrollY > 0) {
          this.header_scroll = `${Math.max(
            -60,
            0 - Math.round(window.scrollY / 10)
          )}%`
        } else {
          this.header_scroll = "0%"
        }
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.header-img {
  background-image: url("/src/assets/web-banner.jpg");
  @apply lg:h-screen w-screen bg-fixed bg-contain lg:bg-cover bg-no-repeat bg-top lg:bg-center;

  // resize height to 59 : 36 ratio
  aspect-ratio: 59 / 36;
  @media (min-width: 1024px) {
    aspect-ratio: auto;
  }
}

h1 {
  @apply text-[3.5vmax] font-semibold inline-block uppercase;

  &:after {
    @apply content-[''] block h-[0.45vmax] rounded-full bg-current w-10/12;
  }

  &.center {
    @apply absolute left-1/2 -translate-x-1/2;

    &:after {
      @apply mx-auto;
    }
  }
}
</style>
