<template>
  <div>
    <h6 class="my-12">资源</h6>
    <ul class="content px-12">
      <li class="flex justify-between">
        <span>木头</span>
        <div class="flex">
          <span>{{ backpack.woods }}</span>
          <SwapVue>
            <i class="bi-arrow-left-right bi"></i>
          </SwapVue>
        </div>
      </li>
      <li class="flex justify-between">
        <span>石头</span>
        <span>{{ backpack.stone }}</span>
      </li>
      <li class="flex justify-between">
        <span>鱼</span>
        <span>{{ backpack.fish }}</span>
      </li>
      <li class="flex justify-between">
        <span>铁</span>
        <span>{{ backpack.iron }}</span>
      </li>
      <li class="flex justify-between">
        <span>铜</span>
        <span>{{ backpack.copper }}</span>
      </li>
      <li class="flex justify-between">
        <span>铁</span>
        <span>{{ backpack.gold }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { getBackpack } from '@/store/modules/backpack/utils';
  import SwapVue from './components/Swap.vue';

  const backpack = computed(() => {
    return getBackpack();
  });
</script>

<style lang="scss" scoped>
  ul.content {
    background-color: #f8f8f8;
    li {
      line-height: 32px;
    }
  }
</style>
