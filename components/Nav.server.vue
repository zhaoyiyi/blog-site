<script setup lang="ts">
defineProps<{
  isHome: boolean
}>()
</script>

<template>
  <NuxtLink to="/">
    <h1
      class="text-3xl my-4 pl-4 font-display font-bold"
      :class="[isHome && 'absolute']"
    >
      Yi Zhao
    </h1>
  </NuxtLink>
  <nav
    class="border-b border-black flex items-center p-4 mb-4"
    :class="[isHome && 'flex-col h-screen justify-center m-0']"
  >
    <ul class="w-full flex items-center" :class="[isHome && 'flex-col']">
      <li
        class="text-xl transition-all duration-200 p-1 font-bold font-display"
        :class="[!isHome && 'flex-1']"
      >
        <NuxtLink
          class="border-b-2 border-transparent inline-block py-2 hover:border-black"
          to="/projects"
        >
          PROJECTS
        </NuxtLink>
      </li>
      <li
        class="w-8 text-xl transition-all duration-200 p-1 font-bold font-display"
        :class="[!isHome && 'mx-2']"
      >
        <NuxtLink
          class="border-b-2 border-transparent block py-2 hover:border-black"
          href="https://github.com/zhaoyiyi"
          target="_blank"
        >
          <img src="~/assets/icons/github.svg" alt="github" />
        </NuxtLink>
      </li>
      <li
        class="w-8 text-xl transition-all duration-200 p-1 font-bold font-display"
        :class="[!isHome && 'ml-2']"
      >
        <NuxtLink
          class="border-b-2 border-transparent block py-2 hover:border-black"
          href="https://www.linkedin.com/in/yi--zhao/"
          target="_blank"
        >
          <img src="~/assets/icons/linkedin.svg" alt="linkedin" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply bg-gray-200 border-black;
}
</style>
