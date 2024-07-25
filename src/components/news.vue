<template>
  <div>
    <h1>More news</h1>
    <n-tabs type="segment" animated>
      <n-tab-pane v-for="(news, index) in newsItems" :key="index" :name="`News${index + 1}`" :tab="`News${index + 1}`">
        <button class="card-btn" @click="openNewTab(news.url)">
          <n-card v-if="news" :title="news.title" size="small">
            {{ news.source }}
            <n-tag :bordered="false" type="success" class="tag">
              {{ news.reliability }}
            </n-tag>
          </n-card>
        </button>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { outputData } from '/src/useData.js'; // Import outputData from useData.js
import axios from 'axios';

const newsItems = ref([])

watch(outputData, (newData) => {
  newsItems.value = [newData.news1, newData.news2, newData.news3];
});

const fetchData = async () => {
  try {
    const response = await axios.get('/src/useData.js');
    outputData.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const openNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'width=800,height=600');
  if (!newWindow) {
    alert('Please allow popups for this website');
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
h1 {
  color: darkgray;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

.tag {
  position: absolute; /* Set position to absolute */
  bottom: 10px; /* Adjust as needed */
  right: 10px; /* Adjust as needed */
}

.card-btn {
  text-align: left;
  border: none;
  background-color: transparent;
  width: 100%;
}
</style>
