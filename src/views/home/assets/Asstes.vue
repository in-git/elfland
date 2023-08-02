<template>
  <div class="assets flex-1 px-12">
    <ul class="nav-list p-8">
      <li
        v-for="(item, key) in list"
        :key="key"
        :class="{ active: item.title === current }"
        @click="selectItem(item)"
      >
        {{ item.title }}
      </li>
    </ul>

    <RouterView name="assets" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const list = [
    {
      title: '属性',
    },
    {
      title: '世界',
    },
    {
      title: '背包',
    },
  ];

  const current = ref('属性');

  const selectItem = (item: any) => {
    current.value = item.title;
  };
</script>

<style lang="scss" scoped>
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
