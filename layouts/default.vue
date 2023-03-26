<script setup lang="ts">
import { computed } from 'vue'
import NavServer from '~~/components/Nav.server.vue'

const route = useRoute()
const isHome = computed(() => route.name === 'index')
</script>

<template>
  <div class="max-w-5xl mx-auto px-4">
    <NavServer :isHome="isHome" />
    <slot />
  </div>
</template>
