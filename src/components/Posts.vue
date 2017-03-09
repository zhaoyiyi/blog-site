<template>
  <ul>
    <li v-for="post in posts" :key="post.url">
      {{ post.name }}
      <router-link :to="'/post/' + post.name">detail</router-link>

    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'posts',
    computed: mapState(['posts']),
    created() {
      this.$store.dispatch('getPosts');
    },
  };
</script>

<style></style>
