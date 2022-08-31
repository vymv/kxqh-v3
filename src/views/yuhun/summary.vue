<template>
  <div class="warpper">
    <template v-if="hasYYXState">
      <el-descriptions title="账号信息" size="medium" class="desc">
        <el-descriptions-item label="用户名">{{ getUserInfo.name }}</el-descriptions-item>
        <el-descriptions-item label="服务器">{{ getUserInfo.server_id }}</el-descriptions-item>
        <el-descriptions-item label="userId">
          <el-tag size="small">{{ getUserInfo.id }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="导出日期">
          {{ getUserInfo.timestamp }}
        </el-descriptions-item>
        <el-descriptions-item label="御魂数量">
          {{ getEqData.length }}
        </el-descriptions-item>
        <el-descriptions-item label="体力">
          {{ getUserInfo.currency.action_point }}
        </el-descriptions-item>
        <el-descriptions-item label="樱饼">
          {{ getUserInfo.currency.auto_point }}
        </el-descriptions-item>
        <el-descriptions-item label="勾玉">
          {{ getUserInfo.currency.jade }}
        </el-descriptions-item>
        <el-descriptions-item label="魂玉">
          {{ getUserInfo.currency.s_jade }}
        </el-descriptions-item>
        <el-descriptions-item label="灰票">
          {{ getUserInfo.currency.broken_amulet }}
        </el-descriptions-item>
        <el-descriptions-item label="蓝票">
          {{ getUserInfo.currency.mystery_amulet }}
        </el-descriptions-item>
        <el-descriptions-item label="紫票">
          {{ getUserInfo.currency.ar_amulet }}
        </el-descriptions-item>
        <el-descriptions-item label="皮肤券">
          {{ getUserInfo.currency.skin_token }}
        </el-descriptions-item>
        <el-descriptions-item label="SP皮肤券">
          {{ getUserInfo.currency.sp_skin_token }}
        </el-descriptions-item>
        <el-descriptions-item label="勋章">
          {{ getUserInfo.currency.contrib }}
        </el-descriptions-item>
        <el-descriptions-item label="荣誉点">
          {{ getUserInfo.currency.honor }}
        </el-descriptions-item>
        <el-descriptions-item label="御札">
          {{ getUserInfo.currency.ofuda }}
        </el-descriptions-item>
        <el-descriptions-item label="金御札">
          {{ getUserInfo.currency.gold_ofuda }}
        </el-descriptions-item>
      </el-descriptions>
    </template>
    <p v-else>暂无御魂数据</p>
  </div>
</template>

<script setup>
import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';
import { formatDate } from '@/utils/format.js';

const { getEqData, getUserInfo, hasYYXState } = useYuhunStore();
</script>

<style lang="scss" scoped>
.warpper {
  align-items: flex-start;
  padding: 48px 24px;
  .desc {
    width: 600px;
  }
}
</style>
