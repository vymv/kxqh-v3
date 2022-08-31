import { countBy, max, merge } from "lodash";

import { useYuhunStore } from "@/hooks/store/useYuhunStore.js";
import { calcPoint } from "@/utils/parseJson.js";
import { format45 } from "./format.js";
import { groupBy, sortBy, sum } from "lodash";
import { ref, computed } from "vue";

export function getSuitMaxGrowth(suitName) {
  const propertyType = ["Speed", "CritRate", "CritPower", "EffectHitRate", "HpRate", "DefenseRate", "EffectResistRate", "AttackRate"];
  const propertyName = ["速度", "暴击", "暴击伤害", "效果命中", "生命加成", "防御加成", "效果抵抗", "攻击加成"];
  const mvaule = [18, 0.18, 0.23, 0.23, 0.18, 0.18, 0.23, 0.18];
  const { getEqData } = useYuhunStore();

  let maxValue = [];
  let i;
  for (i in propertyType) {
    // 速度
    const fullSpeed = groupBy(
      sortBy(
        // 筛选速度御魂，二号位头脖子，其他位置满速
        getEqData.value.filter((item) => {
          // // 找到副属性有速度的御魂，拿到速度值
          // let speedVal = item.random_attrs.filter((attr) => attr.type === "Speed")[0]?.value || 0;
          // if (item.pos === 1) {
          //   // 二号位显示脖子
          //   return speedVal >= 13 && item.base_attr.type === "Speed" && item.base_attr.value === 57 && item.suitInfo.name === suitName;
          // } else {
          //   return speedVal >= 15 && item.suitInfo.name === suitName;
          // }
          return item.suitInfo.name === suitName;
        }),
        // 排序方法，按速度从大到小
        (item) => {
          let speedVal = item.random_attrs.filter((attr) => attr.type === propertyType[i])[0]?.value || 0;
          return -speedVal;
        }
      ),
      // 按位置分组
      (item) => item.pos + 1
    );

    const maxSpeed = Object.entries(fullSpeed).map(([pos, yhList]) => {
      let speedVal = yhList[0].random_attrs.filter((attr) => attr.type === propertyType[i])[0]?.value || 0;
      return format45(speedVal, 4);
    });

    maxValue.push({ maxValue: maxSpeed, name: propertyName[i], mvalue: mvaule[i] });
  }
  //console.log(maxValue[1]);
  return maxValue;
}

export function getSuitPosCountByScore(suitName, calcType, rankNum) {
  const { getEqData } = useYuhunStore();
  let onlySpeed = calcType.length === 1 && calcType[0] === "S";

  let res = countBy(
    getEqData.value
      .filter((eq) => eq.suitInfo.name === suitName)
      .map((item) => ({ ...item, point: calcPoint(item, calcType, onlySpeed) }))
      .filter((eq) => eq.point >= rankNum),
    (item) => item.pos + 1
  );
  res = merge({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, res);
  return Object.values(res);
}

// 计算御魂各个维度的分数（100分制）
// https://bbs.nga.cn/read.php?&tid=15467806&pid=303809446&to=1
export function calcYuhunScore(eqData) {
  const getValue = (name) => {
    // return eqData.rand_attr[name] || 0;
    return eqData.random_attrs.filter((item) => item.type === name)[0]?.value || 0;
  };
  let score = [0, 0, 0, 0, 0, 0];
  // A输出项 = (速度/2.7+暴击/2.7+攻击加成/2.7+暴击伤害/3.6)*100/9
  score[0] = ((getValue("Speed") / 2.7 + (getValue("CritRate") * 100) / 2.7 + (getValue("AttackRate") * 100) / 2.7 + (getValue("CritPower") * 100) / 3.6) * 100) / 9;
  // F奶盾项 = (速度/2.7+暴击/2.7+生命加成/2.7+暴击伤害/3.6)*100/9
  score[1] = ((getValue("Speed") / 2.7 + (getValue("CritRate") * 100) / 2.7 + (getValue("HpRate") * 100) / 2.7 + (getValue("CritPower") * 100) / 3.6) * 100) / 9;
  // M速度命中 = (速度/2.7+命中/3.6)*100/7
  score[2] = ((getValue("Speed") / 2.7 + (getValue("EffectHitRate") * 100) / 3.6) * 100) / 7;
  // D速度抵抗 = (速度/2.7+命中/3.6)*100/7
  score[3] = ((getValue("Speed") / 2.7 + (getValue("EffectResistRate") * 100) / 3.6) * 100) / 7;
  // B双堆 = (速度/2.7+命中/3.6+抵抗/3.6)*100/8
  score[4] = ((getValue("Speed") / 2.7 + (getValue("EffectHitRate") * 100) / 3.6 + (getValue("EffectResistRate") * 100) / 3.6) * 100) / 8;
  // S纯速度项 = (速度/2.7)*100/6
  score[5] = ((getValue("Speed") / 2.7) * 100) / 6;
  return score.map((item) => format45(item, 2));
}

export function evaluationByScore(score) {
  const s = Math.max(...score);
  if (s >= 100) {
    return "SP";
  } else if (s >= 70) {
    return "SSR";
  } else if (s >= 60) {
    return "SR";
  } else if (s >= 30) {
    return "R";
  } else {
    return "N";
  }
}
