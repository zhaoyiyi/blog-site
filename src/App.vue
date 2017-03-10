<template>
  <div id="app">
    <header>
      <h1>Yi Zhao</h1>
    </header>
    <nav>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/projects">Projects</router-link>
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
    font-size: 1.2rem;
    border-bottom: 1px solid black;
  }

  nav a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    margin-right: 1rem;
  }
  nav a:hover {
    text-decoration: underline;
  }
  [class^="icon-"] {
    font-size: 2rem;
  }

  main {
    max-width: 960px;
    margin: 0 auto;
  }

</style>
<style>
  code {
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px
  }
  ul.list {
    list-style: none;
    padding: 0;
  }
  .list li {
    border: 2px solid black;
    margin: 1rem 0;
    padding: 1rem;
  }
  .list li:hover {
    cursor: pointer;
  }
  .list h2, .list p {
    margin: 0.5rem;
  }
</style>
