import { Component, Ref, markRaw, ref } from 'vue';
import { GameStage } from './types';
import AddventureVue from './sidebar/AdeventureList.vue';
import addventureList from './sidebar/addventure';

/* 获取当前的场景 */
export const currentStage = ref<GameStage & { component?: Component }>({
  name: '野外',
  data: addventureList[0].data,
  component: markRaw(AddventureVue),
});

export default {};
