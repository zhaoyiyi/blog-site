<template>
  <ul>
    <li v-for="post in posts" :key="post.url" @click="navigateToPost(post.name)">
      <h2>{{ post.title }}</h2>
      <p>{{ post.date }}</p>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Posts',
    computed: mapGetters({ posts: 'sortByDate' }),
    methods: {
      navigateToPost(name) {
        this.$router.push({ name: 'Post', params: { name } });
      },
    },
    created() {
      this.$store.dispatch('getPosts');
    },
  };
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    border: 2px solid black;
    margin: 1rem 0;
    padding: 1rem;
  }
  li:hover {
    cursor: pointer;
  }
  h2, p {
    margin: 0;
  }

</style>
