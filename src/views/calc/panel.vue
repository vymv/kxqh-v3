<template>
  <div class="warpper">
    <pick-hero></pick-hero>
    <el-divider></el-divider>
    <div class="panels">
      <div class="panel panel__left">
        <div class="title">御魂指定</div>
        <div class="items">
          <div class="item">
            <div class="label">御魂套装</div>
            <choice-yuhun></choice-yuhun>
          </div>
          <div class="item">
            <div class="label">效果指标</div>
            <el-select class="selector" v-model="calcStore.target" placeholder="请选择">
              <el-option v-for="item in targetOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
          <div class="item">
            <div class="label">2号位主属性</div>
            <el-select class="selector" v-model="calcStore.mainAttrs.pos2" multiple collapse-tags placeholder="请选择">
              <el-option v-for="item in pos2AttrOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
          <div class="item">
            <div class="label">4号位主属性</div>
            <el-select class="selector" v-model="calcStore.mainAttrs.pos4" multiple collapse-tags placeholder="请选择">
              <el-option v-for="item in pos4AttrOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
          <div class="item">
            <div class="label">6号位主属性</div>
            <el-select class="selector" v-model="calcStore.mainAttrs.pos6" multiple collapse-tags placeholder="请选择">
              <el-option v-for="item in pos6AttrOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="panel panel__right">
        <div class="title">高级定制</div>
        <div class="items">
          <div class="item">
            <div class="label">属性限制</div>
            <limit-attr></limit-attr>
          </div>
          <div class="item">
            <div class="label">排除已收藏的方案的御魂</div>
          </div>
          <div class="item">
            <div class="label">御魂选择范围</div>
            <div class="radio-items">
              <el-radio v-model="calcStore.unWeared" :label="false">全 部</el-radio>
              <el-radio v-model="calcStore.unWeared" :label="true">未装备</el-radio>
            </div>
          </div>
          <div class="item">
            <div class="label">星级等级限制</div>
            <div class="check-items">
              <el-checkbox v-model="calcStore.onlySix">仅六星</el-checkbox>
              <el-checkbox v-model="calcStore.onlyFull">仅满级</el-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="">
      <el-button size="mini" type="primary" round @click="start">开始计算</el-button>
      <span>{{ calcStore.$state.suitList }}</span>
    </div>
  </div>
</template>

<script setup>
import PickHero from "./component/PickHero.vue";
import ChoiceYuhun from "./component/ChoiceYuhun.vue";
import LimitAttr from "./component/LimitAttr.vue";
import { targetOptions, pos2AttrOptions, pos4AttrOptions, pos6AttrOptions } from "@/data/calc.js";
import useCalcStore from "@/store/calc.js";
import { pruneYuhunList, makeCombination } from "@/lib/calc.js";

const calcStore = useCalcStore();

const start = () => {
  const yuhunList = pruneYuhunList();
  //console.log(yuhunList);
  const comboList = makeCombination();
  //console.log(comboList);
};
</script>

<style lang="scss" scoped>
.warpper {
  flex-direction: column;
  user-select: none;
}

.panels {
  display: flex;
  gap: 40px;
  background-color: #d6c8b8;
  box-shadow: inset 0 0 0 1px #3a200d, inset 0 0 0 2px #aa8559, inset 0 0 2px 3px #261a0d;
  padding: 16px;
  .title {
    margin-bottom: 16px;
    margin-left: 36px;
    padding-left: 8px;
    font-size: 20px;
    font-weight: 900;
    font-family: "STCaiyun";
    color: #826b5a;
    display: list-item;
    &::marker {
      content: "🌙";
    }
  }
  .panel {
    .items {
      display: flex;
      flex-direction: column;
      gap: 16px;
      border: 1px solid #b4a696;
      padding: 16px;
      background-color: #cbbfb0;
      border-radius: 4px;
      .item {
        display: flex;
        align-items: center;
        width: 320px;
        .label {
          color: #2c2824;
        }
      }
    }
    &.panel__left {
      .item {
        .selector {
          width: 180px;
          :deep(.el-input__inner) {
            background-color: #826b5a;
            border-radius: 0;
            border: none;
            color: #c5b3a1;
            padding: 0 12px;
            &::-webkit-input-placeholder {
              /* WebKit browsers 适配谷歌 */
              color: #c5b3a1;
            }
          }
          :deep(.el-tag) {
            background-color: #826b5a;
            border-radius: 0;
            border-color: #c5b3a1;
            border: none;
            color: #c5b3a1;
            .el-icon-close {
              background-color: #c5b3a1;
              color: #8a5555;
            }
          }
        }

        .label {
          width: 140px;
        }
      }
    }
    &.panel__right {
      .items {
        gap: 8px;
        .item {
          flex-direction: column;
          gap: 8px;
          .label {
            width: 100%;
          }
          .radio-items {
            :deep(.el-radio__inner) {
              background-color: #4b5ee9;
              border-color: #3c2e1a;
              width: 20px;
              height: 20px;
              &::after {
                height: 6px;
                width: 6px;
              }
            }
            :deep(.el-radio__label) {
              color: #2c2824;
            }
          }
          .check-items {
            :deep(.el-checkbox__inner) {
              border-radius: 6px;
              background-color: #4b5ee9;
              border-color: #3c2e1a;
              width: 20px;
              height: 20px;
              &::after {
                left: 7px;
                top: 2px;
                height: 12px;
                border-width: 2px;
              }
            }
            :deep(.el-checkbox__label) {
              color: #2c2824;
            }
          }
        }
      }
    }
  }
}
</style>
