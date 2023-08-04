import { defineStore } from 'pinia';
import stick from '@/assets/technology/stick.webp';
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
      desc: '解锁钓鱼收益',
      isFinished: false,
    },
    {
      src: stick,
      name: '扎鱼棍',
      unlock: 'fish',
      spend: 'stone',
      cost: 300,
      desc: '解锁钓鱼收益',
      isFinished: false,
    },
  ],
  persist: true,
});

export default socityStore;
