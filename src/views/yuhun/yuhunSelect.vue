<template>
  <div class="warpper">
    <el-col>
      <el-row>
        <h2>御魂套装：</h2>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="selectStore.suit">
          <el-checkbox v-for="item in yuhunInfo" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-divider></el-divider>

      <el-row>
        <h2>御魂位置：</h2>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="selectStore.pos">
          <el-checkbox v-for="item in pos" :key="item.value" :label="item.value">{{ item.label }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-divider></el-divider>

      <el-row>
        <h2>主属性：</h2>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="selectStore.mainAttrs">
          <el-checkbox v-for="item in attr" :key="item.value" :label="item.value">{{ item.label }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-divider></el-divider>

      <el-row>
        <h2>副属性：</h2>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="selectStore.attrs">
          <el-checkbox v-for="item in attr" :key="item.value" :label="item.value">{{ item.label }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <h2>不包含副属性：</h2>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="selectStore.noAttrs">
          <el-checkbox v-for="item in attr" :key="item.value" :label="item.value">{{ item.label }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <h2>等级：</h2>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="selectStore.level">
          <el-checkbox v-for="count in 16" :key="count - 1" :label="count - 1 + ''"></el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <h2>腿数：</h2>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="selectStore.leg">
          <el-checkbox v-for="count in 5" :key="count - 1" :label="count - 1 + ''"></el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-divider></el-divider>
      <el-row
        ><el-button @click="OnClick">计算</el-button>
        <div>筛选后的数量：{{ num }}</div>
      </el-row>
    </el-col>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { yuhunInfo } from "@/data/yuhuninfo.js";
import { selectYuhun } from "@/lib/select.js";
import useSelectStore from "@/store/select.js";
const selectStore = useSelectStore();
const pos = [
  {
    value: 0,
    label: "一号位",
  },
  {
    value: 1,
    label: "二号位",
  },
  {
    value: 2,
    label: "三号位",
  },
  {
    value: 3,
    label: "四号位",
  },
  {
    value: 4,
    label: "五号位",
  },
  {
    value: 5,
    label: "六号位",
  },
];

const attr = [
  {
    label: "攻击加成",
    value: "AttackRate",
  },
  {
    label: "生命加成",
    value: "HpRate",
  },
  {
    label: "防御加成",
    value: "DefenseRate",
  },
  {
    label: "攻击",
    value: "Attack",
  },
  {
    label: "生命",
    value: "Hp",
  },
  {
    label: "防御",
    value: "Defense",
  },
  {
    label: "速度",
    value: "Speed",
  },
  {
    label: "暴击",
    value: "CritRate",
  },
  {
    label: "暴击伤害",
    value: "CritPower",
  },
  {
    label: "效果命中",
    value: "EffectHitRate",
  },
  {
    label: "效果抵抗",
    value: "EffectResistRate",
  },
];

const num = ref(0);

const OnClick = () => {
  //selectStore.suit = suitList;

  num.value = selectYuhun();
  //console.log("数量：", yuhunList);
};
</script>

<style lang="scss" scoped></style>
