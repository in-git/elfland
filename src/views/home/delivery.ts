import { Component, Ref, markRaw, ref } from 'vue';
import { GameStage } from './types';
import AddventureVue from './sidebar/AdeventureList.vue';

export const currentStage = ref<GameStage & { component?: Component }>({
  name: '野外',
  data: [],
  component: markRaw(AddventureVue),
});
export default {};
