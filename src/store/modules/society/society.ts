import { defineStore } from 'pinia';
import pickaxe from '@/assets/technology/pickaxe.png';
import { Technology } from './types';

const socityStore = defineStore('society', {
  state: (): Technology[] => [
    {
      src: pickaxe,
      name: '镐',
      unlock: 'stone',
      spend: 'woods',
      cost: 100,
      desc: '解锁开采石头',
      isFinished: false,
    },
  ],
  persist: true,
});

export default socityStore;
