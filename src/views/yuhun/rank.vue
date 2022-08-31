<template>
  <div class="warpper">
    <div class="content">
      <div class="content__left">
        <el-cascader
          v-model="suitName"
          :options="yuhunOptions"
          :props="{ expandTrigger: 'hover', emitPath: false }"
        ></el-cascader>
        <el-divider></el-divider>
        <el-table
          :data="eqDatas"
          height="600"
          border
          highlight-current-row
          :default-sort="{ prop: 'pos', order: 'ascending' }"
          @row-click="rowClickHandle"
        >
          <el-table-column prop="id" label="id" width="200"></el-table-column>
          <el-table-column
            prop="suitInfo.name"
            label="类型"
            width="80"
            align="center"
          ></el-table-column>
          <el-table-column prop="pos" label="位置" width="50" align="center">
            <template #default="{ row }">
              <span>{{ row.pos + 1 }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="baseAttr"
            label="主属性"
            width="80"
            align="center"
          ></el-table-column>
          <el-table-column prop="quality" label="星级" width="50" align="center"></el-table-column>
          <el-table-column prop="level" label="等级" width="50" align="center"></el-table-column>
          <el-table-column
            prop="score[0]"
            label="输出评分"
            sort-by="score[0]"
            width="100"
            align="center"
          >
            <template #default="{ row }">
              <span :style="`color: ${valToColor(row.score[0])}`">{{ row.score[0] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="score[1]" label="治疗评分" width="100" align="center">
            <template #default="{ row }">
              <span :style="`color: ${valToColor(row.score[1])}`">{{ row.score[1] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="score[3]" label="命中评分" width="100" align="center">
            <template #default="{ row }">
              <span :style="`color: ${valToColor(row.score[2])}`">{{ row.score[2] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="score[2]" label="抵抗评分" width="100" align="center">
            <template #default="{ row }">
              <span :style="`color: ${valToColor(row.score[3])}`">{{ row.score[3] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="score[4]" label="双堆评分" width="100" align="center">
            <template #default="{ row }">
              <span :style="`color: ${valToColor(row.score[4])}`">{{ row.score[4] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="score[5]" label="速度评分" width="100" align="center">
            <template #default="{ row }">
              <span :style="`color: ${valToColor(row.score[5])}`">{{ row.score[5] }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="rank"
            label="参考评级"
            :sortable="true"
            :sort-method="sortByRank"
            width="100"
            align="center"
          >
            <template #default="{ row }">
              <span>{{ evaluationByScore(row.score) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="born" label="获取日期" width="100" align="center">
            <template #default="{ row }">
              <span>{{ formatDate(row.born) }}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-divider></el-divider>
        <div class="tip">
          *御魂参考评级仅供参考，根据六个指标中的最大值进行划分，不考虑御魂主属性。
        </div>
      </div>
      <div class="content__right">
        <template v-if="showEq">
          <div class="graph">
            <radar-chart :data="showEq.score" :legend="showEq.suitInfo.name"></radar-chart>
          </div>
          <yuhun-item :yuhun="showEq"></yuhun-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import RadarChart from '@/components/echarts/RadarChart.vue';
import yuhunItem from './components/yuhunItem.vue';
import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';
import { getSuitPosCountByScore, evaluationByScore } from '@/utils/analysis.js';
import { yuhunOptions } from '@/data/yuhuninfo.js';
import { getEqDatasBySuitName } from '@/utils/eqData.js';
import { valToColor, formatDate } from '@/utils/format.js';

const { getEqData } = useYuhunStore();
const suitName = ref('破势');
const calcType = ref(['A', 'S']);
const rankNum = ref(6);
const score = computed(() => getSuitPosCountByScore(suitName.value, calcType.value, rankNum.value));

const eqDatas = computed(() => getEqDatasBySuitName(suitName.value));

const showEq = ref(eqDatas.value[0]);
const rowClickHandle = (row) => {
  showEq.value = row;
};

const sortByRank = (a, b) => Math.max(...a.score) - Math.max(...b.score);
</script>

<style lang="scss" scoped>
.warpper {
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 12px;
    gap: 12px;
    width: 100%;
    .content__left {
      .tip {
        font-size: 12px;
        color: #43425d;
      }
    }
    .content__right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .graph {
        width: 300px;
        height: 300px;
      }
    }
  }
}
</style>
