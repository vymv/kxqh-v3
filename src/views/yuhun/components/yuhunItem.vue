<template>
  <div class="box">
    <div class="box-top">
      <div class="box-top__left">
        <div class="icon">
          <img :src="`/src/assets/img/yuhun/${props.yuhun.suitInfo.id}.png`" alt="御魂图标" />
        </div>
        <div class="desc">
          <span>{{ props.yuhun.suitInfo.name }} +{{ props.yuhun.level }}</span>
          <span>{{ props.yuhun.quality }}星</span>
        </div>
      </div>
      <div class="box-top__right">{{ props.yuhun.pos + 1 }}号位</div>
    </div>

    <ul class="attrs">
      <li class="attr-item">
        <span>{{ attrDict[props.yuhun.base_attr.type] }}</span>
        <span>+{{ formatValue(props.yuhun.base_attr.value, 0) }}</span>
      </li>
      <li
        class="attr-item"
        v-for="(attr, index) in props.yuhun.random_attrs"
        :key="props.yuhun.id + '-' + index"
      >
        <span>{{ attrDict[attr.type] }}</span>
        <span>+{{ formatValue(attr.value, zoom ? 4 : 0) }}</span>
      </li>
    </ul>
    <div class="feature">
      <span v-if="props.yuhun.single_attrs.length === 0">
        2件套属性：{{ props.yuhun.suitInfo.type }}
      </span>
      <span v-else>固有属性：{{ props.yuhun.single_attrs.type }}</span>
      <br />
      <div class="zoom">
        <span>放大镜</span>
        <el-switch
          v-model="zoom"
          :width="36"
          active-color="#3a200d"
          inactive-color="#3a200d"
        ></el-switch>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

import { attrDict } from '@/data/yuhuninfo.js';
import { formatValue } from '@/utils/format.js';

const props = defineProps({
  yuhun: {
    type: Object,
    require: true,
  },
});

// 是否开启放大镜
const zoom = ref(false);
</script>

<style lang="scss" scoped>
.box {
  width: 232px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #d6c9b9;
  box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
  .box-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    .box-top__left {
      display: flex;
      align-items: center;
      .desc {
        display: flex;
        flex-direction: column;
      }
      .icon {
        width: 36px;
        height: 36px;
        margin-right: 16px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .attrs {
    height: 125px;
    display: flex;
    flex-direction: column;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #a68d70;
    .attr-item {
      width: 200px;
      height: 20px;
      color: #1e1e1e;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2px 0;
      font-size: 14px;
      &:first-child {
        color: #d96932;
      }
    }
  }
  .feature {
    padding-top: 8px;
    font-size: 14px;
    color: #777;
    display: flex;
    flex-direction: column;
    .zoom {
      span {
        margin-right: 8px;
      }
    }
  }
}
</style>
