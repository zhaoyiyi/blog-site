<script setup>
import ProjectDetailsServer from '~/components/ProjectDetails.server.vue'

const { title } = useRoute().params
</script>

<template>
  <ProjectDetailsServer :title="title" />
</template>
