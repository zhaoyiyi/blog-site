<template>
  <article>
    <header>
      <h1>{{ post.title }}</h1>
      <p>{{ post.date }}</p>
    </header>
    <div v-html="post.html"></div>
  </article>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Post',
    props: ['name'],
    computed: mapState(['post']),
    methods: mapActions(['getPost']),
    created() {
      this.getPost(this.name);
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
