import { defineStore } from 'pinia';
import { Backpack, Material } from '@/store/modules/backpack/types';

const materialStore = defineStore('material', {
  state: (): Material => ({
    woods: {
      exchangeRatio: 0.5,
      quantity: 0,
    },
    stone: {
      exchangeRatio: 0.5,
      quantity: 0,
    },
    copper: {
      exchangeRatio: 0.5,
      quantity: 0,
    },
    fish: {
      exchangeRatio: 0.5,
      quantity: 0,
    },
    iron: {
      exchangeRatio: 0.5,
      quantity: 0,
    },
    gold: {
      exchangeRatio: 0.5,
      quantity: 0,
    },
  }),
  persist: true,
});
const backpackStore = defineStore('backpack', {
  state: (): {
    data: Backpack[];
  } => {
    return {
      data: [],
    };
  },
  persist: true,
});
export { backpackStore, materialStore };
