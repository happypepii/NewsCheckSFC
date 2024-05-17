<template>
  <n-card @click="$router.push('/link')" title="Mass bleaching of coral reefs caused by climate change and warming oceans, scientists say" size="small" >
    <template #cover>
      <img
        src="https://e3.365dm.com/24/04/1600x900/skynews-coral-reefs-bleaching_6522674.jpg?20240415175941"
      />
    </template>
    <div class="source" style="font-size: smaller">
      Sky News
    </div>
    <n-tag :bordered="false" type="success" class="tag">
      80%
    </n-tag>
  </n-card>
</template>

<script setup>
import { NCard, NTag } from "naive-ui";
</script>
<style scoped>
.n-card {
  box-shadow: 0px 0px 15px rgba(105, 92, 92, 0.3);
  height: 80%;
  width: 80%;
}

.n-card:hover {
    border: 1px solid #777;
    cursor: pointer;
}

.tag {
  position: absolute; /* Set position to absolute */
  bottom: 10px; /* Adjust as needed */
  right: 10px; /* Adjust as needed */
}

.source {
  position: absolute;
  bottom: 10px;
}

</style>
 