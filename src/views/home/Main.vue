<template>
  <div class="main-section flex-1 px-12 py-8 flex flex-col gr-4">
    <div class="header text-bold flex justify-between">
      <div>
        <i
          class="bi cursor-pointer"
          :class="[`bi-chevron-bar-${!showSidebar ? 'right' : 'left'}`]"
          @click="showSidebar = !showSidebar"
        ></i>
        {{ currentStage.name }}
      </div>
      <div>
        <i
          class="bi cursor-pointer"
          :class="[`bi-chevron-bar-${showRightSidebar ? 'right' : 'left'}`]"
          @click="showRightSidebar = !showRightSidebar"
        ></i>
      </div>
    </div>
    <KeepAlive>
      <component
        :is="currentStage.component"
        :data="currentStage.data"
      ></component>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
  import { currentStage, showRightSidebar, showSidebar } from './delivery';
</script>

<style lang="scss" scoped>
  .main-section {
    background-color: white;
    border-radius: var(--radius);
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
