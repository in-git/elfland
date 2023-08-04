<template>
  <div class="market h-100 p-12">
    <div class="grid container">
      <div
        v-for="(item, key) in data"
        :key="key"
        class="market-card flex justify-between flex-col"
      >
        <div class="flex intro-image w-100 relative">
          <img :src="item.src" />
          <ul class="absolute cursor-pointer text-left">
            <li class="text-14 mb-12">说明</li>
            <li v-for="(m, n) in item.desc" :key="n">{{ m }}</li>
          </ul>
          <div class="absolute select flex flex-s">
            <i class="bi bi-eye"></i>
          </div>
        </div>
        <div>
          <div class="text-24 text-bold"> {{ item.name }} </div>
          <div class="price"> {{ item.price }}$ </div>
        </div>

        <div class="buy py-4" @click="buy(item)">
          <button>购买</button>
        </div>
      </div>
    </div>

    <ElfPay v-model:show="alertWindow.show">
      <div class="desc flex-1 flex flex-s">
        <div class="text-center flex flex-col gr-8">
          <div class="text-20 text-999">恭喜获得物品</div>
          <div class="text-36">
            {{ alertWindow.name }} <span class="text-12">x1</span></div
          >
          <div
            class="close cursor-pointer text-16"
            @click="alertWindow.show = false"
          >
            确定
          </div>
        </div>
      </div>
    </ElfPay>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ElfPay from '@/components/pay/ElfPay.vue';
  import { getUserInfo } from '@/store/modules/user/utils';
  import { getMaterialById } from '@/store/modules/backpack/utils';
  import { Commodity } from '../types';

  defineProps<{
    data: Commodity[];
  }>();
  const alertWindow = ref({
    show: false,
    name: '',
    status: false,
  });

  const buy = (item: Commodity) => {
    const userInfo = getUserInfo();
    if (userInfo.money >= item.price) {
      userInfo.money -= item.price;
      alertWindow.value.show = true;
      alertWindow.value.name = item.name;
      const meterialInfo: any = getMaterialById(item.flag);
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const key in item.effect) {
        meterialInfo[key] = item.effect[key];
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('你暂时还买不起,赶快去砍木头吧');
    }
  };
</script>

<style lang="scss" scoped>
  .market {
    background-color: var(--background-color);

    .container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 0.1fr));
      grid-template-rows: repeat(auto-fit, 240px);
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
        ul {
          opacity: 1;
        }
      }
      img {
        object-fit: contain;
        width: 100%;
        opacity: 1;
        filter: brightness(96%);
      }
    }
    ul {
      background-color: rgba(51, 51, 51, 0.856);
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
  .alert {
    position: fixed;
    width: 600px;
    height: 400px;
    background-color: white;
    left: calc(50% - 300px);
    top: calc(50% - 200px);
    box-shadow: 0 0 25px gray;
  }
  .close {
    background: var(--success, #00b42a);
    height: 32px;
    line-height: 32px;
    color: white;
  }
  .select {
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
