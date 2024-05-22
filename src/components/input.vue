<template>
    <div class="body-container">
      <n-space vertical>
        <n-input type="url"
          v-model:value="value"
          
          placeholder="URL"
          class="custom1"
        />
       
        <n-input type="textarea"
          v-model:value="textareaValue"
          placeholder="News input"
          class="custom2"
        />
      </n-space>
    </div>
  </template> 
  
  <script>
  import { defineComponent, ref } from "vue";
  import { NInput, NSpace, NButton } from "naive-ui"; // Import the components you need
  
  export default defineComponent({
    components: { NInput, NSpace, NButton }, // Register the components
    setup() {
      const value = ref(null); // Separate ref for text input
      const textareaValue = ref(null); // Separate ref for textarea input
  
      return {
        value,
        textareaValue,
      };
    },
  });
  </script>
  
  <style scoped>
  
  .body-container {
    justify-content: center;
    align-items: center;
    margin: 5% 3%; 
  }
  .custom1 {
    width: 100%; 
  }
  
  .custom2 {
    width: 100%; 
    height: 230px;
  }
  
  </style>
  
  
  