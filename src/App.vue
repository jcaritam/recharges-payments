<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/header.component.vue';

</script>

<template>
  <HeaderComponent
    title="Recargas y pagos"
  />

  <main class="container_main">
    <RouterView />
  </main>
</template>

<style scoped>

.container_main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
