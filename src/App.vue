
<template>
  <Header />
  <n-split direction="vertical" style="height: 100vh">
    <template #1> 
      <div class="Pane1">
        <div class="scoreBar">
          Pane 1 
          <Score />
        </div>
        <div class="3News">
          <News />
        </div>
      </div>

    </template>

    <template #2> 
      <div class="Pane2">
        <div class="InputArea">
          <Input />
        </div>
        <N-Button>GO</N-Button>
        <div class="OutputArea">
          <Output />
        </div>
      </div>
    </template>
  </n-split>
</template>


<script setup>
  import { NSplit, NButton } from "naive-ui";
  import Header from "./components/header.vue";
  import Score from "./components/score.vue";
  import News from "./components/news.vue";
  import Input from "./components/input.vue";
  import Output from "./components/output.vue";
</script>

<style scoped>
.Pane1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.Pane2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2%;
}
</style>