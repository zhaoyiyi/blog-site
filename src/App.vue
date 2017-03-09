<template>
  <div id="app">
    <header>
      <h1>Yi Zhao</h1>
    </header>
    <nav>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/posts">Projects</router-link>
      <router-link to="/about">About</router-link>
      <span style="flex: 1"></span>
      <a href="https://github.com/zhaoyiyi" class="icon-github-circled"></a>
      <a href="#" class="icon-linkedin"></a>
    </nav>
    <main>
      <router-view></router-view>
    </main>
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
  header {
    text-align: center;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 960px;
    margin: 0 auto 2rem;
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
  [class^="icon-"] {
    font-size: 1.5rem;
  }

  main {
    max-width: 960px;
    margin: 0 auto;
  }

</style>
