import { defineStore } from 'pinia';
import { Hero } from './types';

const useUserStore = defineStore('user', {
  state: (): Hero => ({
    username: '',
    defense: 0,
    attack: 0,
    money: 0,
  }),
  persist: true,
});

export default useUserStore;
