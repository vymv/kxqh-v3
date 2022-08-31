<template>
  <div class="limit-attr">
    <div class="limit-btn" @click="openDialog">
      {{ limitTip }}
    </div>

    <!-- 弹窗 -->
    <div class="dialog" v-show="isShow">
      <div class="dialog__top">
        <div class=""></div>
        <div class="close-btn" @click="isShow = false">×</div>
      </div>
      <div class="dialog__body">
        <div class="body__left">
          <div class="attr-items">
            <div
              class="attr-item"
              :class="{
                'is-active': limitAttrIdx === attr.id,
                'is-edit': calcStore.limitList[attr.id].isLimited,
              }"
              v-for="attr in limitAttrList"
              :key="'attr' + attr.id"
              @click="changeLimitAttr(attr.id)"
            >
              {{ attr.label }}
            </div>
          </div>
        </div>
        <div class="body__right">
          <span>速度属性范围</span>
          <div class="limit-input">
            <el-input-number
              v-model="range[0]"
              controls-position="right"
              :min="attrMin"
              :step="1"
              @change="onChangeLimit"
            ></el-input-number>
            <span> - </span>
            <el-input-number
              v-model="range[1]"
              controls-position="right"
              :min="range[0]"
              :step="1"
              @change="onChangeLimit"
            ></el-input-number>
          </div>
          <div class="btns">
            <!-- <div class="btn">超星</div>
            <div class="btn">吃星</div> -->
            <div class="btn" @click="resetLimit">重置</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import { limitAttrList } from '@/data/calc.js'; // 限制属性列表
import { format45, formatValue } from '@/utils/format.js';
import useCalcStore from '@/store/calc.js';

const calcStore = useCalcStore();

// 是否打开弹窗
const isShow = ref(false);
const openDialog = () => {
  isShow.value = !isShow.value;
};

const limitTip = computed(() => {
  return calcStore.getLimitedList.length
    ? `已限制${calcStore.getLimitedList.length}种属性`
    : '添加+';
});

const attrMin = computed(() => {
  return formatValue(
    format45(calcStore.getHeroPanel[calcStore.limitList[limitAttrIdx.value].attr], 2),
    2,
    false,
  );
});

// 当前限制属性索引
const limitAttrIdx = ref(3);
const range = computed(() => {
  return calcStore.limitList[limitAttrIdx.value].interval;
});

const changeLimitAttr = (id) => {
  limitAttrIdx.value = id;
};

const onChangeLimit = () => {
  calcStore.limitList[limitAttrIdx.value].isLimited = true;
};

const resetLimit = () => {
  calcStore.limitList[limitAttrIdx.value].interval = [0, undefined];
  calcStore.limitList[limitAttrIdx.value].isLimited = false;
};
</script>

<style lang="scss" scoped>
.limit-attr {
  position: relative;
  .limit-btn {
    cursor: pointer;
    width: 160px;
    text-align: center;
    height: 28px;
    line-height: 28px;
    background-color: #e6dbcd;
    color: #917a6c;
    border: 1px solid #917a6c;
  }
}

.dialog {
  user-select: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2021;
  width: 720px;
  // height: 300px;
  .dialog__top {
    height: 36px;
    display: flex;
    background-color: #584440;
    justify-content: space-between;
    align-items: center;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    .close-btn {
      font-size: 18px;
      width: 20px;
      height: 20px;
      color: #fff;
      margin-right: 8px;
      cursor: pointer;
    }
  }
  .dialog__body {
    height: 240px;
    background-color: #d6c8b8;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    padding: 2px 0;
    display: flex;
    gap: 16px;
    padding: 8px 16px;
    .body__left {
      width: 50%;

      display: flex;

      justify-content: center;
      align-items: center;
      .attr-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 16px 24px;
        .attr-item {
          cursor: pointer;
          width: 140px;
          text-align: center;
          height: 28px;
          line-height: 28px;
          background-color: #e6dbcd;
          color: #584440;
          border: 1px solid #917a6c;
          transition: 0.6s;
          position: relative;
          &.is-active {
            color: #e6dbcd;
            background-color: #584440;
          }
          &.is-edit::after {
            content: '✍️';
            position: absolute;
            right: 4px;
          }
        }
      }
    }
    .body__right {
      width: 50%;
      border: 1px solid #b4a696;
      margin: 16px;
      background-color: #cbbfb0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      .limit-input {
        display: flex;
        gap: 8px;
        align-items: center;
        :deep(.el-input-number) {
          width: 93px;
        }
        :deep(.el-input__inner) {
          padding: 0;
          height: 30px;
          width: 60px;
          border-radius: 0;
          background-color: #cbbfb0;
          color: #584440;
          border: 1px solid #826b5a;
        }
        :deep(.el-input-number__decrease),
        :deep(.el-input-number__increase) {
          background-color: #826b5a;
          color: #c5b3a1;
          border: none;
        }
      }
      .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-top: 20px;
        .btn {
          cursor: pointer;
          width: 80px;
          text-align: center;
          height: 28px;
          line-height: 28px;
          background-color: #e6dbcd;
          color: #584440;
          border: 1px solid #917a6c;
          transition: 0.6s;
          &:hover {
            color: #e6dbcd;
            background-color: #584440;
          }
        }
      }
    }
  }
}
</style>
