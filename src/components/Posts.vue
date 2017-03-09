<template>
  <ul>
    <li v-for="post in posts" :key="post.url">
      {{ post.date }} {{ post.title }}

      <router-link :to="'/post/' + post.name">detail</router-link>

    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'posts',
    computed: mapGetters({ posts: 'sortByDate' }),
    created() {
      this.$store.dispatch('getPosts');
    },
  };
</script>

<style></style>
