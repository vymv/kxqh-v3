<template>
  <div class="warpper">
    <el-row style="height: 20px"></el-row>
    <h3>{{ suitName }}各属性成长情况</h3>
    <el-row style="height: 20px"></el-row>
    <el-row>
      <el-select v-model="value" filterable placeholder="请选择御魂种类" @change="selectTrigger(value)">
        <el-option v-for="item in yuhunInfo" :key="item.name" :label="item.name" :value="item.name"> </el-option>
      </el-select>
    </el-row>
    <el-divider></el-divider>

    <el-scrollbar justify="center">
      <el-row justify="center">
        <el-col :span="6" class="radarbox" v-for="(value, index) in showEq">
          <pos-radar-chart :data="value.maxValue" :legend="suitName + '-' + value.name" :max="value.mvalue" :title="suitName + '-' + value.name"></pos-radar-chart>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <div v-for="(value, index) in showEq">
        <el-row justify="center">
          <h3>{{ suitName + " " + value.name + " " + "各位分布" }}</h3>
        </el-row>
        <el-row>
          <!--分布图-->
          <el-col :span="12" class="box">
            <dot-chart :data="dotdata[index].data" :name="dotdata[index].name" :max="value.mValue"></dot-chart>
          </el-col>
          <!--雷达图-->
          <el-col :span="12" class="box">
            <pos-radar-chart :data="value.maxValue" :legend="suitName + '-' + value.name" :max="value.mvalue"></pos-radar-chart>
          </el-col>
        </el-row>
        <el-row>
          <el-divider></el-divider>
        </el-row>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import PosRadarChart from "@/components/echarts/PosRadarChart.vue";
import DotChart from "@/components/echarts/DotChart.vue";
import { useYuhunStore } from "@/hooks/store/useYuhunStore.js";
import { getSuitMaxGrowth } from "@/utils/analysis.js";
import { yuhunInfo } from "@/data/yuhuninfo.js";
import { dotchartData } from "@/utils/myUtils.js";

const { getEqData } = useYuhunStore();
const suitName = ref("破势");
const showEq = ref(getSuitMaxGrowth(suitName.value));
const dotdata = ref(dotchartData(suitName.value));
//console.log("御魂" + showEq[0]);
//const showEq = getSuitMaxGrowth(suitName.value);
const selectTrigger = (val) => {
  console.log("select " + val);
  suitName.value = val;
  showEq.value = getSuitMaxGrowth(val);
  dotdata.value = dotchartData(val);
};
</script>

<style lang="scss" scoped>
.warpper {
  flex-direction: column;
  .radarbox {
    width: 350px;
    height: 350px;
    align-items: center;
    justify-content: center;
    margin: 0px;
    text-align: center;
    border-radius: 4px;
    //background: var(--el-color-primary-light-9);
    //color: var(--el-color-primary);
  }
  .dotcharbox {
    width: 350px;
    height: 350px;
    align-items: center;
    justify-content: center;
    margin: 0px;
    text-align: center;
    border-radius: 4px;
    //background: var(--el-color-primary-light-9);
    //color: var(--el-color-primary);
  }
  .box {
    width: 450px;
    height: 450px;
    align-items: center;
    justify-content: center;
    margin: 0px;
    text-align: center;
    border-radius: 4px;
    //background: var(--el-color-primary-light-9);
    //color: var(--el-color-primary);
  }
  .items {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    //display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
}
</style>
