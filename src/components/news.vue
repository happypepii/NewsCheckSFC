<template>
    <n-card title="更多新聞" style="margin: 5% 5%; max-width: 90%; border-radius: 15px;">
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
  </n-card>
  </template>
  
  <script setup>
  </script>

<style scoped>
.tag {
  position: absolute; /* Set position to absolute */
  bottom: 10px; /* Adjust as needed */
  right: 10px; /* Adjust as needed */
}
    
</style>