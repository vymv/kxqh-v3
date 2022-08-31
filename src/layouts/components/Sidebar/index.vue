<template>
  <div class="side-bar">
    <el-menu
      :uniqueOpened="false"
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      router
    >
      <sidebar-item
        v-for="route in routes.filter((item) => (hasYYXState || item.alwaysShow) && !item.hidden)"
        :key="route.path"
        :item="route"
        :basePath="route.path"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue';

import { useRoute } from 'vue-router';
import { routes } from '@/router';
import { computed } from 'vue';
import variables from '@/styles/variables.module.scss';
import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';

const { hasYYXState } = useYuhunStore();

const route = useRoute();

const activeMenu = computed(() => {
  return route.path;
});
</script>

<style lang="scss" scoped>
@import '../../../styles/index.scss';

.side-bar {
  width: 250px;
  min-width: 250px;
  height: 100vh;
  background-color: $menuBg;
}
</style>
