<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="12"
    class="member"
    @after-init="slideChange"
    @slideChange="slideChange"
    @resize="slideChange"
  >
    <a
      href="#"
      onclick="return false"
      class="member-arrow-left"
      :class="{ disabled: !leftSlideBtn }"
      v-if="!(!leftSlideBtn && !rightSlideBtn)"
      @click="swiper.slideTo(swiper.activeIndex - slideContent)"
    >
      <font-awesome-icon icon="caret-left" class="member-arrow__icon" />
    </a>
    <a
      href="#"
      onclick="return false"
      class="member-arrow-right"
      v-if="!(!leftSlideBtn && !rightSlideBtn)"
      :class="{ disabled: !rightSlideBtn }"
      @click="swiper.slideTo(swiper.activeIndex + slideContent)"
    >
      <font-awesome-icon icon="caret-right" class="member-arrow__icon" />
    </a>
    <swiper-slide class="member-list">
      <router-link to="/" class="member-list__link group">
        <img
          src="/assets/members/evelyn-preview.png"
          alt="evelyn"
          class="member-list__img"
        />
        <h4
          class="member-list__name group-hover:translate-x-9 group-hover:opacity-100"
        >
          Evelyn
        </h4>
      </router-link>
    </swiper-slide>
    <swiper-slide class="member-list">
      <router-link to="/" class="member-list__link group">
        <img
          src="/assets/members/lily-preview.png"
          alt="Lily Ifeta"
          class="member-list__img"
        />
        <h4
          class="member-list__name group-hover:translate-x-9 group-hover:opacity-100"
        >
          Lily Ifeta
        </h4>
      </router-link>
    </swiper-slide>
    <swiper-slide class="member-list">
      <router-link to="/" class="member-list__link group">
        <img
          src="/assets/members/chloe-preview.png"
          alt="Chloe Pawapua"
          class="member-list__img"
        />
        <h4
          class="member-list__name group-hover:translate-x-9 group-hover:opacity-100"
        >
          Chloe Pawapua
        </h4>
      </router-link>
    </swiper-slide>
    <swiper-slide class="member-list">
      <router-link to="/" class="member-list__link group">
        <img
          src="/assets/members/reynard-preview.png"
          alt="Reynard Blanc"
          class="member-list__img"
        />
        <h4
          class="member-list__name group-hover:translate-x-9 group-hover:opacity-100"
        >
          Reynard Blanc
        </h4>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"

import "swiper/css"

library.add(faCaretLeft, faCaretRight)

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      leftSlideBtn: false,
      rightSlideBtn: false,
      slideContent: 0,
    }
  },
  mounted() {},
  methods: {
    slideChange(s) {
      this.swiper = s
      this.leftSlideBtn = !s.isBeginning
      this.rightSlideBtn = !s.isEnd
      this.slideIndex = s.realIndex

      const slideWidth = s.width
      const cardWidth = s.slides[0].clientWidth + 12
      this.slideContent = Math.floor(slideWidth / cardWidth)
    },
  },
}
</script>

<style lang="scss" scoped>
.member {
  @apply px-12 py-4 my-8;

  &-list {
    @apply mx-3 w-[250px] block;

    &__link {
      @apply relative inline-block shadow-sm rounded-3xl overflow-hidden hover:scale-105 hover:shadow-md transition duration-200 ease-in-out select-none;
    }

    &__name {
      @apply text-center text-3xl font-semibold origin-bottom-left absolute -rotate-90 bottom-6 -left-1 transition opacity-0 duration-200 ease-in-out text-slate-800;
    }
  }

  &-arrow-left,
  &-arrow-right {
    @apply text-[4.5vmax] bg-slate-700 text-white opacity-80 rounded-full absolute top-1/2 -translate-y-1/2 z-[5] hidden md:inline-block;
  }

  &-arrow__icon {
    @apply px-[2.4vmax] -translate-y-0.5;
  }

  &-arrow-left {
    @apply left-0;

    .member-arrow__icon {
      @apply translate-x-0.5;
    }
  }

  &-arrow-right {
    @apply right-0;
  }
}

.disabled {
  @apply opacity-20;
}
</style>
