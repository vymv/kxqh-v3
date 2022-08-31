const targetOptions = [
  {
    value: '输出伤害',
    label: '输出伤害',
  },
  {
    value: '生命治疗',
    label: '生命治疗',
  },
  {
    value: '命抗双修',
    label: '命抗双修',
  },
  {
    value: '速度',
    label: '速度',
  },
  {
    value: '攻击',
    label: '攻击',
  },
  {
    value: '生命',
    label: '生命',
  },
  {
    value: '防御',
    label: '防御',
  },
  {
    value: '命中',
    label: '命中',
  },
  {
    value: '抵抗',
    label: '抵抗',
  },
  {
    value: '双重暴击',
    label: '双重暴击',
  },
  {
    value: '暴击防御',
    label: '暴击防御',
  },
  {
    value: '云外镜阴面伤害输出',
    label: '云外镜阴面伤害输出',
  },
];

const baseAttr = [
  {
    value: '攻击加成',
    label: '攻击加成',
  },
  {
    value: '生命加成',
    label: '生命加成',
  },
  {
    value: '防御加成',
    label: '防御加成',
  },
];

const pos2AttrOptions = [
  {
    value: '速度',
    label: '速度',
  },
  ...baseAttr,
];
const pos4AttrOptions = [
  ...baseAttr,
  {
    value: '效果命中',
    label: '效果命中',
  },
  {
    value: '效果抵抗',
    label: '效果抵抗',
  },
];
const pos6AttrOptions = [
  {
    value: '暴击',
    label: '暴击',
  },
  {
    value: '暴击伤害',
    label: '暴击伤害',
  },
  ...baseAttr,
];

const limitAttrList = [
  { id: 0, name: 'attack', label: '攻击' },
  { id: 1, name: '', label: '暴击' },
  { id: 2, name: '', label: '暴击伤害' },
  { id: 3, name: '', label: '速度' },
  { id: 4, name: '', label: '防御' },
  { id: 5, name: '', label: '生命' },
  { id: 6, name: '', label: '效果命中' },
  { id: 7, name: '', label: '效果抵抗' },
];

const effectiveAttrsDict = {
  输出伤害: ['AttackRate', 'Attack', 'CritPower'],
  双重暴击: ['AttackRate', 'Attack', 'CritPower'],
  生命治疗: ['HpRate', 'CritPower'],
  命抗双修: ['EffectHitRate', 'EffectResistRate'],
  攻击: ['AttackRate', 'Attack'],
  生命: ['HpRate', 'Hp'],
  防御: ['DefenseRate', 'Defense'],
  暴击伤害: ['CritPower'],
  暴击: ['CritRate'],
  速度: ['Speed'],
  效果命中: ['EffectHitRate'],
  效果抵抗: ['EffectResistRate'],
};

export {
  targetOptions,
  pos2AttrOptions,
  pos4AttrOptions,
  pos6AttrOptions,
  limitAttrList,
  effectiveAttrsDict,
};
