<template>
  <div class="swap">
    <div class="ml-4 relative">
      <div class="cursor-pointer" @click="show = true">
        <slot></slot>
      </div>
      <div
        v-if="show"
        ref="target"
        class="input absolute r-0 flex flex-col gr-4"
      >
        <div class="flex justify-between">
          <span>兑换</span>
          <i
            class="bi bi-x-circle-fill cursor-pointer"
            @click="show = false"
          ></i>
        </div>
        <input
          v-model="quantity"
          type="number"
          placeholder="输入要兑换的数量"
          :min="0"
          @keydown.enter="comfirm"
        />
        <div class="flex gc-8">
          <div>汇率</div>
          <div>
            <div class="text-12 text-666">
              <span>木头 - 钱</span>
            </div>
            <div class="text-12 text-666">
              <span class="tag">0.5 - 1</span>
            </div>
          </div>
        </div>
        <hr />
        <div class="comfirm" @click="comfirm">
          <button>卖掉</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  import { MaterialItem } from '@/store/modules/backpack/types';
  import { getUserInfo } from '@/store/modules/user/utils';
  import { getMaterial } from '@/store/modules/backpack/utils';

  const props = defineProps<{
    material: MaterialItem;
    name: string;
  }>();
  const show = ref(false);
  const target = ref();
  const quantity = ref(0);

  const comfirm = () => {
    if (quantity.value > props.material.quantity || quantity.value < 0) {
      quantity.value = 0;
      show.value = false;
      return;
    }
    const userInfo = getUserInfo();

    userInfo.money += quantity.value * props.material.exchangeRatio;
    const backpack = getMaterial();
    backpack[props.name].quantity -= quantity.value;
    quantity.value = 0;
    show.value = false;
  };

  onClickOutside(target, () => {
    show.value = false;
  });
</script>

<style lang="scss" scoped>
  .input {
    top: 100%;
    width: 140px;
    background-color: #eee;
    padding: 8px;
    line-height: initial;
    z-index: 10;
    box-shadow: 0 0 5px #a3a3a3a4;
    input {
      width: 100%;
      outline: none;
      border: 1px solid #eee;
      line-height: 24px;
      padding: 0 4px;
    }
    .tag {
      background-color: #333;
      color: white;
      padding: 0 8px;
    }
    .comfirm {
      background-color: #eee;
      display: inline-block;
      width: fit-content;
      button {
        padding: 0 8px;
        color: white;
        background-color: var(--warning);
      }
    }
  }
</style>
