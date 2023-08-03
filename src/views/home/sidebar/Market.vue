<template>
  <div class="market h-100 p-12">
    <div class="grid container">
      <div class="market-card flex justify-between flex-col">
        <div class="flex intro-image w-100 relative">
          <img :src="pickaxe" />
          <ul class="absolute cursor-pointer text-left">
            <li class="text-14 mb-12">说明</li>
            <li>增加50%的成功率</li>
            <li>增加50%的成功率</li>
            <li>增加50%的成功率</li>
          </ul>
          <div class="absolute r-0 b-0">
            <i class="bi bi-info-circle"></i>
          </div>
        </div>
        <div>
          <div class="text-24 text-bold"> 镐 </div>
          <div class="price"> 60$ </div>
        </div>

        <div class="buy py-2">
          <button>购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import pickaxe from '@/assets/market/pickaxe.png';
</script>

<style lang="scss" scoped>
  .market {
    background-color: var(--background-color);

    .container {
      grid-template-columns: repeat(auto-fit, minmax(160px, 0.1fr));
      grid-template-rows: repeat(auto-fit, 230px);
      gap: 8px;
      overflow-y: auto;
      font-size: 12px;
    }
    .market-card {
      text-align: center;
      padding: 8px;
      background-color: white;
    }

    .buy {
      background-color: #ca1a55;
      color: white;
      cursor: pointer;
      button {
        color: white;
      }
    }
    .price {
      color: #ca1a55;
      font-size: 20px;
    }
    .intro-image {
      overflow-x: auto;
      flex-wrap: nowrap;
      flex-shrink: 0;
      height: 120px;
      &:hover {
        img {
          opacity: 0;
        }
        ul {
          opacity: 1;
        }
      }
      img {
        object-fit: contain;
        width: 100%;
        opacity: 1;
      }
    }
    ul {
      background-color: #333;
      padding: 8px;
      opacity: 0;
      flex-shrink: 0;
      top: 0;
      width: 100%;
      height: 100%;
      flex-grow: 1;
      li {
        color: #eee;
        white-space: nowrap;
      }
    }
  }
</style>
