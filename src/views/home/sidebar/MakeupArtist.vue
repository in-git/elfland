<template>
  <div>
    <div class="skin-list">
      <ul>
        <li v-for="(item, key) in imageUrls" :key="key">
          <img :src="item.default" alt="" width="120" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const imageUrls = ref();
  const loadImages = async () => {
    const imageFiles = import.meta.glob('../../../assets/hero/*.*');
    imageUrls.value = await Promise.all(
      Object.values(imageFiles).map((file) => file())
    );
  };
  loadImages();
</script>

<style lang="scss" scoped></style>
