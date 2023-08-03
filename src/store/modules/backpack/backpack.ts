import { defineStore } from 'pinia';
import { Backpack, Material } from '@/store/modules/backpack/types';

const materialStore = defineStore('material', {
  state: (): Material => ({
    woods: {
      exchangeRatio: 0.5,
      quantity: 0,
      name: '木头',
    },
    stone: {
      exchangeRatio: 0.5,
      quantity: 0,
      name: '石头',
    },
    copper: {
      exchangeRatio: 0.5,
      quantity: 0,
      name: '铜',
    },
    fish: {
      exchangeRatio: 0.5,
      quantity: 0,
      name: '鱼',
    },
    iron: {
      exchangeRatio: 0.5,
      quantity: 0,
      name: '铁',
    },
    gold: {
      exchangeRatio: 0.5,
      quantity: 0,
      name: '金子',
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
