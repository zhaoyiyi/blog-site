<script>
export default {
  computed: {
    isHome() {
      return this.$route.name === 'index';
    },
  },
};
</script>

<template>
  <div class="max-w-5xl mx-auto px-4">
    <n-link to="/">
      <h1 class="text-3xl my-4 pl-4 font-display font-bold" :class="{ isHome }">
        Yi Zhao
      </h1>
    </n-link>
    <nav
      class="border-b border-black flex items-center p-4 mb-4"
      :class="{ isHome }"
    >
      <n-link to="/projects" class="navItem">
        PROJECTS
      </n-link>
      <a
        href="https://github.com/zhaoyiyi"
        target="_blank"
        class="w-8 ml-auto mr-4 navItem"
      >
        <img src="~/assets/icons/github.svg" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/yi--zhao/"
        target="_blank"
        class="w-8 navItem"
      >
        <img src="~/assets/icons/linkedin.svg" alt="linkedin" />
      </a>
    </nav>
    <nuxt-child />
  </div>
</template>

<style scoped>
.navItem {
  @apply text-xl transition-all duration-200 border-b-2 border-transparent p-1 font-bold font-display;
}

.navItem:hover {
  @apply border-black;
}

.nuxt-link-active {
  @apply bg-gray-200 border-black;
}

h1.isHome {
  @apply absolute;
}

nav.isHome {
  @apply flex-col h-screen justify-center m-0;
}

nav.isHome > * {
  @apply mx-0 my-2;
}
</style>
