<template>
  <div>
    <div v-if="show">
      <div v-if="loading" class="loading flex flex-s"> {{ list[index] }} </div>
      <div v-else class="pay-alert p-24 flex flex-col">
        <div class="text-16 flex justify-between">
          <div>
            支付成功
            <i
              class="bi bi-check-circle-fill"
              style="color: var(--success)"
            ></i>
          </div>
          <i
            class="bi bi-x-circle-fill text-16 cursor-pointer"
            @click="close"
          ></i>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';

  const list: string[] = [
    '正在拉起支付',
    '正在校验用户信息',
    '正在扫描支付环境',
    '正在交易中',
    '正在生成订单信息',
  ];
  const index = ref(0);

  const loading = ref(true);
  const props = defineProps<{
    show: boolean;
  }>();

  const showPay = ref(false);

  const emit = defineEmits(['update:show']);
  onMounted(() => {
    showPay.value = props.show;
  });
  const close = () => {
    loading.value = true;
    emit('update:show', false);
  };

  watch(
    props,
    () => {
      loading.value = true;
      if (!showPay.value) {
        const interval = setInterval(() => {
          // eslint-disable-next-line no-plusplus
          if (++index.value >= list.length) {
            clearInterval(interval);
            index.value = 0;
            loading.value = false;
          }
        }, 600);
      }
    },
    {
      immediate: true,
      deep: true,
    }
  );
</script>

<style lang="scss" scoped>
  .pay-alert {
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
  .loading {
    width: 100vw;
    height: 100vh;
    color: white;
    background-color: #292929c2;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 10;
    animation-name: fadeIn;
    animation-duration: 0.02s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
