<template>
  <div class="pick-hero">
    <el-cascader-panel
      class="pick-hero__left"
      :options="heroOptions"
      v-model="calcStore.hero"
    ></el-cascader-panel>
    <div class="pick-hero__right">
      <ul class="attr-items">
        <li class="attr-item" v-for="(value, key, index) in calcStore.getHeroPanel" :key="index">
          <span>{{ key }}</span>
          <span>{{ formatValue(format45(value, 2), 0) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';

import { heroOptions } from '@/data/hero.js';
import { format45, formatValue } from '@/utils/format.js';
import useCalcStore from '@/store/calc.js';

const calcStore = useCalcStore();

// 所选式神变化时，限制的面板会重置
watch(
  () => calcStore.hero,
  () => {
    calcStore.resetLimitList();
  },
  { deep: true },
);
</script>

<style lang="scss" scoped>
.pick-hero {
  display: flex;
  gap: 24px;
  width: 720px;
  padding: 8px;
  justify-content: space-around;

  .pick-hero__right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .attr-items {
      box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;

      padding: 12px;
      .attr-item {
        display: flex;
        justify-content: space-between;
        // flex-direction: column;
        align-items: baseline;
        width: 180px;
        &:not(:last-child) {
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
