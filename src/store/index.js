import { defineStore } from 'pinia';

const useAppStore = defineStore({
  id: 'yyx',
  state() {
    return {
      yyx: {},
    };
  },
  actions: {
    setYuhunStore(data) {
      this.yyx = data;
    },
  },
  getters: {
    hasYYXState() {
      return !!Object.keys(this.yyx).length;
    },
    getUserInfo() {
      return {
        ...this.yyx.player,
        timestamp: this.yyx.timestamp,
        currency: this.yyx.currency,
      };
    },
    getEqData() {
      return this.yyx.eqData;
    },
  },
});

export default useAppStore;
