<template>
  <RouterView />
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { showRightSidebar, showSidebar } from './views/home/delivery';

  onMounted(() => {
    if (window.innerWidth < 1000) {
      showRightSidebar.value = false;
      showSidebar.value = false;
    }
  });
</script>
