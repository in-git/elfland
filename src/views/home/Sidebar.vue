<template>
  <div class="sidebar h-100 px-12 py-8">
    <ul class="flex flex-col justify-between h-100">
      <li
        v-for="(item, key) in data.list"
        :key="key"
        class="flex flex-col gr-4"
      >
        <div class="item-title mb-8">{{ item.name }}</div>
        <div
          v-for="(v, k) in item.list"
          :key="k"
          class="list"
          :class="{ active: v.name === currentStage.name }"
          @click="selectItem(v, item)"
        >
          <div class="list-name">{{ v.name }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import data from './sidebar/data';
  import { GameStage, GameStageList } from './types';
  import { currentStage } from './delivery';

  const selectItem = (item: GameStage, parent: GameStageList) => {
    currentStage.value = item;
    currentStage.value.component = parent.component;
  };
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 300px;
    background-color: #eee;
    border-radius: var(--radius);
    .item-title {
      font-weight: bold;
    }
    .list {
      height: 32px;
      line-height: 32px;
      color: #999;
      text-align: center;
      background-color: white;
      border-radius: var(--radius);
      cursor: pointer;
      font-size: 12px;
      border: 1px solid transparent;
    }
    .active {
      color: #333;
      border: 1px dashed #666;
    }
  }
</style>
