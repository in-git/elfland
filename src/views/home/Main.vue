<template>
  <div class="main-section flex-1 px-12 py-8 flex flex-col">
    <div class="header text-bold">
      {{ currentStage.name }}
    </div>
    <div class="stage flex-1"> </div>
  </div>
</template>

<script setup lang="ts">
  import { currentStage } from './delivery';
</script>

<style lang="scss" scoped>
  .main-section {
    background-color: white;
    border-radius: var(--radius);
    min-width: 600px;
    .header {
      border-radius: var(--radius);
      background-color: var(--background-color);
      line-height: 32px;
      white-space: nowrap;
      padding: 0 12px;
      font-size: 16px;
    }
  }
</style>
