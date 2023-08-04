import { storeToRefs } from 'pinia';
import { Ref } from 'vue';
import { Backpack, Material } from '@/store/modules/backpack/types';
import { backpackStore, materialStore } from './backpack';

export const getMaterial = (): Material[] => {
  return materialStore().$state;
};
export const getBackpack = (): Backpack[] => {
  return backpackStore().$state.data;
};
export const getMaterialById = (id: string): Material | undefined => {
  return getMaterial().find((e) => {
    if (e.id === id) {
      return e;
    }
    return null;
  });
};
