import { defineStore } from 'pinia';
import { UserState } from './types';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
  }),
  persist: true,
});

export default useUserStore;
