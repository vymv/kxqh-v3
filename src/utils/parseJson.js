import { flatten } from 'lodash';

// 解析御魂json
import { yuhunInfo, attrDict, singleAttrMap } from '@/data/yuhuninfo.js';
import { calcYuhunScore } from '@/utils/analysis.js';

const parseYhJson = (json) => {
  const eqData = json.data.hero_equips;
  // let eqDataByPos = [[], [], [], [], [], []];
  eqData.forEach((eq, index) => {
    eq.suitInfo = yuhunInfo.filter((item) => item.id === eq.suit_id)[0];
    // eqDataByPos[eq.pos].push(eq);
    // // 首领御魂 主属性算上固定属性
    // if (eq.single_attrs.length) {
    //   let singleAttr = singleAttrMap.filter((attr) => attr.id === eq.single_attr)[0];
    //   if (eq.base_attr[singleAttr.type]) {
    //     eq.base_attr[singleAttr.type] += singleAttr.rate;
    //   } else {
    //     eq.base_attr[singleAttr.type] = singleAttr.rate;
    //   }
    // }
  });
  const res = { ...json.data, eqData };
  Reflect.deleteProperty(res, 'realm_cards');
  Reflect.deleteProperty(res, 'heroes');
  Reflect.deleteProperty(res, 'realm_cards');
  Reflect.deleteProperty(res, 'hero_book_shards');
  Reflect.deleteProperty(res, 'hero_equip_presets');
  Reflect.deleteProperty(res, 'story_tasks');
  Reflect.deleteProperty(res, 'hero_equips');
  eqData.forEach((item) => {
    item.score = calcYuhunScore(item);
    Reflect.deleteProperty(item, 'suit_id');
  });
  console.log(res);
  return res;
};

// A输出项 、F奶盾项、M命中、D抵抗、B双堆、S纯速度项
const attrsDict = {
  A: ['CritPower', 'CritRate', 'AttackRate'],
  F: ['CritPower', 'CritRate', 'HpRate'],
  M: ['EffectHitRate'],
  D: ['EffectResistRate'],
  B: ['EffectResistRate', 'EffectHitRate'],
  S: ['Speed'],
};

const calcAttr = (attrName, attrVal) => {
  if (attrName !== 'Speed') {
    attrVal *= 100;
  }
  // 速度 暴击 生命 攻击
  if (['Speed', 'CritRate', 'HpRate', 'AttackRate'].includes(attrName)) {
    return Math.ceil(attrVal / 3);
  }
  // 命中、抵抗、爆伤
  return Math.ceil(attrVal / 4);
};

// 收益次数计算
const calcPoint = (eqData, type = ['A', 'S'], onlySpeed = false) => {
  let point = 0;

  // 如果只考虑速度做为评分标准 则二号位主属性非速度的都视为0分（如防御17速）
  if (onlySpeed && eqData.pos === 2 && eqData.base_attr !== 'Speed') {
    return 0;
  }

  // 有效属性列表
  const goodAttr = [...new Set(flatten(type.map((item) => attrsDict[item])))];
  // const randAttr = Object.entries(eqData.rand_attr);
  const randAttr = eqData.random_attrs.map((item) => [item.type, item.value]);
  randAttr.forEach(([name, value]) => {
    if (goodAttr.includes(name)) {
      point += calcAttr(name, value);
    }
  });
  return point;
};

export { parseYhJson, calcPoint };
