<template>
  <base-chart :option="option"></base-chart>
</template>

<script setup>
import * as echarts from "echarts";

import BaseChart from "@/components/echarts/BaseChart.vue";
import { defineProps } from "@vue/runtime-core";
import { computed } from "vue";

const props = defineProps({
  data: Array,
});

const option = computed(() => ({
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: props.data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
}));
</script>
<style lang="scss" scoped></style>
