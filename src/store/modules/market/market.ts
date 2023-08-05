import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
  state: () => ({}),
  persist: true,
});

export default useUserStore;
