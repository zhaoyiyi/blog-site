<template>
  <section>
    <ul class="list" v-if="!isLoading">
      <li v-for="(project, index) in projects" :key="project.url" @click="navigateToProject(index)">
        <h2>{{ project.title }}</h2>
        <p>{{ project.summary }}</p>
        <p style="font-style: italic; font-size: 0.85rem;">{{ project.techs }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Projects',
    computed: mapState(['projects', 'isLoading']),
    methods: {
      navigateToProject(index) {
        this.$router.push({ name: 'Project', params: { index } });
      },
      ...mapActions(['getProjects']),
    },
    created() {
      this.getProjects();
    },
  };

</script>
