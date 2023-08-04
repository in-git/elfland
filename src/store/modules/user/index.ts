import { defineStore } from 'pinia';
import { Hero } from './types';

const useUserStore = defineStore('user', {
  state: (): Hero => ({
    username: '',
    defense: 0,
    attack: 0,
    money: 0,
    hp: 100,
    skin: '',
  }),
  persist: true,
});

export default useUserStore;
