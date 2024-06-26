<script setup>
import Header from "./components/header.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app-container">
    <Header />
    <div class="router-view-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直置中 */
  background-color: #f0f0f0;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.router-view-container {
  width: 100%; /* 設置寬度 */
  max-width: 100%; /* 最大寬度 */
}
</style>
