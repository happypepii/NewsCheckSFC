<template>
  <div class="score_container">
    Overall
    <n-progress
      type="line"
      indicator-placement="inside"
      :color="themeVars.warningColor"
      :rail-color="changeColor(themeVars.warningColor, { alpha: 0.1 })"
      :percentage="overallPercentage"
    />
    Content
    <n-progress
      type="line"
      :color="themeVars.infoColor"
      :rail-color="changeColor(themeVars.infoColor, { alpha: 0.1 })"
      :percentage="contentPercentage"
      :indicator-text-color="themeVars.infoColor"
    />
    Source
    <n-progress
      type="line"
      :color="themeVars.infoColor"
      :rail-color="changeColor(themeVars.infoColor, { alpha: 0.1 })"
      :percentage="sourcePercentage"
      :indicator-text-color="themeVars.infoColor"
    />
    <h1>Score</h1>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { changeColor } from 'seemly';
import { useThemeVars } from 'naive-ui';
import { NProgress } from 'naive-ui';
import { outputData as externalOutputData } from '/src/useData.js';

export default defineComponent({
  components: {
    NProgress,
  },
  setup() {
    const themeVars = useThemeVars();
    const overallPercentage = ref(0);
    const contentPercentage = ref(0);
    const sourcePercentage = ref(0);
    const outputData = ref(null);

    watch(externalOutputData, (newData) => {
      if (newData && newData.reliability) {
        overallPercentage.value = parseInt(newData.reliability.overall, 10) || 0;
        contentPercentage.value = parseInt(newData.reliability.content, 10) || 0;
        sourcePercentage.value = parseInt(newData.reliability.source, 10) || 0;
      }
    });

    const fetchData = async () => {
      try {
        const response = await axios.get('/src/useData.js');
        outputData.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      changeColor,
      themeVars,
      overallPercentage,
      contentPercentage,
      sourcePercentage,
    };
  },
});
</script>

<style scoped>
.score_container {
  margin: 5% 5%;
  color: black;
}

h1 {
  color: darkgray;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}
</style>
