<template>
  <el-menu-item :index="resolvePath(item.path)" v-if="hasOnlyMenu(item)">
    <i :class="onlyOneMenu.meta.icon"></i>
    <template #title>{{ onlyOneMenu.meta.title }}</template>
  </el-menu-item>
  <!-- 多级菜单 递归 -->
  <el-submenu :index="resolvePath(item.path)" v-else>
    <template #title>
      <i :class="item.meta.icon"></i>
      <span>{{ item.meta.title }}</span>
    </template>
    <sidebar-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :basePath="item.path"
    ></sidebar-item>
  </el-submenu>
</template>

<script setup>
import path from 'path-browserify';
import { defineProps, ref } from 'vue';
import { isExternal } from '@/utils/validate.js';

const props = defineProps({
  item: {
    type: Object,
    require: true,
  },
  basePath: {
    type: String,
    require: true,
  },
});

const onlyOneMenu = ref(null);
const hasOnlyMenu = (item) => {
  if (!item.children) {
    onlyOneMenu.value = item;
    return true;
  }
  if (item.children && item.children.length === 1) {
    onlyOneMenu.value = item;
    return true;
  }
  return false;
};

const resolvePath = (routePath) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>

<style></style>
