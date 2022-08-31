import useCalcStore from '@/store/calc.js';

const calcTotalDamage = (effectiveAttrDict, heroPanel) => {
  // 总输出 = ((式神基础攻击 * (1 + 攻击加成)) + 小攻击)  * (基础暴伤 + 御魂暴伤)
  let totalDamage = 0;
  const attackRate = effectiveAttrDict.AttackRate || 0;
  const attack = effectiveAttrDict.Attack || 0;
  const critPower = effectiveAttrDict.CritPower || 0;
  const baseAttack = heroPanel.攻击;
  const baseCritPower = heroPanel.暴击伤害;
  totalDamage = (baseAttack * (1 + attackRate) + attack) * (baseCritPower + critPower);
  return totalDamage;
};

export { calcTotalDamage };
