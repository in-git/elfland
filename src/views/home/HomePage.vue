<template>
  <div class="flex home-page gc-8">
    <!-- 左边菜单 -->
    <SidebarVue />
    <!-- 中间的主界面 -->
    <MainVue />

    <!-- 资源集合 -->
    <WorldAssets />
  </div>
</template>

<script setup lang="ts">
  import SidebarVue from './Sidebar.vue';
  import MainVue from './Main.vue';
  import WorldAssets from './WorldAssets.vue';
</script>

<style lang="scss" scoped>
  .home-page {
    padding: 12px;
    height: 100vh;
    background-color: #f8f8f8;
    border-radius: var(--radius);
  }
</style>
