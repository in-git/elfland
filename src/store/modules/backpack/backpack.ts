import { defineStore } from 'pinia';
import { Backpack, Material } from '@/store/modules/backpack/types';

const materialStore = defineStore('material', {
  state: (): Material[] => [
    {
      price: 0.1,
      quantity: 0,
      name: '木头',
      miss: 0.5,
      accumulative: 1,
      ban: false,
      id: 'woods',
    },
    {
      price: 0.5,
      quantity: 0,
      name: '石头',
      miss: 0.55,
      accumulative: 1,
      ban: true,
      id: 'stone',
    },
    {
      price: 2,
      quantity: 0,
      name: '铜',
      miss: 0.65,
      accumulative: 1,
      ban: true,
      id: 'copper',
    },
    {
      price: 100,
      quantity: 0,
      name: '铁',
      miss: 0.8,
      accumulative: 1,
      ban: true,
      id: 'iron',
    },
    {
      price: 180,
      quantity: 0,
      name: '金',
      miss: 0.89,
      accumulative: 1,
      ban: true,
      id: 'gold',
    },
  ],
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
