<template>
  <div class="container">
    <Header />
    <n-split direction="vertical" style="height: 100vh" :default-size="0.35">
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
  margin-top: 2%;
}
.container {
  background-color: #f0f0f0;
}
.scoreBar {
  width: 55%;
  border-radius: 10px;
  background-color: #d1d1d1;
}
.news {
  min-width: 35%;
  border-radius: 10px;
  /* background-color: #d1d1d1; */
  /* background-color: white; */
}
.InputArea {
  width: 40%;
  border-radius: 10px;
  background-color: #ffffff;
}
.OutputArea {
  width: 40%;
  border-radius: 10px;
  background-color: #d1d1d1;
}
</style>
