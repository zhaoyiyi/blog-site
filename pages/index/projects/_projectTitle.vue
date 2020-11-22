<script>
import marked from 'marked';
import { projects } from '~/assets/projects';

export default {
  name: 'Project',
  data() {
    return {
      readme: '',
      text: '',
      project: null,
    };
  },

  async fetch() {
    const { projectTitle } = this.$route.params;
    this.project = projects.find(({ title }) => title === projectTitle);

    if (this.project) {
      const readme = await fetch(this.project.readme).then((res) => {
        return res.text();
      });

      this.readme = marked(readme);
    }
  },
};
</script>

<template>
  <div>
    <header class="text-right">
      <a
        v-if="project.github"
        target="_blank"
        :href="project.github"
        class="border-b-2 border-transparent hover:border-black"
      >
        GitHub
      </a>
      <a
        v-if="project.link"
        target="_blank"
        :href="project.link"
        class="border-b-2 border-transparent hover:border-black ml-2"
      >
        Project website
      </a>
    </header>
    <article
      v-if="readme"
      v-html="readme"
      class="content leading-7 pb-20 px-4"
    />
  </div>
</template>

<style scoped>
.content >>> img {
  max-width: 100%;
}

.content >>> code {
  @apply bg-gray-300 py-1 px-2;
}

.content >>> h1,
.content >>> h2 {
  @apply font-bold font-display mb-1 mt-4;
}

.content >>> h1 {
  @apply text-xl;
}

.content >>> h2 {
  @apply text-lg;
}

.content >>> a {
  @apply border-b-2 border-black;
}
</style>
