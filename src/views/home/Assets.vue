<template>
  <div class="attribute px-12 py-8 flex flex-col gr-12">
    <div class="hero-style p-12 text-center flex flex-col gr-4">
      <img :src="elf" class="w-100" />
      <div class="username">一如既往</div>
      <div class="flex justify-between">
        <div class="info inline-flex gc-2 py-4 px-8">
          <i class="bi bi-currency-dollar"></i>
          <div class="tag">120</div>
        </div>
        <div class="info">
          <i class="bi bi-shield"></i>
          <div class="tag">0</div>
        </div>
        <div class="info inline-flex gc-2 py-4 px-8">
          <i class="bi bi-screwdriver"></i>
          <div class="tag">120</div>
        </div>
      </div>
    </div>
    <AsstesVue />
  </div>
</template>

<script setup lang="ts">
  import elf from '@/assets/hero/elf-girl.webp';
  import AsstesVue from './assets/Asstes.vue';
</script>

<style lang="scss" scoped>
  .attribute {
    width: 300px;
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
    .tag {
      background-color: #333;
      color: white;
      padding: 0 4px;
    }
  }
</style>
