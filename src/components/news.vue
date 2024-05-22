<template>
    <div class="news_container">
    <h1>More news</h1>
    <n-tabs type="line" animated>
      <n-tab-pane name="News1" tab="News1">
        <n-card title="何時淘汰「未捕獲碳排放」的燃煤發電？G7達成共識：2035年" >
        sky news
        <n-tag :bordered="false" type="success" class="tag">
        60%
        </n-tag>
        </n-card>
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
  </div>
  </template>
  
  <script setup>
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
    
</style>