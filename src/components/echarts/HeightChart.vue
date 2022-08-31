<template>
  <base-chart :option="option"></base-chart>
</template>

<script setup>
import * as echarts from "echarts";

import BaseChart from "@/components/echarts/BaseChart.vue";
import { defineProps } from "@vue/runtime-core";
import { computed } from "vue";

const props = defineProps({
  name: Array,
  count15: Array,
  countall: Array,
});

const option = computed(() => ({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: props.name,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        interval: 0,
        formatter(text) {
          return text.split("").join("\n");
        },
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "满级御魂",
      type: "bar",
      data: props.count15,
    },
    {
      name: "御魂总数",
      type: "bar",
      data: props.countall,
    },
  ],
}));
</script>
<style lang="scss" scoped></style>
