<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';

import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';

const { setYuhunStore, hasYYXState } = useYuhunStore();

const loadYYXData = () => {
  if (!hasYYXState.value) {
    let yyx = localStorage.getItem('yyx');
    yyx && setYuhunStore(JSON.parse(yyx));
  }
};

onMounted(() => {
  loadYYXData();
});
</script>

<style lang="scss" scoped></style>
