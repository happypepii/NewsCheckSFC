<template>
    <h1>More news</h1>
    <n-tabs type="segment" animated>
      <n-tab-pane name="News1" tab="News1">
        <button class="card-btn" @click="openNewTab">
        <n-card title="何時淘汰「未捕獲碳排放」的燃煤發電？G7達成共識：2035年" size="small">
        sky news
        <n-tag :bordered="false" type="success" class="tag">
        60%
        </n-tag>
        </n-card>
      </button>
      </n-tab-pane>
      <n-tab-pane name="News2" tab="News2">
        <n-card title="卡片">
        卡片内容
        </n-card>
      </n-tab-pane>
      <n-tab-pane name="News3" tab="News3">
        <n-card title="卡片">
        卡片内容
        </n-card>
      </n-tab-pane>
    </n-tabs>
  </template>
  
  <script setup>
  const openNewTab = () => {
  const newWindow = window.open('https://www.storm.mg/article/5106316', '_blank', 'width=800,height=600');
  // if (!newWindow) {
  //   alert('Please allow popups for this website');
  // }
  }
  </script>

<style scoped>
h1{
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
}
    
</style>