import { storeToRefs } from 'pinia';
import { Ref } from 'vue';
import { Backpack, Material } from '@/store/modules/backpack/types';
import { backpackStore, materialStore } from './backpack';

export const getMaterial = (): Material => {
  return materialStore();
};
export const getBackpack = () => {
  return backpackStore();
};
