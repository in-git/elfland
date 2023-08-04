<template>
  <div class="adventrue-list h-100 p-12">
    <div
      v-for="(item, key) in data"
      :key="key"
      class="card px-12 py-8 flex flex-col gr-4 justify-between"
      :class="[getMaterialById(item.flag)?.ban ? 'ban' : 'allow']"
    >
      <div class="text-center relative">
        <img :src="item.src" width="120" />
      </div>
      <div class="flex justify-between">
        <div
          class="flex gc-4"
          :class="[item.tips === 'success' ? 'success' : '']"
        >
          <div>效率</div>
          <div class="tag">
            +{{ getMaterialById(item.flag)?.accumulative }}
          </div>
        </div>
        <div class="flex gc-4" :class="[item.tips === 'miss' ? 'miss' : '']">
          <div>Miss</div>
          <div class="tag">
            {{ parseInt(`${getMaterialById(item.flag)?.miss || 0 * 100}`) }}%
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
  import {
    getMaterial,
    getBackpack,
    getMaterialById,
  } from '@/store/modules/backpack/utils';
  import { Material, Backpack } from '@/store/modules/backpack/types';
  // eslint-disable-next-line import/no-cycle
  import { AddventureType } from './data/addventure';

  const props = defineProps<{
    data: AddventureType[];
  }>();

  let clearFlag: any = 0;

  /* 开采/挖掘 */
  const dig = (item: AddventureType) => {
    /* Miss处理 */

    const material = getMaterialById(item.flag);
    if (!material) return;
    if (Math.random() < material.miss) {
      item.tips = 'miss';
      material.quantity += material.accumulative;
    } else {
      item.tips = 'success';
    }
    /* 提示 */
    clearTimeout(clearFlag);
    clearFlag = setTimeout(() => {
      item.tips = false;
    }, 500);
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
  .success {
    background-color: var(--success);
    color: white;
    .tag {
      background-color: var(--success);
      color: white;
    }
  }
  .miss {
    background-color: var(--warning);
    color: white;
    .tag {
      background-color: var(--warning);
      color: white;
    }
  }
</style>
