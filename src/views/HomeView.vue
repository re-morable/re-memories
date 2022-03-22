<script setup>
import HomeMembers from "../components/HomeMembers.vue"
</script>

<template>
  <header
    class="header-img"
    :style="{ backgroundPosition: `50% ${header_scroll}` }"
  ></header>
  <section class="my-2">
    <div class="container w-[95vw] mx-auto pt-5">
      <h1 class="text-slate-800 pl-5">Members</h1>
      <HomeMembers />
    </div>
  </section>
  <section class="my-2 bg-parallax flex flex-col items-center text-white">
    <h1 class="pb-8 pt-16 center">About</h1>
    <p
      class="w-[95vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] text-center font-semibold mb-2 text-lg"
    >
      Re:Memories adalah agensi independen yang melahirkan Virtual Youtuber
      sebagai teman atau bahkan keluarga. Kami berfokus memberikan sensasi
      hiburan baru yang tidak hanya menonton secara satu arah, tetapi juga
      memperhatikan komunikasi dua arah dengan konsep virtual.
    </p>

    <p
      class="w-[95vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] text-center mx-0 font-semibold mb-16 text-lg"
    >
      Tujuan kami adalah membuat memori yang nyata dengan menggunakan media
      virtual untuk berinteraksi dengan dunia.
    </p>
  </section>
  <section class="my-2 flex flex-col items-center text-slate-800">
    <h1 class="pb-8 pt-16 center">Hi</h1>
    <p
      class="w-[95vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] text-center font-semibold mb-16 text-lg"
    >
      Yang sedang anda lihat adalah halaman utama yang belum jadi. Jika ada
      kebutuhan, hubungi
      <a
        href="http://twitter.com/yarndinasti"
        target="_blank"
        class="text-slate-700 hover:text-slate-900 underline"
        rel="noopener noreferrer"
        >@yarndinasti</a
      >
    </p>
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

      // get .bg-parallax position
      const bgParallax = document.querySelector(".bg-parallax")
      const paralaxScroll =
        window.scrollY - bgParallax.getBoundingClientRect().top

      bgParallax.style.backgroundPosition = `50% ${0 - paralaxScroll / 15}px`
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
    &:after {
      @apply mx-auto;
    }
  }
}

.bg-parallax {
  @apply bg-[url("/src/assets/background.jpg")] bg-cover bg-no-repeat bg-top bg-fixed;
}
</style>
