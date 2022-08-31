<template>
  <div class="choice">
    <div
      class="icon"
      v-for="(suit, index) in calcStore.getSuitList"
      :key="'suit' + index"
      @click="openDialog(index)"
    >
      <img :src="`/src/assets/img/yuhun/${suit.id}.png`" alt="御魂图标" />
    </div>
    <div
      class="icon icon-add"
      v-show="calcStore.getSuitCount < 6"
      @click="openDialog(calcStore.getSuitLength)"
    >
      <i class="el-icon-plus"></i>
    </div>
    <div class="clear-btn" @click="resetStatus" v-show="calcStore.getSuitCount > 0">清空</div>
    <div class="dialog" v-show="data.isShow">
      <div class="marker"></div>
      <div class="dialog__top">
        <div class="tabs">
          <div class="tab-item" @click="tabClick(true)">
            <div class="checkbox" :class="{ 'is-checked': data.checked4 }"></div>
            <span>四件套</span>
          </div>
          <div class="tab-item" @click="tabClick(false)">
            <div class="checkbox" :class="{ 'is-checked': !data.checked4 }"></div>
            <span>两件套</span>
          </div>
        </div>
        <div class="close-btn" @click="data.isShow = false">×</div>
      </div>
      <div class="dialog__body">
        <div class="yuhun-items">
          <div
            class="yuhun-item"
            v-for="yuhun in suitList"
            :key="yuhun.id"
            @click="changeSuit(yuhun.id)"
          >
            <img :src="`/src/assets/img/yuhun/${yuhun.id}.png`" alt="御魂图标" />
            <div class="desc">
              <span>{{ yuhun.name }}</span>
              <span>{{ yuhun.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

import { yuhunInfo, twoSuitOptions } from '@/data/yuhuninfo.js';
import useCalcStore from '@/store/calc.js';

const calcStore = useCalcStore();

const data = reactive({
  // 是否打开弹窗
  isShow: false,
  // 是否勾选四件套
  checked4: true,
  // 点击了第n个位置的套装
  idxOfSuit: 0,
});

const suitList = computed(() => {
  if (data.checked4) {
    return yuhunInfo;
  } else {
    return twoSuitOptions.concat(yuhunInfo);
  }
});

const resetStatus = () => {
  calcStore.resetSuit();
  data.isShow = false;
  data.checked4 = true;
  data.idxOfSuit = 0;
};

const openDialog = (index = 0) => {
  data.idxOfSuit = index;
  data.isShow = true;
  if (index === 0 && !calcStore.is222) {
    data.checked4 = true;
  }
};

const changeSuit = (id) => {
  // 四件套
  if (data.checked4) {
    if (calcStore.getSuitCount < 4) {
      calcStore.addSuit({ id, count: 4 });
    } else {
      calcStore.updateSuit(0, id);
    }
    data.checked4 = false;
  } else {
    // 二件套 判断是新增还是修改
    if (calcStore.getSuitCount < 2 || data.idxOfSuit === calcStore.getSuitLength) {
      calcStore.addSuit({ id, count: 2 });
    } else {
      calcStore.updateSuit(data.idxOfSuit, id);
    }
  }
  data.isShow = false;
};

const tabClick = (bool) => {
  if (calcStore.is222) {
    console.log(`当前已选择${calcStore.getSuitCount}个御魂，无法替换成四件套`);
    return false;
  }
  data.checked4 = bool;
};
</script>

<style lang="scss" scoped>
.choice {
  display: flex;
  gap: 8px;
  position: relative;
  align-items: center;
  .clear-btn {
    cursor: pointer;
    margin-left: 8px;
  }
  .icon {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    &.icon-add {
      background-color: #856d5d;
      color: #c9b6a4;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 16px;
        font-weight: 900;
      }
    }
  }
}

.dialog {
  user-select: none;
  position: absolute;
  top: -100px;
  left: 0;
  z-index: 2021;
  width: 310px;
  height: 450px;

  .marker {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: -1;
  }
  .dialog__top {
    display: flex;
    background-color: #584440;
    justify-content: space-between;
    align-items: center;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    .tabs {
      display: flex;
      padding: 4px;
      .tab-item {
        padding: 8px;
        // border: 1px solid #b48d5a;
        display: flex;
        cursor: pointer;
        color: #d1c8b6;
        .checkbox {
          width: 20px;
          height: 20px;
          border: 1px solid #d1c8b6;
          margin-right: 8px;
          position: relative;
          &.is-checked {
            background-color: #3541a3;
            &::before {
              content: '✔';
              color: #fff;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
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
    height: 400px;
    background-color: #d6c8b8;
    box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
    overflow-y: scroll;
    // margin-left: 4px;
    padding: 2px 0;
    /*滚动条样式*/
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
    .yuhun-items {
      padding: 8px;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-left: 2px;
      .yuhun-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 142px;
        height: 60px;
        border: 1px solid #b48d5a;
        padding: 2px 8px;
        &:hover {
          background: #b48d5a;
          color: #d6c8b8;
        }
        img {
          width: 44px;
          height: 44px;
        }
        .desc {
          margin-left: 16px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
