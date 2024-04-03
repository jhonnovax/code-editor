<script setup>
</script>

<template>
  <h1>Code Editors</h1>

  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/code-mirror">Code Mirror</RouterLink></li>
      <li><RouterLink to="/monaco-editor">Monaco Editor</RouterLink></li>
      <li><RouterLink to="/ace-editor">Ace Editor</RouterLink></li>
      <li><RouterLink to="/syntax-highlighted">Syntax Highlighted</RouterLink></li>
    </ul>
  </nav>

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

    li {
      padding: 10px;
    }
  }
}
</style>
