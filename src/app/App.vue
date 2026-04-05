<script setup lang="ts">
import Navbar from '@/components/navbar/navbar.vue';
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-[#0a0a0a] dark:text-white">
    <Navbar />
    <main class="w-full">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Reset default margins */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  display: block;
}
</style>
