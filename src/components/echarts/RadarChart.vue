<template>
  <base-chart :option="option"></base-chart>
</template>

<script setup>
import * as echarts from 'echarts';

import BaseChart from '@/components/echarts/BaseChart.vue';
import { defineProps } from '@vue/runtime-core';
import { computed } from 'vue';

const props = defineProps({
  data: Array,
  legend: String,
  title: String,
  max: {
    type: Number,
    default: 20,
  },
});

const option = computed(() => ({
  title: {
    text: props.title,
    show: true,
  },
  legend: {
    top: '10%',
    data: [props.legend],
  },
  color: '#ff917c',
  radar: {
    // shape: 'circle',
    radius: '50%',
    center: ['50%', '55%'],
    startAngle: 120,
    indicator: [
      { name: '输出', max: 100 },
      { name: '治疗', max: 100 },
      { name: '速度命中', max: 100 },
      { name: '速度抵抗', max: 100 },
      { name: '双堆', max: 100 },
      { name: '速度', max: 100 },
    ],
  },
  series: [
    {
      name: props.legend,
      type: 'radar',
      label: {
        show: true,
      },
      data: [
        {
          value: props.data,
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(255, 145, 124, 0.1)',
                offset: 0,
              },
              {
                color: 'rgba(255, 145, 124, 0.9)',
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
