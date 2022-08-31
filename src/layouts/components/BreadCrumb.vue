<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: item.path }" v-for="item in levelList" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { routes } from '@/router';
import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const levelList = ref(null);

const getBreadCrumb = () => {
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  if (matched[0].path !== '/') {
    matched = [{ path: '/', meta: { title: '首页' } }].concat(matched);
  }
  // console.log(matched);
  levelList.value = matched;
};

onMounted(() => {
  getBreadCrumb();
});

watch(route, getBreadCrumb);
</script>

<style lang="scss" scoped></style>
