<template>
  <div class="gambing h-100">
    <ul class="h-100 p-12">
      <li>
        <div class="flex gc-4 card pr-8">
          <img src="../../../assets/gambling/profiteer.webp" width="120" />
          <div class="flex flex-col gr-8 py-8">
            <h3>怡情院</h3>
            <div class="desc flex-1 p-12 text-666">
              最轻松的赚钱方式,可以玩比大小,猜颜色,等
            </div>
            <div class="enter elf_button flex justify-between">
              <div>立即进入</div>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .gambing {
    background-color: #eee;
    ul {
      grid-template-columns: repeat(auto-fit, minmax(260px, 0.1fr));
      grid-template-rows: repeat(auto-fit, 240px);
      gap: 8px;
      overflow-y: auto;
      font-size: 12px;
      display: grid;
    }
    .desc {
      background-color: #f8f8f8;
    }
    .enter {
      background-color: #333;
      color: white;
      padding: 4px 8px;
    }
  }
  .card {
    background-color: white;
  }
</style>
