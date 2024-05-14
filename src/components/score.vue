<template>
  <n-progress
    type="line"
    indicator-placement="inside"
    :color="themeVars.errorColor"
    :rail-color="changeColor(themeVars.errorColor, { alpha: 0.2 })"
    :percentage="20"
  />
  <n-progress
    type="line"
    :color="themeVars.warningColor"
    :rail-color="changeColor(themeVars.warningColor, { alpha: 0.2 })"
    :percentage="20"
    :indicator-text-color="themeVars.warningColor"
  />
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
