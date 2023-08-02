<template>
  <div class="adventrue-list h-100 p-12">
    <div
      v-for="item in data"
      :key="item"
      class="card px-12 py-4 flex flex-col gr-4"
    >
      <div class="text-center">
        <img :src="tree" width="120" />
      </div>
      <div class="flex justify-between">
        <div class="flex gc-4">
          <div>效率</div>
          <div class="tag"> +1 </div>
        </div>
        <div class="flex gc-4">
          <div>Miss</div>
          <div class="tag"> {{ item.attr.miss * 100 }}% </div>
        </div>
      </div>

      <div class="tool"></div>
      <div class="allow button">
        <button> 开采 </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import tree from '@/assets/stage/tree.webp';

  const props = defineProps<{
    data: any[];
  }>();
</script>

<style lang="scss" scoped>
  .adventrue-list {
    background-color: var(--background-color);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 0.2fr));
    grid-template-rows: repeat(auto-fit, 250px);
    gap: 8px;
    overflow-y: auto;
    .card {
      height: 250px;
      width: 180px;
      background-color: white;
      user-select: none;
    }
    .tag {
      background-color: var(--background-color);
      padding: 0 8px;
      font-size: 12px;
    }
    .tool {
      height: 32px;
      background-color: #f8f8f8;
    }
    .allow {
      background-color: #80ed99;
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
</style>
