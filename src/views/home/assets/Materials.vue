<template>
  <div>
    <h6 class="my-12">资源</h6>
    <ul class="content px-12">
      <li class="flex justify-between">
        <span>木头</span>
        <div class="flex">
          <span class="px-8">{{ material.woods.quantity }}</span>
          <SwapVue :material="material.woods" name="woods">
            <span class="sale-button">
              <i class="bi-arrow-left-right bi"></i>
            </span>
          </SwapVue>
        </div>
      </li>
      <li class="flex justify-between">
        <span>石头</span>
        <div class="flex">
          <span class="px-8">{{ material.stone.quantity }}</span>
          <SwapVue :material="material.woods" name="woods">
            <span class="sale-button">
              <i class="bi-arrow-left-right bi"></i>
            </span>
          </SwapVue>
        </div>
      </li>
      <li class="flex justify-between">
        <span>鱼</span>
        <span>{{ material.fish.quantity }}</span>
      </li>
      <li class="flex justify-between">
        <span>铁</span>
        <span>{{ material.iron.quantity }}</span>
      </li>
      <li class="flex justify-between">
        <span>铜</span>
        <span>{{ material.copper.quantity }}</span>
      </li>
      <li class="flex justify-between">
        <span>铁</span>
        <span>{{ material.gold.quantity }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { getMaterial } from '@/store/modules/backpack/utils';
  import SwapVue from './components/Swap.vue';

  const material = computed(() => {
    return getMaterial();
  });
</script>

<style lang="scss" scoped>
  ul.content {
    background-color: #f8f8f8;
    li {
      line-height: 32px;
      &:hover {
        .sale-button {
          background-color: #333;
          i {
            color: white;
          }
        }
      }
    }
  }
  .sale-button {
    width: 24px;
    display: inline-block;
    text-align: center;
    line-height: 20px;
  }
</style>
