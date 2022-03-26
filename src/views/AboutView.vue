<template>
  <section class="mb-2 bg-parallax py-8">
    <h1 class="main-title center pb-8">About</h1>
    <p class="paragraf">
      Re:Memories didirikan pada tahun 2021 (setahun setelah Gen 2 debut) dengan
      menjadikan YouTuber virtual sebagai teman dan bahkan anggota keluarga.
      Kami fokus pada penyediaan rasa hiburan baru, tidak hanya melihat satu
      arah, tetapi juga komunikasi dua arah dari konsep virtual.
    </p>
  </section>
  <div class="container w-[95vw] mx-auto py-4 text-slate-800">
    <h1 class="main-title pb-4 center">Sejarah</h1>

    <!-- Debut -->
    <div class="card-history">
      <img
        src="/src/assets/evelyn-2018.png"
        alt=""
        class="card-history__images"
      />
      <p class="card-history__text">
        <span class="card-history__date">2 Desember 2018</span>
        Evelyn debut sebagai vtuber
      </p>
    </div>

    <!-- Update live 2d -->
    <div class="card-history">
      <img
        src="/src/assets/evelyn-2019.png"
        alt=""
        class="card-history__images"
      />
      <p class="card-history__text">
        <span class="card-history__date">1 Desember 2019</span>
        Evelyn pertama kali mendapatkan model terbaru
      </p>
    </div>

    <!-- Update live 2d -->
    <div class="card-history">
      <img
        src="/src/assets/evelyn-2019.png"
        alt=""
        class="card-history__images"
      />
      <p class="card-history__text">
        <span class="card-history__date">September 2020</span>
        Debut Generasi ke-2
      </p>
    </div>

    <!-- Update live 2d -->
    <div class="card-history bg-slate-800">
      <img
        src="/src/assets/logo-light.png"
        alt=""
        class="card-history__images"
      />
      <p class="card-history__text text-slate-100">
        <span class="card-history__date !text-slate-300">September 2021</span>
        Re:Memories Terbentuk
      </p>
    </div>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.paragraf {
  @apply w-[95vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] text-center font-semibold mx-auto;
  font-size: clamp(0.8rem, 1.4vmax, 1.4vmax);
}

.card-history {
  @apply mx-auto w-[95vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] shadow-md rounded-lg p-4 md:py-2 flex flex-col md:flex-row items-center mb-4 last:mb-0;

  &__images {
    @apply h-52 w-48 object-contain mr-0 md:mr-8;
  }

  &__text {
    @apply text-lg flex flex-col items-center md:items-start;
  }

  &__date {
    @apply text-gray-500 font-semibold block text-xl;
  }
}
</style>
