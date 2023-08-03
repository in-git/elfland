<template>
  <div class="adventrue-list h-100 p-12">
    <div
      v-for="(item, key) in comData"
      :key="key"
      class="card px-12 py-4 flex flex-col gr-4 justify-between"
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
          <div class="tag"> +{{ item.accumulative }} </div>
        </div>
        <div class="flex gc-4" :class="[item.tips === 'miss' ? 'miss' : '']">
          <div>Miss</div>
          <div class="tag"> {{ (item.miss * 100).toFixed(0) }}% </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="flex gc-4">
          <div>{{ getMaterialInfo(item).name }}</div>
          <div class="tag"> {{ getMaterialInfo(item).quantity }} </div>
        </div>
      </div>
      <div class="tool">
        <ul v-if="item.imgs" class="flex gc-4 h-100 w-100 px-12">
          <li v-for="(m, n) in item.imgs" :key="n" class="flex flex-s">
            <img :src="m" width="24" />
          </li>
        </ul>
      </div>
      <div class="allow button relative" @click="dig(item)">
        <button> 开采 </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import tree from '@/assets/stage/tree.webp';
  import { getMaterial, getBackpack } from '@/store/modules/backpack/utils';
  import { Material } from '@/store/modules/backpack/types';
  import { computed } from 'vue';
  import { AddventureType } from './addventure';

  const props = defineProps<{
    data: AddventureType[];
  }>();

  let clearFlag: any = 0;

  /* 处理提示相关的信息 */
  const getTips = (item: AddventureType) => {
    const backpack: Material = getMaterial();

    /* Miss处理 */
    if (Math.random() < item.miss) {
      item.tips = 'miss';
    } else {
      item.tips = 'success';
      backpack[item.flag].quantity += item.accumulative;
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

  const getMaterialInfo = (item: AddventureType) => {
    const meterialInfo = getMaterial();
    return meterialInfo[item.flag];
  };

  const comData = computed(() => {
    const backpack = getBackpack();
    return props.data.map((e) => {
      e.imgs = [];
      e.tools.forEach((m) => {
        backpack.data.forEach((v) => {
          if (m === v.flag && v.total > 0) {
            // eslint-disable-next-line no-restricted-syntax, guard-for-in
            for (const key in v.effect) {
              e[key] += v.effect[key];
            }
            e.imgs.push(v.src);
          }
        });
      });
      return e;
    });
  });
</script>

<style lang="scss" scoped>
  .adventrue-list {
    background-color: var(--background-color);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 0.2fr));
    grid-template-rows: repeat(auto-fit, 260px);
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
