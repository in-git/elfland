import { defineStore } from 'pinia';
import { Backpack } from './types';

const backpackStore = defineStore('backpack', {
  state: (): Backpack => ({
    woods: 0,
    stone: 0,
    copper: 0,
    fish: 0,
    iron: 0,
    gold: 0,
  }),
  persist: true,
});

export default backpackStore;
