<template>
  <div class="container">
    <Header />
    
    <n-split v-model:size="split" direction="vertical" style="height: 100vh" disabled>
      <template #1>
        <div class="Pane1">
          <div class="scoreBar">
            <Score />
          </div>
          <div class="news">
            <News />
          </div>
        </div>
      </template>
      <n-divider />
      <template #2>
        <div class="Pane2">
          <div class="InputArea">
            <Input />
          </div>
          <n-button strong secondary round> Submit </n-button>
          <div class="OutputArea">
            <Output />
          </div>
        </div>
      </template>
    </n-split>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
import Score from "./components/score.vue";
import News from "./components/news.vue";
import Input from "./components/input.vue";
import Output from "./components/output.vue";

import { ref } from "vue";
const split = ref(0.4);
watch(split, (newValue, oldValue) => {
  console.log("Split value changed:", newValue);
});
</script>

<style scoped>
.Pane1 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.Pane2 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.container {
  background-color: #f0f0f0;
}
.scoreBar {
  width: 55%;
  min-height: 250px;
  border-radius: 10px;
  background-color: #d1d1d1;
}
.news {
  width: 35%;
  min-height: 250px;
  border-radius: 10px;
  background-color: white; 
  padding: 1% 2%;
}
.InputArea {
  width: 40%;
  border-radius: 10px;
  background-color: #ffffff;
}
.OutputArea {
  width: 40%;
  border-radius: 10px;
  /* background-color: #d1d1d1; */
}
</style>
