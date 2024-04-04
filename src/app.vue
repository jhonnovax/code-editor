<script setup>
</script>

<template>
  <h1>Code Editors</h1>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  padding: 15px;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;

    li {
      padding: 10px;
    }
  }
}
</style>
