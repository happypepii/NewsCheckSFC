<template>
  <div class="score_container">
    Overall
    <n-progress
      type="line"
      indicator-placement="inside"
      :color="themeVars.warningColor"
      :rail-color="changeColor(themeVars.warningColor, { alpha: 0.1 })"
      :percentage="65"
    />
    Content
    <n-progress
      type="line"
      :color="themeVars.infoColor"
      :rail-color="changeColor(themeVars.infoColor, { alpha: 0.1 })"
      :percentage="80"
      :indicator-text-color="themeVars.infoColor"
    />
    Source
    <n-progress
      type="line"
      :color="themeVars.infoColor"
      :rail-color="changeColor(themeVars.infoColor, { alpha: 0.1 })"
      :percentage="50"
      :indicator-text-color="themeVars.infoColor"
    />
    <h1>Score</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { changeColor } from "seemly";
import { useThemeVars } from "naive-ui";
import { NProgress } from "naive-ui";

export default defineComponent({
  components: {
    NProgress,
  },

  setup() {
    return {
      changeColor,
      themeVars: useThemeVars(),
    };
  },
});
</script>
<style scoped>
.score_container{
  margin: 5% 5%;
  height: 150px;
}
h1{
  color: darkgray;
}
</style>
