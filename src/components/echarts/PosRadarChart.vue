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
  legend: String,
  title: String,
  max: Number,
});

const option = computed(() => ({
  title: {
    text: props.title,
    show: false,
    textStyle: {
      fontWeight: "normal",
      fontSize: 15,
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    top: "10%",
    data: [props.legend],
    //show: false,
  },
  color: "#ff917c",
  radar: {
    // shape: 'circle',
    radius: "50%",
    center: ["50%", "55%"],
    startAngle: 120,
    indicator: [
      { name: "一号位", max: props.max },
      { name: "二号位", max: props.max },
      { name: "三号位", max: props.max },
      { name: "四号位", max: props.max },
      { name: "五号位", max: props.max },
      { name: "六号位", max: props.max },
    ],
  },
  series: [
    {
      name: props.legend,
      type: "radar",
      tooltip: {
        trigger: "item",
      },
      label: {
        show: true,
        formatter: function (params) {
          if (params.value == null) return 0;
          if (params.value < 1.0) return (params.value * 100).toFixed(2);
          return params.value.toFixed(2);
        },
      },
      data: [
        {
          value: props.data,
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: "rgba(255, 145, 124, 0.1)",
                offset: 0,
              },
              {
                color: "rgba(255, 145, 124, 0.9)",
                offset: 1,
              },
            ]),
          },
        },
      ],
    },
  ],
}));
</script>

<style lang="scss" scoped></style>
