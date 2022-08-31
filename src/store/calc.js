import { defineStore } from 'pinia';

import { heroPane } from '@/data/heroData.js';
import { limitAttrList, effectiveAttrsDict } from '@/data/calc.js';

const useCalcStore = defineStore({
  id: 'calc',
  state() {
    return {
      hero: ['SSR', '阿修罗'],
      suitList: [],
      limitList: Array.from(limitAttrList, (item) => ({
        attr: item.label,
        isLimited: false,
        interval: [0, undefined],
      })),
      onlySix: true,
      onlyFull: true,
      unWeared: false,
      target: '输出伤害',
      mainAttrs: {
        pos2: ['攻击加成'],
        pos4: ['攻击加成'],
        pos6: ['暴击', '暴击伤害'],
      },
    };
  },
  actions: {
    setHero(data) {
      this.hero = data;
    },
    addSuit(data) {
      this.suitList.push(data);
    },
    updateSuit(index, id) {
      this.suitList[index].id = id;
    },
    resetSuit() {
      this.suitList = [];
    },
    resetLimitList() {
      this.limitList = Array.from(limitAttrList, (item) => ({
        attr: item.label,
        isLimited: false,
        interval: [0, undefined],
      }));
    },
  },
  getters: {
    getHero() {
      return this.hero[1];
    },
    getHeroPanel() {
      return heroPane[this.getHero];
    },
    getSuitList() {
      return this.suitList.sort((a, b) => b.count - a.count);
    },
    getSuitLength() {
      return this.suitList.length;
    },
    // 御魂套装数量
    getSuitCount() {
      return this.suitList.reduce((prev, item) => prev + item.count, 0);
    },
    is222() {
      return this.suitList.filter((item) => item.count === 2).length > 1;
    },
    // 获取限制的属性列表
    getLimitedList() {
      return this.limitList.filter((item) => item.isLimited);
    },
    // 获取计算相关属性：包括目标以及限制到的属性
    getEffectiveAttrs() {
      let effectiveAttrsList = effectiveAttrsDict[this.target];
      this.limitList
        .filter((item) => item.isLimited)
        .forEach((limit) => {
          effectiveAttrsList.push(...effectiveAttrsDict[limit.attr]);
        });
      return [...new Set(effectiveAttrsList)];
    },
    // [非自由]属性 有上限限制的属性
    // 如果速度有上限，那+3速度和+5速度 都有可能是最佳属性 则不能比较速度属性
    getNotFreeAttrs() {
      let notFreeAttrs = [];
      this.limitList
        .filter((item) => item.isLimited && item.interval[1] > 0)
        .forEach((limit) => {
          notFreeAttrs.push(...effectiveAttrsDict[limit.attr]);
        });
      return [...new Set(notFreeAttrs)];
    },
    // 获取候选套装列表
    getCandidateSuits() {},
  },
});

export default useCalcStore;
