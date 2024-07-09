<template>
  <div class="output">
    <n-input
      ref="outputInputRef"
      type="textarea"
      placeholder="Output"
      :autosize="{
        minRows: 14,
        maxRows: 18
      }" 
      readonly
      :value="bulletlist"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { outputData } from '/src/useData.js'; // Import outputData from useData.js

const bulletlist = ref(''); // Create a reactive ref

// Watch for changes in outputData and update bulletlist accordingly
watch(outputData, (newData) => {
  bulletlist.value = Object.values(newData.output).join('\n');
});

</script>

<style scoped>
/* Your scoped styles here */
</style>
