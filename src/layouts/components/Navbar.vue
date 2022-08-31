<template>
  <div class="navbar">
    <bread-crumb></bread-crumb>
    <el-button v-if="hasYYXState" size="mini" type="danger" round @click="clearData">
      清空数据
    </el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import BreadCrumb from './BreadCrumb.vue';
import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';
import useInstance from '@/mixins/instance.js';

const router = useRouter();
const { hasYYXState, setYuhunStore } = useYuhunStore();

const { $message, $confirm } = useInstance();

const clearData = () => {
  $confirm('是否清空御魂json数据?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      router.push({ name: 'upload' });
      localStorage.removeItem('yyx');
      setYuhunStore({});
    })
    .catch(() => {
      $message({
        type: 'info',
        message: '已取消',
      });
    });
};
</script>

<style lang="scss" scoped>
$navHeight: 50px;

.navbar {
  height: $navHeight;
  background-color: white;
  border-bottom: 1px solid #eee;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
</style>
