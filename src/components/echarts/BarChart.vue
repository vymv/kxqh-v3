<template>
  <base-chart :option="option"></base-chart>
</template>

<script setup>
import { sum } from "lodash";

import BaseChart from "@/components/echarts/BaseChart.vue";
import { computed, defineProps } from "vue";
import { yuhunInfo } from "@/data/yuhuninfo.js";
import { getSuitPosCountByScore } from "@/utils/analysis.js";

// const props = defineProps({
//   data: Array,
//   legend: String,
//   title: String,
//   max: {
//     type: Number,
//     default: 20,
//   },
// });

let xAxisData = [];
let series = [
  {
    name: "总数",
    type: "bar",
    data: [],
    emphasis: {
      focus: "series",
    },
  },
  {
    name: "1号位",
    type: "bar",
    stack: "total",
    label: {
      show: false,
    },
    emphasis: {
      focus: "series",
    },
    data: [],
  },
  {
    name: "2号位",
    type: "bar",
    stack: "total",
    label: {
      show: false,
    },
    emphasis: {
      focus: "series",
    },
    data: [],
  },
  {
    name: "3号位",
    type: "bar",
    stack: "total",
    label: {
      show: false,
    },
    emphasis: {
      focus: "series",
    },
    data: [],
  },
  {
    name: "4号位",
    type: "bar",
    stack: "total",
    label: {
      show: false,
    },
    emphasis: {
      focus: "series",
    },
    data: [],
  },
  {
    name: "5号位",
    type: "bar",
    stack: "total",
    label: {
      show: false,
    },
    emphasis: {
      focus: "series",
    },
    data: [],
  },
  {
    name: "6号位",
    type: "bar",
    stack: "total",
    label: {
      show: false,
    },
    emphasis: {
      focus: "series",
    },
    data: [],
  },
];

yuhunInfo.forEach((yuhun) => {
  xAxisData.push(yuhun.name);
  const score = getSuitPosCountByScore(yuhun.name, ["S"], 6);
  //console.log(score);
  score.forEach((s, index) => {
    series[index + 1].data.push(s);
  });
  series[0].data.push(sum(score));
});

const option = computed(() => ({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {
    data: series.map((item) => item.name),
  },
  yAxis: {
    type: "value",
  },
  xAxis: {
    type: "category",
    data: xAxisData,
    axisLabel: {
      interval: 0,
      formatter(text) {
        return text.split("").join("\n");
      },
    },
  },
  series,
}));
</script>

<style lang="scss" scoped></style>
