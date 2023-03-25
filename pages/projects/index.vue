<script setup>
import { projects } from '~/assets/projects'
</script>

<template>
  <div>
    <NuxtLink
      :to="`/projects/${project.title}`"
      v-for="project in projects"
      :key="project.title"
      class="border border-black mb-4 p-4 block"
    >
      <h2 class="text-lg font-display mb-2 font-bold">{{ project.title }}</h2>
      <p class="mb-2">{{ project.summary }}</p>
      <p class="text-sm text-gray-600">{{ project.tech }}</p>
    </NuxtLink>
  </div>
</template>
