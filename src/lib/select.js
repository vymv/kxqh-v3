import { toRaw } from "vue";
import { useYuhunStore } from "@/hooks/store/useYuhunStore.js";
import useSelectStore from "@/store/select.js";

const selectYuhun = () => {
  const { getEqData } = useYuhunStore();
  const selectStore = useSelectStore();
  let yuhunList = getEqData.value;

  yuhunList = pruneSuit(yuhunList, selectStore.suit);
  yuhunList = prunePos(yuhunList, selectStore.pos);
  yuhunList = pruneMainAttr(yuhunList, selectStore.mainAttrs);
  yuhunList = pruneAttr(yuhunList, selectStore.attrs);
  yuhunList = pruneNoAttr(yuhunList, selectStore.noAttrs);
  yuhunList = pruneLevel(yuhunList, selectStore.level);
  yuhunList = pruneLeg(yuhunList, selectStore.leg);
  console.log("筛选后总数：", yuhunList.length);
  return yuhunList.length;

  //console.log("序列化：", JSON.stringify(yuhunList[0].attrs.length));

  // yuhunList = pruneLeg(yuhunList, selectStore.leg);
  return yuhunList;
};

// const pruneYuhunList = () => {
//   const { getEqDataByPos } = useYuhunStore();
//   const calcStore = useCalcStore();
//   let yuhunList = getEqDataByPos.value;
//   calcCombNum(yuhunList);
//   // 根据套装修剪
//   // 修剪246主属性
//   yuhunList = pruneMainAttr(yuhunList, calcStore.mainAttrs);
//   calcCombNum(yuhunList);
//   // 修剪非六星的/满级的
//   yuhunList = pruneSixOrFull(yuhunList, calcStore.onlySix, calcStore.onlyFull);
//   calcCombNum(yuhunList);
//   // 修剪不包含有效属性的御魂
//   yuhunList = pruneUseless(yuhunList, calcStore.getEffectiveAttrs);
//   calcCombNum(yuhunList);
//   // 修剪御魂属性较弱的御魂
//   yuhunList = pruneFreeYh(yuhunList, calcStore.getEffectiveAttrs, calcStore.getNotFreeAttrs);
//   calcCombNum(yuhunList);

//   yuhunList = yuhunList.map((pos) => {
//     return pos.map((item) => toRaw(item));
//   });
//   return yuhunList;
// };

// // 修剪246主属性
// const pruneMainAttr = (list, attrs) => {
//   list[1] = list[1].filter((item) => attrs.pos2.includes(item.baseAttr));
//   list[3] = list[3].filter((item) => attrs.pos4.includes(item.baseAttr));
//   list[5] = list[5].filter((item) => attrs.pos6.includes(item.baseAttr));
//   return list;
// };

const pruneSuit = (list, suit) => {
  if (suit.length == 0) return list;
  list = list.filter((item) => suit.includes(item.suitInfo.id));
  return list;
  //console.log("筛选", list);
};
const prunePos = (list, pos) => {
  if (pos.length == 0) return list;
  list = list.filter((item) => pos.includes(item.pos));
  return list;
};

const pruneMainAttr = (list, attrs) => {
  if (attrs.length == 0) return list;
  list = list.filter((item) => attrs.includes(item.base_attr.type));
  //console.log("筛选内容", attrs);
  //console.log("筛选后：", list.length);
  return list;
};

const pruneAttr = (list, attrs) => {
  if (attrs.length == 0) return list;
  list = list.filter((item) => {
    let ownattrs = item.attrs.map((it) => it.type);
    var included = true;
    for (const i in attrs) {
      if (!ownattrs.includes(attrs[i])) {
        included = false;
      }
    }
    return included;
  });
  return list;
};

const pruneNoAttr = (list, noAttrs) => {
  if (noAttrs.length == 0) return list;
  list = list.filter((item) => {
    let ownattrs = item.attrs.map((it) => it.type);
    var included = false;
    for (const i in noAttrs) {
      if (ownattrs.includes(noAttrs[i])) {
        included = true;
        break;
      }
    }
    return !included;
  });
  return list;
};

const pruneLevel = (list, level) => {
  //console.log(level);
  if (level.length == 0) return list;
  list = list.filter((item) => level.includes(item.level + ""));
  return list;
};

const pruneLeg = (list, leg) => {
  if (leg.length == 0) return list;
  list = list.filter((item) => leg.includes(item.attrs.length + ""));
  return list;
};
// // 修剪非六星的/满级的
// const pruneSixOrFull = (list, onlySix, onlyFull) => {
//   if (!onlySix && !onlyFull) return list;
//   if (onlySix) {
//     list = list.map((items) => items.filter((item) => item.quality === 6));
//   }
//   if (onlyFull) {
//     list = list.map((items) => items.filter((item) => item.level === 15));
//   }
//   return list;
// };

// // 修剪不包含有效属性的御魂
// const pruneUseless = (list, effectiveAttrs) => {
//   list = list.map((items) => items.filter((item) => hasIntersection(Object.keys(item.rand_attr), effectiveAttrs)));
//   return list;
// };

// // 修剪御魂属性较弱的御魂 不能比较[非自由]属性
// // 比如 一号位 3攻击 8暴击 就不如一个 5攻击 8暴击的 此时把前者修剪掉
// // [非自由]属性 定义:如果速度有上限 那3速度和5速度相比 都有可能是最佳属性 此时不能修剪掉前者
// const pruneFreeYh = (list, effectiveAttrs, notFreeAttrs) => {
//   const freeAttrs = differenceSet(effectiveAttrs, notFreeAttrs);
//   let maybeBadLists = list.map((items) =>
//     groupBy(
//       sortBy(
//         items
//           .filter((item) => !hasIntersection(Object.keys(item.rand_attr), notFreeAttrs))
//           .map((item) => {
//             let obj = { id: item.id, suitName: item.suitInfo.name, attrs: [] };
//             freeAttrs.forEach((attr) => {
//               obj.attrs.push(item.rand_attr[attr] || 0);
//             });
//             return obj;
//           }),
//         ["suitName"].concat(freeAttrs)
//       ),
//       "suitName"
//     )
//   );
//   let badList = [[], [], [], [], [], []];
//   maybeBadLists.forEach((pos, index) => {
//     Object.values(pos).forEach((items) => {
//       for (let i = 0; i < items.length - 1; i++) {
//         let a = items[i].attrs;
//         let b = items[i + 1].attrs;
//         let c = [];
//         for (let j = 0; j < a.length; j++) {
//           c.push(b[j] - a[j] >= 0 ? 1 : 0);
//         }
//         if (c.length === sum(c)) {
//           badList[index].push(items[i].id);
//         }
//       }
//     });
//   });
//   list = list.map((items, index) => items.filter((item) => !badList[index].includes(item.id)));
//   return list;
// };

// // 先组合后排列
// const getYuhunCombos = () => {
//   const calcStore = useCalcStore();
//   const suitList = calcStore.getSuitList;
//   let mainCandidates = [];
//   let secondCandidates = [];
//   // 套装组合
//   let comboList = [];
//   if (suitList.length === 2) {
//     // 先考虑 4 + 2 的情况
//     mainCandidates = getSuitsById(suitList.filter((item) => item.count === 4)[0].id);
//     secondCandidates = getSuitsById(suitList.filter((item) => item.count === 2)[0].id);
//     for (const four of mainCandidates) {
//       for (const two of secondCandidates) {
//         comboList.push([four, four, four, four, two, two]);
//       }
//     }
//   }
//   // 套装排列
//   let result = [];
//   for (let cb of comboList) {
//     let p = new Permutation(cb);
//     result.push(...uniqWith(p.result, isEqual));
//   }
//   return result;
// };

// // 根据id获取御魂种类，如id=6，返回攻击加成的御魂种类列表
// // 如果是300002直接返回本身的列表
// const getSuitsById = (id) => {
//   if (id > 10) {
//     return [id];
//   } else {
//     let attrType = twoSuitOptions.filter((item) => item.id === id)[0].type;
//     return yuhunInfo.filter((yuhun) => yuhun.type === attrType).map((item) => item.id);
//   }
// };

// const makeCombination = () => {
//   const combList = getYuhunCombos();
//   const pruneList = pruneYuhunList();

//   let cartList = [];
//   combList.forEach((comb) => {
//     // comb. like [300002, 300002, 300002, 300002, 300004, 300004]
//     let temp = comb.map((id, index) => {
//       let posList = pruneList[index].filter((item) => item.suitInfo.id === id);
//       if (!posList.length) {
//         return false;
//       } else {
//         return posList;
//       }
//     });
//     if (!temp.filter((item) => item === false).length) {
//       cartList.push(temp);
//     }
//   });
//   let res = [];
//   let totalComb = 0;
//   const calcStore = useCalcStore();
//   const effectiveAttrs = calcStore.getEffectiveAttrs;
//   const getHeroPanel = calcStore.getHeroPanel;
//   cartList.forEach((cart) => {
//     // 组合个数
//     totalComb += calcCombNum(cart);
//     let worker = new MyWorker();
//     worker.postMessage({ cart, effectiveAttrs, heroPanel: getHeroPanel });
//     worker.onmessage = (e) => {
//       console.log(e.data);
//     };
//     res.push(product(...cart));
//   });
//   console.log("total", totalComb);
//   return res;
// };

// // 根据御魂组合提取有效属性加成
// const calcTarget = (comb, effectiveAttrs) => {
//   let effectiveAttrDict = {};
//   effectiveAttrs.forEach((attr) => {
//     effectiveAttrDict[attr] = 0;
//   });
//   comb.forEach((item, index) => {
//     effectiveAttrs.forEach((attr) => {
//       // 主属性
//       effectiveAttrDict[attr] += item.base_attr[attr] || 0;
//       // 附属性
//       effectiveAttrDict[attr] += item.rand_attr[attr] || 0;
//     });
//   });
//   // console.log(effectiveAttrDict);
//   return effectiveAttrDict;
// };

export { selectYuhun };
