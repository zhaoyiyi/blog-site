<template>
  <div class="max-w-5xl mx-auto">
    <h1 class="text-3xl text-center my-4 font-display font-bold">
      Yi Zhao
    </h1>
    <nav class="border-b border-black flex items-center p-4 mb-8">
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
  @apply text-xl transition-all duration-200 border-b-2 border-transparent p-1;
}

.navItem:hover {
  @apply border-black;
}
</style>
