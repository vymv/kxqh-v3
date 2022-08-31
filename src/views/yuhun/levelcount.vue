<template>
  <div class="warpper">
    <el-scrollbar class="items">
      <el-divider></el-divider>
      <h3>御魂等级分布</h3>
      <div class="box">
        <pie-chart :data="showlevel"></pie-chart>
      </div>

      <el-divider></el-divider>

      <div class="box">
        <h3>腿条数分布</h3>
        <pie-chart :data="showleg"></pie-chart>
      </div>

      <el-divider></el-divider>

      <div class="box">
        <h3>满级御魂分布</h3>
        <height-chart :count15="showlv15" :countall="showall" :name="yuhunname"></height-chart>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import PieChart from "@/components/echarts/PieChart.vue";
import HeightChart from "@/components/echarts/HeightChart.vue";
import { yuhunInfo } from "@/data/yuhunInfo.js";
import { groupDatasByLevel, groupDatasByLeg, groupLevel15BySuit, groupYuhunBySuit } from "@/utils/myUtils.js";
import { ref, computed } from "vue";

// 御魂等级
const levelDatas = computed(() => groupDatasByLevel());
const showlevel = ref(levelDatas);

// 御魂腿数
const legDatas = computed(() => groupDatasByLeg());
const showleg = ref(legDatas);

// 满级御魂个数
const Level15Datas = computed(() => groupLevel15BySuit());
const showlv15 = ref(Level15Datas);

const AllDatas = computed(() => groupYuhunBySuit());
console.log(AllDatas);
const showall = ref(AllDatas);

const yuhunname = ref(yuhunInfo.map((item) => item.name));
</script>

<style lang="scss" scoped>
.warpper {
  flex-direction: column;
  .box {
    width: 800px;
    height: 400px;
    margin-left: 16px;
  }
  .items {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  h3 {
    text-align: center;
  }
}
</style>
