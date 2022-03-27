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
    <h1 class="main-title pb-4 center">History</h1>

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
        src="/src/assets/gen-2.png"
        alt=""
        class="card-history__images rounded-lg !object-cover"
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
  <section class="mt-2 bg-parallax py-8">
    <h1 class="main-title center pb-8">Our Teams</h1>
    <div class="teams">
      <div class="team-card">
        <img src="/src/assets/teams/wendy.jpg" class="team-image" />
        <h4 class="team-name">Wendy Antonius</h4>
        <p class="team-role">
          Founder, Chief Executive<br />Chief Financial, R&D Director
        </p>
      </div>
      <div class="team-card">
        <img src="/src/assets/teams/reinly.jpg" class="team-image" />
        <h4 class="team-name">Reinly</h4>
        <p class="team-role">Founder, Creative Director</p>
      </div>
      <div class="team-card">
        <img src="/src/assets/teams/panana.jpg" class="team-image" />
        <h4 class="team-name">Panana</h4>
        <p class="team-role">Founder, Art Director</p>
      </div>
      <div class="team-card">
        <img src="/src/assets/teams/sos.jpg" class="team-image" />
        <h4 class="team-name">SOS</h4>
        <p class="team-role">Head of Talent Manager</p>
      </div>
      <div class="team-card">
        <img src="/src/assets/teams/reynard.jpg" class="team-image" />
        <h4 class="team-name">Reynald Blanc</h4>
        <p class="team-role">Music & Vocal Director</p>
      </div>
      <div class="team-card">
        <img src="/src/assets/teams/yayo.jpg" class="team-image" />
        <h4 class="team-name">Yayo</h4>
        <p class="team-role">Video Director</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    document.title = "About - Re:Memories"
  },
}
</script>

<style lang="scss" scoped>
.paragraf {
  @apply w-[95vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] text-center font-semibold mx-auto;
  font-size: clamp(1rem, 1.4vmax, 1.4vmax);
}

.teams {
  @apply w-fit mx-auto px-4 md:px-0 grid gap-4 justify-items-center;
  grid-template-columns: repeat(3, 1fr);
}

.team {
  &-card {
    @apply max-w-[13rem] backdrop-blur-md bg-white/50 shadow-sm shadow-white/30 rounded-lg p-2 transition-colors duration-200 ease-in-out;

    // set background color for firefox
    @-moz-document url-prefix() {
      @apply bg-white/75;
    }
  }

  &-image {
    @apply w-full aspect-square object-cover rounded-lg mb-1;
  }

  &-name {
    @apply text-lg sm:text-xl font-semibold text-center text-slate-800;
  }

  &-role {
    @apply text-2xs sm:text-xs font-semibold text-center text-slate-600;
  }
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
