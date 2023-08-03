<template>
  <div class="swap">
    <div class="ml-4 relative">
      <div class="cursor-pointer" @click="show = true">
        <slot></slot>
      </div>
      <div v-if="show" class="input absolute r-0 flex flex-col gr-4">
        <div class="flex justify-between">
          <span>兑换</span>
          <i
            class="bi bi-x-circle-fill cursor-pointer"
            @click="show = false"
          ></i>
        </div>
        <input type="text" placeholder="输入要兑换的数量" />
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
        <div class="comfirm">
          <button>确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

  const show = ref(false);

  document.onmousedown = (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.swap')) {
      show.value = false;
    }
  };

  onUnmounted(() => {
    document.onmousedown = null;
  });
</script>

<style lang="scss" scoped>
  .input {
    top: 100%;
    width: 140px;
    background-color: #eee;
    padding: 8px;
    line-height: initial;
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
      color: #333;
      border: 1px dashed #000;
      padding: 0 8px;
    }
  }
</style>
