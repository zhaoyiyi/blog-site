<template>
  <article>
    <header>
      <a :href="project.github">GitHub</a>
      <a :href="project.link">Project website</a>
    </header>
    <div v-html="project.readme"></div>
  </article>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Project',
    props: ['index'],
    computed: mapState(['project']),
    mounted() {
      this.$store.dispatch('getProject', this.index);
    },
  };
</script>

<style scoped>
  header {
    border-bottom: 1px solid black;
    padding: 1rem 0;
    text-align: right;
  }
  header a {
    margin-right: 1rem;
  }
</style>
