<template>
  <article v-if="!isLoading">
    <header>
      <a :href="project.github">GitHub</a>
      <a :href="project.link">Project website</a>
    </header>
    <div class="readme" v-html="project.readme"></div>
  </article>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Project',
    props: ['index'],
    computed: mapState(['project', 'isLoading']),
    methods: mapActions(['getProject']),
    mounted() {
      this.getProject(this.index);
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

<style>
  .readme img {
    max-width: 960px;
  }
</style>
