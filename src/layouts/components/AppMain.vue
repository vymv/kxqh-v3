<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.fullPath"></component>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

<style lang="scss" scoped>
$navHeight: 50px;

.app-main {
  height: calc(100vh - #{$navHeight});
  background-color: #fff;
}
</style>
