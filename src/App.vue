<template>
  <div id="app">
    <header class="flex items-center bg-gray-800 text-white">
      <nav>
        <router-link to="/"><h2 class="p-5 bg-gray-600">Home</h2></router-link>
      </nav>
      <h1 class="p-4 text-center text-xl">Client Management</h1>
    </header>
    <main class="flex justify-center px-10 py-40 ">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

</style>
