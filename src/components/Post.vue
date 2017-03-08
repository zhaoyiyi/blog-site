<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.date }}</p>
    <div v-html="post.html"></div>
  </article>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    props: ['name'],
    computed: mapGetters({
      post: 'postContent',
    }),
    created() {
      this.$store.dispatch('getPost', this.name);
    },
  };
</script>

<style></style>
