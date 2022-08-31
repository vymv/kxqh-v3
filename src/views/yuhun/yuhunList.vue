<template>
  <el-row>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
  </el-row>
  <el-divider></el-divider>
  <el-row>
    <ul class="infinite-list items" v-infinite-scroll="loadItems">
      <li v-for="(eq, index) in getEqData.slice(0, count)" :key="index" class="infinite-list-item item">
        <yuhun-item :yuhun="eq"></yuhun-item>
      </li>
    </ul>
  </el-row>
</template>

<script setup>
import { ref } from "vue";

import { useYuhunStore } from "@/hooks/store/useYuhunStore.js";
import yuhunItem from "./components/yuhunItem.vue";

const { getEqData } = useYuhunStore();

const count = ref(0);

const loadItems = () => {
  if (count.value < getEqData.value.length) {
    count.value += 12;
  }
};
</script>

<style lang="scss" scoped>
.items {
  height: 800px;
  width: 100%;
  padding: 40px 200px;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
