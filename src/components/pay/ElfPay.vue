<template>
  <div v-if="show" class="alert p-24 flex flex-col">
    <div class="text-16 flex justify-between">
      <div>
        支付成功
        <i class="bi bi-check-circle-fill" style="color: var(--success)"></i>
      </div>
      <i class="bi bi-x-circle-fill text-16 cursor-pointer" @click="close"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  const props = defineProps<{
    show: boolean;
  }>();
  const showPay = ref(false);

  const emit = defineEmits(['update:show']);
  onMounted(() => {
    showPay.value = props.show;
  });
  const close = () => {
    emit('update:show', false);
  };
</script>

<style lang="scss" scoped>
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
</style>
