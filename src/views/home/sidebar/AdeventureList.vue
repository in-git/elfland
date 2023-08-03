<template>
  <div class="adventrue-list h-100 p-12">
    <div
      v-for="(item, key) in data"
      :key="key"
      class="card px-12 py-4 flex flex-col gr-4"
    >
      <div class="text-center relative">
        <img :src="tree" width="120" />
      </div>
      <div class="flex justify-between">
        <div class="flex gc-4">
          <div>效率</div>
          <div class="tag"> +{{ item.accumulative }} </div>
        </div>
        <div class="flex gc-4">
          <div>Miss</div>
          <div class="tag"> {{ item.miss * 100 }}% </div>
        </div>
      </div>

      <div class="tool"></div>
      <div class="allow button relative" @click="dig(item)">
        <button> 开采 </button>
        <div v-if="item.tips" :class="[item.status]" class="dig-tips">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import tree from '@/assets/stage/tree.webp';
  import { getBackpack } from '@/store/modules/backpack/utils';
  import { Backpack } from '@/store/modules/backpack/types';
  import { AddventureType } from './addventure';

  const props = defineProps<{
    data: AddventureType[];
  }>();

  let clearFlag: any = 0;

  /* 处理提示相关的信息 */
  const getTips = (item: AddventureType) => {
    const backpack: Backpack = getBackpack();
    item.tips = true;
    /* Miss处理 */
    if (Math.random() < item.miss) {
      item.status = 'miss';
      item.content = 'Miss';
    } else {
      item.status = 'success';
      backpack[item.flag] += item.accumulative;
      item.content = `+${item.accumulative}`;
    }
    /* 提示 */
    clearTimeout(clearFlag);
    clearFlag = setTimeout(() => {
      item.tips = false;
    }, 500);
  };
  /* 开采/挖掘 */
  const dig = (item: AddventureType) => {
    getTips(item);
  };
</script>

<style lang="scss" scoped>
  .adventrue-list {
    background-color: var(--background-color);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 0.2fr));
    grid-template-rows: repeat(auto-fit, 250px);
    gap: 8px;
    overflow-y: auto;
    font-size: 12px;
    .card {
      height: 250px;
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
      background-color: #6fc082;
    }
    .button,
    button {
      height: 24px;
      line-height: 24px;
      color: white;
      &:active {
        transform: translateY(1px);
      }
    }
  }
  .dig-tips {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    text-align: center;

    padding: 0 4px;
    animation: float-to-top 0.02s;
  }
  @keyframes float-to-top {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .success {
    background-color: green;
    color: white;
  }
  .miss {
    background-color: #ff0808;
    color: white;
  }
</style>
