<script>
import marked from 'marked';
import { projects } from './projects';

export default {
  name: 'Project',
  data() {
    return {
      readme: '',
      text: '',
    };
  },

  async fetch() {
    const { projectTitle } = this.$route.params;
    const project = projects.find(({ title }) => title === projectTitle);

    if (project) {
      const readme = await fetch(project.readme).then((res) => {
        return res.text();
      });

      this.readme = marked(readme);
      this.$set(this, 'readme', marked(readme));
    }
  },
};
</script>

<template>
  <div>
    <div v-if="readme" v-html="readme" class="content leading-7 pb-20" />
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
