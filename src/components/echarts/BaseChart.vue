<template>
  <div ref="chartEl" class="chart"></div>
</template>

<script setup>
import { defineProps, onMounted, ref, onBeforeUnmount, shallowRef, watch } from "vue";
import * as echarts from "echarts";
import { merge, throttle } from "lodash";

const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
});

const chart = shallowRef(null);
const chartEl = ref(null);

const setOption = (option) => {
  const baseOption = {
    title: {
      left: "center",
      top: 40,
      show: true,
    },
    grid: {
      top: "20%",
      left: "10%",
      bottom: "10%",
      containLabel: true,
    },
  };
  // 合并配置
  option = merge(baseOption, option);

  chart.value && chart.value.setOption(option);
};

const resizeChart = throttle(
  function () {
    chart.value.resize();
  },
  500,
  {
    leading: true,
    trailing: true,
  }
);

// watchEffect(() => {
//   console.log('onWatchEffect');
//   setOption(props.option);
// });

watch(
  () => props.option,
  (newValue, oldValue) => {
    setOption(newValue);
  }
);

const resizeObserver = new ResizeObserver(() => {
  resizeChart();
});

onMounted(() => {
  setTimeout(() => {
    chart.value = echarts.init(chartEl.value);
    setOption(props.option);
    window.addEventListener("resize", chart.value.resize);
    resizeObserver.observe(chartEl.value);
    // this.$once('hook:beforeDestroy', () => {
    //   resizeObserver.disconnect();
    //   window.removeEventListener('resize', chart.value.resize);
    // });
  }, 100);
});

onBeforeUnmount(() => {
  resizeObserver.disconnect();
  window.removeEventListener("resize", chart.value.resize);
});
</script>

<style lang="scss" scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
