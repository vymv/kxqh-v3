<template>
  <div class="warpper">
    <h3>各套装满速分布情况</h3>
    <el-divider></el-divider>
    <div class="box">
      <bar-chart></bar-chart>
    </div>
  </div>
</template>

<script setup>
import BarChart from "@/components/echarts/BarChart.vue";
</script>

<style lang="scss" scoped>
.warpper {
  flex-direction: column;
  .box {
    width: 100%;
    height: 400px;
  }
}
</style>
