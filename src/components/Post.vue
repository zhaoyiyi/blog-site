<template>
  <article v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.date }}</p>
    <div v-html="post.html"></div>
  </article>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    props: ['name'],
    computed: mapState(['post']),
    mounted() {
      this.$store.dispatch('getPost', this.name);
    },
  };
</script>

<style></style>
