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
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 分配空間使header和footer保持在上下 */
  background-color: #f0f0f0;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.router-view-container {
  display: flex;
  flex: 1;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  width: 100%;
  padding: 20px; 
}
</style>
