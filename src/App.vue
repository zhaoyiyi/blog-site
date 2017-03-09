<template>
  <div id="app">
    <nav>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/posts">Projects</router-link>
      <router-link to="/about">About</router-link>
      <span style="flex: 1"></span>
      <span class="icon-github-circled"></span>
      <span class="icon-linkedin"></span>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  nav {
    display: flex;
    align-items: center;
  }

  nav a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 1rem 0.5rem;
  }
  nav a:hover {
    text-decoration: underline;
  }

</style>
