<template>
  <div class="skin-list">
    <ul class="px-12 py-8">
      <li
        v-for="(item, key) in list"
        :key="key"
        class="text-center flex flex-col gr-4 align-center relative"
      >
        <img :src="item.src" alt="" class="w-100" />
        <div class="commodity-info py-4">
          <div class="text-12 text-eee"> {{ item.name }} </div>
          <div class="text-24 price my-8">
            <span class="text-12 text-red">$</span> {{ item.price }}
            <span class="text-12 text-red">.00</span>
          </div>
          <div class="text-right">
            <div class="purchase elf_button text-12" @click="purchase(item)">
              立即抢购
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import xiaoqiao from '@/assets/hero/xiaoqiao.png';
  import fenshi from '@/assets/hero/fenshi.png';
  import shuiwu from '@/assets/hero/shuiwu.png';
  import chandiao from '@/assets/hero/chandiao.png';
  import zhenji from '@/assets/hero/zhenji.png';
  import xiaokeai from '@/assets/hero/xiaokeai.png';
  import feiyan from '@/assets/hero/feiyan.png';
  import keqing from '@/assets/hero/keqing.png';
  import { getUserInfo } from '@/store/modules/user/utils';
  import bingli from '@/assets/hero/bingli.png';

  interface SkinType {
    src: string;
    name: string;
    price: number;
  }
  const list: SkinType[] = [
    {
      src: xiaoqiao,
      name: 'A乔',
      price: 1000,
    },
    {
      src: fenshi,
      name: '西子分施',
      price: 2000,
    },
    {
      src: shuiwu,
      name: '不知水舞',
      price: 4800,
    },
    {
      src: zhenji,
      name: '真机',
      price: 7800,
    },
    {
      src: chandiao,
      name: '禅貂',
      price: 7200,
    },
    {
      src: xiaokeai,
      name: '小可爱',
      price: 12800,
    },
    {
      src: feiyan,
      name: '菲烟',
      price: 13800,
    },
    {
      src: keqing,
      name: '天晴',
      price: 15800,
    },
    {
      src: bingli,
      name: '冰粒',
      price: 20000,
    },
  ];
  const purchase = (item: SkinType) => {
    const userInfo = getUserInfo();
    const { skin, money } = userInfo;
    if (money > item.price) {
      userInfo.money = -item.price;
      userInfo.skin = skin;
    } else {
      alert('少侠你的盘缠不够了！');
    }
  };
</script>

<style lang="scss" scoped>
  .skin-list {
    height: 100%;
    width: 100%;
    background-color: #f8f8f8;
    overflow-y: auto;
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 0.2fr));
      grid-template-rows: repeat(auto-fit, 240px);
      gap: 8px;
    }
    li {
      background-color: white;
      overflow: hidden;
      .purchase {
        background-color: var(--warning);
        color: white;
        line-height: 24px;
        padding: 0 8px;
        width: fit-content;
        display: inline-block;
        opacity: 0;
        transition: opacity 0.1s;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        .commodity-info {
          opacity: 1;
        }
        .purchase {
          opacity: 1;
        }
      }

      .commodity-info {
        padding: 0 8px;
        position: absolute;
        width: 100%;
        justify-content: space-between;
        background: linear-gradient(to bottom, #3131311e, #333333d2, #000000);
        bottom: 0;
      }
      .price {
        font-style: italic;
        color: white;
      }
      .text-red {
        color: var(--warning);
      }
    }
  }
</style>
