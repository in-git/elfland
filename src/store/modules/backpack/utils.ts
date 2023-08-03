import { storeToRefs } from 'pinia';
import { Ref } from 'vue';
import backpackStore from './backpack';
import { Backpack } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getBackpack = (): Backpack => {
  return backpackStore();
};
