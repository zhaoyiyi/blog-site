<template>
  <article v-if="post">
    <header>
      <h1>{{ post.title }}</h1>
      <p>{{ post.date }}</p>
    </header>
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

<style scoped>
  header {
    margin-bottom: 2rem;
  }
  header h1 {
    font-size: 2rem;
  }
  header h1, header p {
    margin-bottom: 0.5rem;
  }
</style>
