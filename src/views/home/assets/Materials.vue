<template>
  <div>
    <h6 class="my-12">资源</h6>

    <ul class="content px-12 relative">
      <li class="flex justify-between">
        <span>木头</span>
        <div class="flex">
          <span class="px-8">{{ material.woods.quantity }}</span>
          <SwapVue :material="material.woods" name="woods">
            <span class="sale-button"> 卖出 </span>
          </SwapVue>
        </div>
      </li>
      <li class="flex justify-between">
        <span>石头</span>
        <div class="flex">
          <span class="px-8">{{ material.stone.quantity }}</span>
          <SwapVue :material="material.stone" name="stone">
            <span class="sale-button"> 卖出 </span>
          </SwapVue>
        </div>
      </li>
      <li class="flex justify-between">
        <span>鱼</span>
        <div class="flex">
          <span class="px-8">{{ material.fish.quantity }}</span>
          <SwapVue :material="material.fish" name="fish">
            <span class="sale-button"> 卖出 </span>
          </SwapVue>
        </div>
      </li>
      <li class="flex justify-between">
        <span>铁</span>
        <div class="flex">
          <span class="px-8">{{ material.iron.quantity }}</span>
          <SwapVue :material="material.iron" name="iron">
            <span class="sale-button"> 卖出 </span>
          </SwapVue>
        </div>
      </li>
      <li class="flex justify-between">
        <span>铜</span>
        <div class="flex">
          <span class="px-8">{{ material.copper.quantity }}</span>
          <SwapVue :material="material.copper" name="copper">
            <span class="sale-button"> 卖出 </span>
          </SwapVue>
        </div>
      </li>
      <li class="flex justify-between">
        <span>金</span>
        <div class="flex">
          <span class="px-8">{{ material.gold.quantity }}</span>
          <SwapVue :material="material.gold" name="gold">
            <span class="sale-button"> 卖出 </span>
          </SwapVue>
        </div>
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
          color: white;
        }
      }
    }
  }
  .sale-button {
    width: fit-content;
    padding: 0 4px;
    display: inline-block;
    text-align: center;
    line-height: 20px;
  }
</style>
