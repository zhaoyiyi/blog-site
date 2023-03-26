<script setup>
const { title } = useRoute().params
</script>

<template>
  <ProjectDetails :title="title" />
</template>
