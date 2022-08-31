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
  name: String,
  max: Number,
});

const option = computed(() => ({
  xAxis: { max: 6 },
  yAxis: {
    type: "value",
    min: 0,
    max: function () {
      return props.max;
    },
  },
  tooltip: {
    position: "top",
  },
  // title: {
  //   text: props.name + "各位分布",
  //   left: "center",
  // },
  series: [
    {
      color: "rgba(255, 145, 124, 0.9)",
      label: {
        show: true,
        color: "rgba(255, 145, 124, 1.0)",
        position: "left",
        formatter: function (params) {
          return params.value[1].toFixed(2);
        },
      },
      // labelLayout: {
      //   moveOverlap: "shiftX",
      // },
      labelLayout: {
        hideOverlap: true,
      },
      itemStyle: {
        borderColor: "white",
      },
      symbolSize: 15,
      data: props.data,
      type: "scatter",
      // encode: { tooltip: [0, 1] },
    },
  ],
}));
</script>
<style lang="scss" scoped></style>
