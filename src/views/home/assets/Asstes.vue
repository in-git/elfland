<template>
  <div class="assets flex-1 px-12">
    <ul class="nav-list p-8">
      <li
        v-for="(item, key) in list"
        :key="key"
        :class="{ active: item.title === current.title }"
        @click="selectItem(item)"
      >
        {{ item.title }}
      </li>
    </ul>

    <KeepAlive>
      <component :is="current.component"></component>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
  import { ref, markRaw } from 'vue';
  import Materials from './Materials.vue';
  import WorldVue from './world/WorldVue.vue';
  import Backpack from './backpack/Backpack.vue';

  interface Tabbar {
    title: string;
    component: any;
  }
  const list: Tabbar[] = [
    {
      title: '财产',
      component: markRaw(Materials),
    },
    {
      title: '背包',
      component: markRaw(Backpack),
    },
    {
      title: '世界',
      component: markRaw(WorldVue),
    },
  ];

  const current = ref<Tabbar>({
    title: '财产',
    component: markRaw(Materials),
  });

  const selectItem = (item: Tabbar) => {
    current.value = item;
  };
</script>

<style lang="scss" scoped>
  .assets {
    min-height: 360px;
    overflow-y: auto;
  }
  ul.nav-list {
    display: flex;
    background-color: var(--background-color);
    li {
      width: 80px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
      user-select: none;
    }
    li.active {
      background-color: white;
    }
  }
</style>
