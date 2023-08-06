<template>
  <div class="adventrue-list h-100 p-12">
    <div
      v-for="(item, key) in assetsData"
      :key="key"
      class="card px-12 py-8 flex flex-col gr-4 justify-between"
      :class="[getMaterialById(item.flag)?.ban ? 'ban' : 'allow']"
    >
      <div class="text-center relative">
        <img :src="item.src" width="120" />
      </div>
      <div class="flex justify-between align-center text-nowrap">
        <div class="flex gc-4">
          <div>效率 </div>
          <div class="tag">
            +{{ getMaterialById(item.flag)?.accumulative }}
          </div>
        </div>
        <div class="flex gc-4">
          <div>Miss </div>
          <div class="tag">
            {{ parseInt(`${(getMaterialById(item.flag)?.miss || 0) * 100}`) }}%
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="flex gc-4">
          <div>{{ getMaterialById(item.flag)?.name }}</div>
          <div class="tag">
            {{ getMaterialById(item.flag)?.quantity }}
          </div>
        </div>
        <div class="flex">
          <div>单价</div>
          <div class="tag">{{ getMaterialById(item.flag)?.price }}</div>
        </div>
      </div>
      <div class="button relative">
        <button :disabled="getMaterialById(item.flag)?.ban" @click="dig(item)">
          开采
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getMaterialById } from '@/store/modules/backpack/utils';
  import { AddventureType } from '../types';
  import { assetsData } from './data/adventure';

  /* 开采/挖掘 */
  const dig = (item: AddventureType) => {
    /* Miss处理 */

    const material = getMaterialById(item.flag);
    if (!material) return;
    if (Math.random() < material.miss) {
      material.quantity += material.accumulative;
    }
    /* 提示 */
  };
</script>

<style lang="scss" scoped>
  .adventrue-list {
    background-color: var(--background-color);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 0.15fr));
    grid-template-rows: repeat(auto-fit, 240px);
    gap: 8px;
    overflow-y: auto;
    font-size: 12px;
    .card {
      width: 180px;
      background-color: white;
      user-select: none;
    }
    .tag {
      background-color: var(--background-color);
      padding: 0 8px;
    }
    .tool {
      height: 32px;
      background-color: #f8f8f8;
    }
    .allow {
      .button {
        background-color: #6fc082;
        &:active {
          transform: translateY(1px);
        }
      }
    }
    .ban {
      .button {
        background-color: var(--warning);
      }
      filter: grayscale(60%);
      opacity: 0.4;
      button {
        cursor: not-allowed;
      }
    }
    .button,
    button {
      height: 24px;
      line-height: 24px;
      color: white;
    }
  }

  .tag {
    width: 42px;
    text-align: center;
    white-space: nowrap;
  }
</style>
