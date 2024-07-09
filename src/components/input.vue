<template>
  <div class="body-container">
    <n-space vertical>
      <n-input
        v-model:value="url"
        type="url"
        placeholder="URL"
        class="custom1"
      />
      <n-input
        v-model:value="article"
        type="textarea"
        placeholder="News input"
        class="custom2"
        :autosize="{ maxRows: 12 }"
      />
      <n-button strong secondary round @click="submitData">Submit</n-button>
    </n-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { postData } from '@/useData';

const url = ref('');
const article = ref('');

const submitData = async () => {
  const responseData = postData(url.value, article.value)
  console.log('Response from Flask:', responseData);
};
</script>

<style scoped>
.body-container {
  justify-content: center;
  align-items: center;
  margin: 2% 3%;
}

.custom1 {
  width: 100%;
}

.custom2 {
  width: 100%;
  min-height: 230px;
}
</style>
