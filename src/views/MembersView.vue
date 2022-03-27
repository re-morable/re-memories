<template>
  <div class="container w-[95vw] mx-auto py-2 text-slate-800">
    <h1 class="main-title">Members</h1>
  </div>
  <ul class="filter-gen">
    <li class="filter-gen-item">
      <a
        href="#"
        class="filter-gen-link"
        :class="{ active: tab === 0 }"
        @click="tab = 0"
        >All</a
      >
    </li>
    <li class="filter-gen-item">
      <a
        href="#"
        class="filter-gen-link"
        :class="{ active: tab === 1 }"
        @click="tab = 1"
        >Gen 1</a
      >
    </li>
    <li class="filter-gen-item">
      <a
        href="#"
        class="filter-gen-link"
        :class="{ active: tab === 2 }"
        @click="tab = 2"
        >Gen 2</a
      >
    </li>
    <li class="filter-gen-item">
      <a
        href="#"
        class="filter-gen-link"
        :class="{ active: tab === 3 }"
        @click="tab = 3"
        >Gen 3</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    }
  },
  mounted() {
    document.title = "Members - Re:Memories"
  },
  computed: {
    members() {
      const members = [
        {
          name: "Evelyn",
          gen: 1,
          slug: "evelyn",
        },
        {
          name: "Lily Ifeta",
          gen: 2,
          slug: "lily",
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-gen {
  @apply flex justify-center items-center py-2;

  &-item:not(:last-child) {
    @apply mr-4;
  }

  &-link {
    @apply inline-block py-1 px-2 rounded-lg shadow-md -translate-y-0.5 bg-white  hover:shadow-sm hover:translate-y-px transition duration-200 ease-in-out;

    &.active {
      @apply bg-slate-700 text-white shadow-none translate-y-0;
    }
  }
}
</style>
