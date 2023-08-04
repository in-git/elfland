<template>
  <div v-if="showRightSidebar" class="attribute py-8 flex flex-col gr-12">
    <AsstesVue />
    <div class="hero-style p-12 text-center flex flex-col gr-4">
      <img :src="getSkin()" class="w-100" />
      <div class="username py-4">{{ info.username || '匿名' }}</div>
      <div class="flex justify-between gc-4 flex-wrap">
        <div class="info inline-flex gc-2 py-4 px-8">
          <i class="bi bi-currency-dollar"></i>
          <div class="tag">{{ info.money }}</div>
        </div>
        <div class="info">
          <i class="bi bi-shield"></i>
          <div class="tag">{{ info.defense }}</div>
        </div>
      </div>
      <div class="flex justify-between gc-4 flex-wrap">
        <div class="info inline-flex gc-2 py-4 px-8">
          <i class="bi bi-screwdriver"></i>
          <div class="tag">{{ info.attack }}</div>
        </div>
        <div class="info inline-flex gc-2 py-4 px-8">
          <i class="bi bi-heart"></i>
          <div class="tag">{{ info.hp }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import elf from '@/assets/hero/elf-girl.webp';
  import { getUserInfo } from '@/store/modules/user/utils';
  import AsstesVue from './assets/Asstes.vue';
  import { showRightSidebar } from './delivery';

  const getSkin = () => {
    const info = getUserInfo();

    return info.skin || elf;
  };
  const info = computed(() => {
    return getUserInfo();
  });
</script>

<style lang="scss" scoped>
  .attribute {
    background-color: white;
    border-radius: var(--radius);

    img {
      object-fit: contain;
    }
  }
  .hero-style {
    width: 260px;
    margin: auto;
    .username {
      border: 1px dashed #666;
      margin-top: 12px;
    }
  }
  .info {
    background-color: var(--background-color);
    display: inline-flex;
    padding: 4px 8px;
    column-gap: 4px;
    justify-content: space-between;
    flex: 1;
    .tag {
      background-color: #333;
      color: white;
      padding: 0 4px;
    }
  }
</style>
