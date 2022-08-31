import { defineStore } from "pinia";

const useSelectStore = defineStore({
  id: "select",
  state() {
    return {
      suit: [],
      pos: [],
      mainAttrs: [],
      attrs: [],
      noAttrs: [],
      level: [],
      leg: [],
    };
  },
});

export default useSelectStore;
