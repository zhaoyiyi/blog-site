<template>
  <ul class="list">
    <li v-for="post in posts" :key="post.url" @click="navigateToPost(post.name)">
      <h2>{{ post.title }}</h2>
      <p>{{ post.date }}</p>
    </li>
  </ul>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex';

  export default {
    name: 'Posts',
    computed: {
      ...mapGetters(['posts']),
      ...mapState(['isLoading']),
    },
    methods: {
      navigateToPost(name) {
        this.$router.push({ name: 'Post', params: { name } });
      },
      ...mapActions(['getPosts']),
    },
    created() {
      this.getPosts();
    },
  };
</script>
