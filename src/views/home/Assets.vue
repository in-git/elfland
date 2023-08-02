<template>
  <div class="attribute px-12 py-8 flex flex-col gr-12">
    <div class="hero-style p-12 text-center">
      <img :src="elf" width="200" />
      <div class="username">一如既往</div>
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
  }
  .hero-style {
    .username {
      border: 1px dashed #666;
      width: 200px;
      margin: auto;
      margin-top: 12px;
    }
  }
</style>
