<template>
  <div class="technology">
    <ul>
      <li
        v-for="(item, key) in comList"
        v-show="!item.isFinished"
        :key="key"
        class="flex gc-4 align-center"
      >
        <div class="relative">
          <img :src="item.src" width="64" height="64" />
          <div class="text-bold absolute name">
            {{ item.name }}
          </div>
        </div>
        <div class="flex-1 h-100 flex justify-between flex-col">
          <div class="text-bold flex text-nowrap justify-between align-center">
            <div class="flex">
              <div class="tag text-center">
                {{ item.cost }}
                <span class="text-12 text-999">{{ getName(item.spend) }}</span>
              </div>
            </div>
            <div class="development elf_button" @click="development(item)">
              研发
            </div>
          </div>

          <div class="desc text-999 text-12">
            {{ item.desc }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { getMaterial, getMaterialById } from '@/store/modules/backpack/utils';
  import { getSocity } from '@/store/modules/society/utils';
  import { Technology } from '@/store/modules/society/types';

  const development = (item: Technology) => {
    const spend = getMaterialById(item.spend);
    const unlock = getMaterialById(item.unlock);
    if (!spend || !unlock) return;
    const { quantity } = spend;
    if (item.cost < quantity) {
      unlock.ban = false;
      spend.quantity -= item.cost;
      item.isFinished = !item.isFinished;
      // eslint-disable-next-line no-alert
      alert('已解锁');
    } else {
      // eslint-disable-next-line no-alert
      alert('大侠，你的数不对啊！');
    }
  };
  const getName = (id: string) => {
    const material = getMaterialById(id);
    if (!material) return '';
    return material.name;
  };

  const comList = computed(() => {
    const socity = getSocity();
    return socity.$state;
  });
</script>

<style lang="scss" scoped>
  ul {
    display: grid;
    padding: 12px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 0.1fr));
    grid-template-rows: repeat(auto-fit, 84px);
    gap: 8px;
    justify-content: space-between;
    .name {
      width: 100%;
      left: 0;
      bottom: 0%;
      background-color: #00000085;
      color: white;
    }
    li {
      width: 240px;
      text-align: center;
      padding: 8px;
      background-color: white;
    }
    .desc {
      background-color: var(--background-color);
      height: 42px;
      text-align: left;
      padding: 4px;
    }
  }
  .technology {
    background-color: var(--background-color);
    height: 100%;
  }
  .development {
    border: 1px dashed #000;
    height: fit-content;
    font-size: 12px;
    width: 42px;
    &:hover {
      color: var(--success);
      border-color: var(--success);
    }
  }
  .tag {
    color: var(--warning);
    font-size: 20px;
  }
</style>
