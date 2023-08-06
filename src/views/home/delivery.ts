import { Component, Ref, markRaw, ref } from 'vue';
import { GameStage } from './types';
import AddventureVue from './main/AdeventureList.vue';
import { assetsData } from './main/data/adventure';

/* 获取当前的场景 */
export const currentStage = ref<GameStage & { component?: Component }>({
  name: '野外',
  data: assetsData,
  component: markRaw(AddventureVue),
});
export const showSidebar = ref(true);
export const showRightSidebar = ref(true);
