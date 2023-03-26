<script setup lang="ts">
import { marked } from 'marked'
import { projects } from '~/assets/projects'

defineProps<{
  title: string
}>()

const { title } = useRoute().params

const project = projects.find((p) => p.title === title)

const readme =
  project && marked.parse(await fetch(project.readme).then((res) => res.text()))
</script>

<template>
  <div v-if="project">
    <header class="text-right">
      <a
        v-if="project.github"
        target="_blank"
        :href="project.github"
        class="border-b-2 border-transparent hover:border-black"
      >
        GitHub
      </a>
      <a
        v-if="project.link"
        target="_blank"
        :href="project.link"
        class="border-b-2 border-transparent hover:border-black ml-2"
      >
        Project website
      </a>
    </header>
    <article
      v-if="readme"
      v-html="readme"
      class="content leading-7 pb-20 px-4"
    />
  </div>

  <div v-else>Sorry, this project is not available.</div>
</template>

<style scoped>
.content:deep(img) {
  max-width: 100%;
}

.content:deep(code) {
  @apply bg-gray-200 py-1 px-2;
}

.content:deep(h1),
.content:deep(h2) {
  @apply font-bold font-display mb-1 mt-4;
}

.content:deep(h1) {
  @apply text-xl;
}

.content:deep(h2) {
  @apply text-lg;
}

.content:deep(a) {
  @apply border-b-2 border-black;
}
</style>
