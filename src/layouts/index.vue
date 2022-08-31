<template>
  <div class="app-warpper">
    <side-bar></side-bar>
    <main>
      <navbar></navbar>
      <app-main></app-main>
    </main>
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue';
import SideBar from './components/Sidebar/index.vue';
import Navbar from './components/Navbar.vue';
</script>

<style lang="scss" scoped>
.app-warpper {
  display: flex;
  main {
    width: 100%;
  }
}
</style>
