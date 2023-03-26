<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const isHome = computed(() => route.name === 'index')
</script>

<template>
  <div class="max-w-5xl mx-auto px-4">
    <Nav :isHome="isHome" />
    <slot />
  </div>
</template>
