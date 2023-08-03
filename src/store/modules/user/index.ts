import { defineStore } from 'pinia';
import { Hero } from './types';

const useUserStore = defineStore('user', {
  state: (): Hero => ({
    username: undefined,
  }),
  persist: true,
});

export default useUserStore;
