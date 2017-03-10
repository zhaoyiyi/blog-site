<template>
  <div v-if="isLoading">
    Loading...
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: ['isLoading'],
  };
</script>

<style scoped></style>
