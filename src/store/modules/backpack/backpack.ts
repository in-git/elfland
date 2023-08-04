import { defineStore } from 'pinia';
import { Backpack, Material } from '@/store/modules/backpack/types';

const materialStore = defineStore('material', {
  state: (): Material => ({
    woods: {
      exchangeRatio: 0.1,
      quantity: 0,
      name: '木头',
      miss: 0.5,
      accumulative: 1,
    },
    stone: {
      exchangeRatio: 0.5,
      quantity: 0,
      name: '石头',
      miss: 0.55,
      accumulative: 1,
    },
    copper: {
      exchangeRatio: 2,
      quantity: 0,
      name: '铜',
      miss: 0.65,
      accumulative: 1,
    },
    fish: {
      exchangeRatio: 10,
      quantity: 0,
      name: '鱼',
      miss: 0.75,
      accumulative: 1,
    },
    iron: {
      exchangeRatio: 100,
      quantity: 0,
      name: '铁',
      miss: 0.8,
      accumulative: 1,
    },
    gold: {
      exchangeRatio: 180,
      quantity: 0,
      name: '金子',
      miss: 0.89,
      accumulative: 1,
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
