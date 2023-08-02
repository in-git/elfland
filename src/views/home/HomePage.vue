<template>
  <div class="flex home-page gc-8">
    <SidebarVue />
    <MainVue />
    <AttributeVue />
  </div>
</template>

<script setup lang="ts">
  import SidebarVue from './Sidebar.vue';
  import MainVue from './Main.vue';
  import AttributeVue from './Assets.vue';
</script>

<style lang="scss" scoped>
  .home-page {
    padding: 12px;
    height: 100vh;
    background-color: #f8f8f8;
    border-radius: var(--radius);
  }
</style>
