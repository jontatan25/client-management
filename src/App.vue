<template>
  <div id="app">
    <header class="flex items-center bg-gray-800 text-white">
      <nav>
        <router-link to="/"><h2 class="p-8 bg-gray-600">Home</h2></router-link>
      </nav>
      <h1 class="p-7 text-center text-2xl lato-bold">Client Management Tool</h1>
    </header>
    <main class="flex justify-center px-10 py-20 ">
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
