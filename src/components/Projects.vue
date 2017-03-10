<template>
  <ul class="list">
    <li v-for="(project, index) in projects" :key="project.url" @click="navigateToProject(index)">
      <h2>{{ project.title }}</h2>
      <p>{{ project.summary }}</p>
      <p style="font-style: italic; font-size: 0.85rem;">{{ project.techs }}</p>
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Projects',
    computed: mapState(['projects']),
    methods: {
      navigateToProject(index) {
        this.$router.push({ name: 'Project', params: { index } });
      },
    },
    created() {
      this.$store.dispatch('getProjects');
    },
  };

</script>
