<script setup>
import { NButton, NInput } from "naive-ui";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="body-container">
    <div class="left-content">
      <h1 style="font-weight: bold;">Identify Questionable</h1>
      <br>
      <div class="input-group">
        <n-input v-model:value="value" type="text" placeholder="帳號" :maxlength="20" class="input-field" />
      </div>
      <div class="input-group">
        <n-input type="password" show-password-on="mousedown" placeholder="密碼" :maxlength="12" class="input-field" />
      </div>
      <n-button @click="$router.push('/Home')">Get Score</n-button>
    </div>
    <div class="right-content">
      <img class="img" src="../Images/News.gif" alt="圖片" />
    </div>
  </div>
</template>

<style scoped>
.img {
  border: none;
  border-radius: 20px; /* 設定圓形 */
  max-width: 90%;
  margin: 5% 0;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3); 
}

.body-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* 背景顏色 */
  width: 90%;
  border-radius: 20px; /* 設定圓形 */
  margin: 0 auto; /* 水平置中 */
  margin-bottom: 20px;
}

.left-content {
  flex: 1;
  text-align: center;
  padding: 20px; /* 增加內間距 */
}

.right-content {
  flex: 1;
  text-align: center;
  max-width: 50%;
}

.input-group {
  margin-bottom: 15px; /* 輸入框組之間的間距 */
}

.input-field {
  width: 100%; /* 使輸入框佔滿父容器寬度 */
  max-width: 300px; /* 最大寬度 */
  padding: 10px; /* 增加內間距 */
}
</style>
