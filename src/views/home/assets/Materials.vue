<template>
  <div>
    <h6 class="my-12">资源</h6>

    <ul class="content px-12 relative">
      <li
        v-for="(item, key) in materialList"
        :key="key"
        class="flex justify-between"
      >
        <span>{{ item.name }}</span>
        <div class="flex">
          <span class="px-8">{{ item.quantity }}</span>
          <SwapVue :material="item" :name="item.id">
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
  import { Material } from '@/store/modules/backpack/types';
  import SwapVue from './components/Swap.vue';

  const materialList = computed((): Material[] => {
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
