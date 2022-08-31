import { useYuhunStore } from "@/hooks/store/useYuhunStore.js";
import { yuhunInfo } from "@/data/yuhunInfo.js";

export function groupDatasByLevel() {
  const { getEqData } = useYuhunStore();
  const count15 = getEqData.value.filter((item) => item.level === 15).length;
  const count14 = getEqData.value.filter((item) => item.level === 14).length;
  const count13 = getEqData.value.filter((item) => item.level === 13).length;
  const count12 = getEqData.value.filter((item) => item.level === 12).length;
  const count11 = getEqData.value.filter((item) => item.level === 11).length;
  const count10 = getEqData.value.filter((item) => item.level === 10).length;
  const count9 = getEqData.value.filter((item) => item.level === 9).length;
  const count8 = getEqData.value.filter((item) => item.level === 8).length;
  const count7 = getEqData.value.filter((item) => item.level === 7).length;
  const count6 = getEqData.value.filter((item) => item.level === 6).length;
  const count5 = getEqData.value.filter((item) => item.level === 5).length;
  const count4 = getEqData.value.filter((item) => item.level === 4).length;
  const count3 = getEqData.value.filter((item) => item.level === 3).length;
  const count2 = getEqData.value.filter((item) => item.level === 2).length;
  const count1 = getEqData.value.filter((item) => item.level === 1).length;
  const count0 = getEqData.value.filter((item) => item.level === 0).length;
  //const level15count = list.length;
  //console.log("长度：" + list15);
  return [
    { value: count15, name: "+15" },
    { value: count14, name: "+14" },
    { value: count13, name: "+13" },
    { value: count12, name: "+12" },
    { value: count11, name: "+11" },
    { value: count10, name: "+10" },
    { value: count9, name: "+9" },
    { value: count8, name: "+8" },
    { value: count7, name: "+7" },
    { value: count6, name: "+6" },
    { value: count5, name: "+5" },
    { value: count4, name: "+4" },
    { value: count3, name: "+3" },
    { value: count2, name: "+2" },
    { value: count1, name: "+1" },
    { value: count0, name: "+0" },
  ];
}

export function groupDatasByLeg() {
  const { getEqData } = useYuhunStore();
  const leg4full = getEqData.value.filter((item) => item.attrs.length === 4 && item.level === 15).length;
  const leg4nfull = getEqData.value.filter((item) => item.attrs.length === 4 && item.level != 15).length;
  const leg3 = getEqData.value.filter((item) => item.attrs.length === 3).length;
  const leg2 = getEqData.value.filter((item) => item.attrs.length === 2).length;

  //const level15count = list.length;
  //console.log("长度：" + list15);
  return [
    { value: leg4full, name: "4条腿满级" },
    { value: leg4nfull, name: "4条腿不满级" },
    { value: leg3, name: "3条腿" },
    { value: leg2, name: "2条腿" },
  ];
}

export function groupLevel15BySuit() {
  const { getEqData } = useYuhunStore();
  let countlv15 = [];
  for (const i in yuhunInfo) {
    let selecteddata = getEqData.value.filter((item) => item.suitInfo.id === yuhunInfo[i].id);
    selecteddata = selecteddata.filter((item) => item.level === 15);
    countlv15.push(selecteddata.length);
  }
  return countlv15;
}

export function groupYuhunBySuit() {
  const { getEqData } = useYuhunStore();
  let count = [];
  for (const i in yuhunInfo) {
    let selecteddata = getEqData.value.filter((item) => item.suitInfo.id === yuhunInfo[i].id);
    count.push(selecteddata.length);
  }
  //console.log(count);
  return count;
}

export function dotchartData(suitName) {
  const { getEqData } = useYuhunStore();
  const propertyType = ["Speed", "CritRate", "CritPower", "EffectHitRate", "HpRate", "DefenseRate", "EffectResistRate", "AttackRate"];
  const propertyName = ["速度", "暴击", "暴击伤害", "效果命中", "生命加成", "防御加成", "效果抵抗", "攻击加成"];
  let data = [];
  for (let i in propertyType) {
    let selecteddata = getEqData.value.filter((item) => item.suitInfo.name === suitName);
    selecteddata = selecteddata.filter((item) => item.level === 15);
    selecteddata = selecteddata.filter((item) => item.random_attrs.filter((attr) => attr.type === propertyType[i]).length > 0);

    let mappeddata = selecteddata.map((item) => {
      let val = item.random_attrs.filter((attr) => attr.type === propertyType[i])[0].value;
      // if (val < 1) val *= 100;
      return [item.pos + 1, val];
    });
    data.push({ name: propertyName[i], data: mappeddata });
  }
  console.log(data);
  return data;
  // [
  //   {
  //     name: "速度",
  //     data: [
  //       [1, 5],
  //       [2, 16],
  //       [3, 14],
  //     ],
  //   },
  // ];
}
