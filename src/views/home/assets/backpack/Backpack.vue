<template>
  <div class="mt-12">
    <div class="header flex justify-between">
      <div>我的物品</div>
      <div v-if="current.name" class="relative">
        <button style="color: var(--warning)" @click="showSalePanel = true">
          出售
        </button>
        <div
          v-if="showSalePanel"
          ref="target"
          class="flex absolute r-0 text-nowrap sale flex-col"
        >
          <div class="flex justify-between">
            <span>卖出</span>
            <span
              class="bi bi-x-circle-fill cursor-pointer"
              @click="showSalePanel = false"
            ></span>
          </div>
          <div class="text-12 text-999 my-8">
            <div>
              售价：<span class="tag">{{ current.sellingPrice }}$</span>
            </div>
          </div>
          <div class="flex mb-8">
            <input
              v-model="count"
              type="number"
              :min="0"
              :max="current.total"
              style="width: 100px"
              placeholder="请输入数量"
            />
          </div>
          <div>
            <button
              class="px-4"
              :disabled="current.total === 0 || current.total < count"
              @click="sale"
            >
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
    <ul class="grid">
      <li
        v-for="(item, key) in backpack.data"
        :key="key"
        class="flex flex-s"
        :class="{ active: item.name === current.name }"
        @click="selectItem(item)"
      >
        <img :src="item.src" alt="" class="w-80" />
        <div class="count">{{ item.total }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  import { getBackpack } from '@/store/modules/backpack/utils';
  import { Backpack } from '@/store/modules/backpack/types';
  import { getUserInfo } from '@/store/modules/user/utils';

  const target = ref(null);

  const current = ref<Backpack>({
    name: '',
    sellingPrice: 0,
    src: '',
    total: 0,
  });
  const count = ref(0);

  const showSalePanel = ref(false);
  const selectItem = (item: Backpack) => {
    current.value = item;
    current.value.total = item.total;
  };

  const sale = () => {
    const bkpk = getBackpack();
    bkpk.data.forEach((e) => {
      if (e.name === current.value.name && e.total > 0) {
        e.total -= count.value;
        const userInfo = getUserInfo();
        userInfo.money = e.sellingPrice * e.total;
        alert('出售成功');
        showSalePanel.value = false;
      }
    });
  };

  const backpack = computed(() => {
    return getBackpack();
  });
  onClickOutside(target, () => {
    showSalePanel.value = false;
  });
</script>

<style lang="scss" scoped>
  .header {
    background-color: #f8f8f8;
    padding: 4px;
  }
  ul {
    margin-top: 12px;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(48px, 0.2fr));
    li {
      width: 48px;
      height: 48px;
      background-color: var(--background-color);
      font-size: 12px;
      position: relative;
      cursor: pointer;
    }
    li.active {
      border: 1px dashed #333;
    }
    .count {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #f8f8f8;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
    }
  }
  .sale {
    box-shadow: 0 0 25px gray;
    background-color: #eee;
    padding: 8px;
    button {
      width: fit-content;
      margin: unset;
      background-color: var(--warning);
      color: white;
    }
    button:disabled {
      background-color: var(--background-color);
      border: 1px dashed #999;
      color: #999;
      cursor: not-allowed;
    }
  }
</style>
