<template>
  <div id="app">
    <header>
      <h1>Client Management</h1>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
}

header {
  background-color: #42b983;
  color: white;
  padding: 1em 0;
}

header h1 {
  margin: 0;
}

nav {
  margin: 1em 0;
}

nav a {
  color: white;
  margin: 0 1em;
  text-decoration: none;
}

main {
  padding: 2em;
}
</style>
