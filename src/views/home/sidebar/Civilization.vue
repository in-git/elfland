<template>
  <div class="technology">
    <ul>
      <li
        v-for="(item, key) in list"
        :key="key"
        class="flex flex-col justify-between align-center"
      >
        <img :src="item.src" width="64" />
        <div>
          <div class="text-12 text-999">消耗</div>
          <div>
            <div class="tag text-center">{{ item.cost }}</div>
          </div>
        </div>
        <div class="development elf_button" @click="development(item)">
          研发
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import stick from '@/assets/technology/stick.webp';

  const list = [
    {
      src: stick,
      name: '扎鱼棍',
      flag: '',
      unlock: '',
      cost: 1000,
      desc: '',
    },
  ];
  const development = (item) => {};
</script>

<style lang="scss" scoped>
  ul {
    display: grid;
    padding: 12px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 0.1fr));
    grid-template-rows: repeat(auto-fit, 160px);
    gap: 8px;
    justify-content: space-between;
    li {
      width: 100px;
      text-align: center;
      height: 160px;
      padding: 8px;
      background-color: white;
    }
  }
  .technology {
    background-color: var(--background-color);
    height: 100%;
  }
  .development {
    border: 1px dashed #000;
    font-size: 12px;
    width: 100%;
    &:hover {
      color: var(--success);
      border-color: var(--success);
    }
  }
  .tag {
    color: var(--warning);
    font-size: 24px;
  }
</style>
