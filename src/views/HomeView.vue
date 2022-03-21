<template>
  <header class="header-img"></header>
</template>

<script></script>

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
</style>
