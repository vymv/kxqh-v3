const heroList = [
  {
    id: 430,
    level: 'N',
    name: '御馔津呱',
  },
  {
    id: 429,
    level: 'N',
    name: '玉藻前呱',
  },
  {
    id: 428,
    level: 'N',
    name: '雪童子呱',
  },
  {
    id: 364,
    level: 'SSR',
    name: '阿修罗',
  },
  {
    id: 363,
    level: 'SSR',
    name: '帝释天',
  },
  {
    id: 362,
    level: 'SP',
    name: '蝉冰雪女',
  },
  {
    id: 361,
    level: 'R',
    name: '垢尝',
  },
  {
    id: 360,
    level: 'SSR',
    name: '灶门祢豆子',
  },
  {
    id: 359,
    level: 'SSR',
    name: '灶门炭治郎',
  },
  {
    id: 358,
    level: 'SP',
    name: '夜溟彼岸花',
  },
  {
    id: 357,
    level: 'SP',
    name: '初翎山风',
  },
  {
    id: 356,
    level: 'SSR',
    name: '千姬',
  },
  {
    id: 355,
    level: 'SP',
    name: '麓铭大岳丸',
  },
  {
    id: 354,
    level: 'SP',
    name: '待宵姑获鸟',
  },
  {
    id: 353,
    level: 'SSR',
    name: '紧那罗',
  },
  {
    id: 352,
    level: 'SP',
    name: '缚骨清姬',
  },
  {
    id: 351,
    level: 'SSR',
    name: '铃鹿御前',
  },
  {
    id: 350,
    level: 'SR',
    name: '蝎女',
  },
  {
    id: 349,
    level: 'SR',
    name: '风狸',
  },
  {
    id: 348,
    level: 'SP',
    name: '浮世青行灯',
  },
  {
    id: 347,
    level: 'SSR',
    name: '缘结神',
  },
  {
    id: 345,
    level: 'SSR',
    name: '鬼童丸',
  },
  {
    id: 346,
    level: 'SP',
    name: '聆海金鱼姬',
  },
  {
    id: 344,
    level: 'SSR',
    name: '云外镜',
  },
  {
    id: 343,
    level: 'SP',
    name: '天剑韧心鬼切',
  },
  {
    id: 341,
    level: 'SP',
    name: '鬼王酒吞童子',
  },
  {
    id: 342,
    level: 'SR',
    name: '星熊童子',
  },
  {
    id: 340,
    level: 'SR',
    name: '纸舞',
  },
  {
    id: 338,
    level: 'SSR',
    name: '泷夜叉姬',
  },
  {
    id: 339,
    level: 'SP',
    name: '烬天玉藻前',
  },
  {
    id: 337,
    level: 'SSR',
    name: '黑崎一护',
    interactive: true,
  },
  {
    id: 336,
    level: 'SR',
    name: '朽木露琪亚',
    interactive: true,
  },
  {
    id: 334,
    level: 'SP',
    name: '骁浪荒川之主',
  },
  {
    id: 335,
    level: 'SR',
    name: '蟹姬',
  },
  {
    id: 333,
    level: 'SSR',
    name: '大岳丸',
  },
  {
    id: 332,
    level: 'SR',
    name: '久次良',
  },
  {
    id: 331,
    level: 'SP',
    name: '御怨般若',
  },
  {
    id: 329,
    level: 'SR',
    name: '海忍',
  },
  {
    id: 330,
    level: 'SSR',
    name: '不知火',
  },
  {
    id: 328,
    level: 'SP',
    name: '赤影妖刀姬',
  },
  {
    id: 327,
    level: 'SP',
    name: '苍风一目连',
  },
  {
    id: 326,
    level: 'SP',
    name: '稻荷神御馔津',
  },
  {
    id: 324,
    level: 'SR',
    name: '化鲸',
  },
  {
    id: 325,
    level: 'SSR',
    name: '八岐大蛇',
  },
  {
    id: 323,
    level: 'R',
    name: '天井下',
  },
  {
    id: 320,
    level: 'SR',
    name: '一反木绵',
  },
  {
    id: 321,
    level: 'SR',
    name: '入殓师',
  },
  {
    id: 322,
    level: 'SP',
    name: '炼狱茨木童子',
  },
  {
    id: 318,
    level: 'SR',
    name: '於菊虫',
  },
  {
    id: 319,
    level: 'SSR',
    name: '桔梗',
    interactive: true,
  },
  {
    id: 317,
    level: 'SR',
    name: '人面树',
  },
  {
    id: 316,
    level: 'SSR',
    name: '白藏主',
  },
  {
    id: 315,
    level: 'SP',
    name: '少羽大天狗',
  },
  {
    id: 312,
    level: 'SSR',
    name: '鬼切',
  },
  {
    id: 314,
    level: 'SSR',
    name: '杀生丸',
    interactive: true,
  },
  {
    id: 313,
    level: 'SSR',
    name: '犬夜叉',
    interactive: true,
  },
  {
    id: 427,
    level: 'N',
    name: '彼岸花呱',
    material: true,
  },
  {
    id: 426,
    level: 'N',
    name: '荒呱',
    material: true,
  },
  {
    id: 425,
    level: 'N',
    name: '辉夜姬呱',
    material: true,
  },
  {
    id: 424,
    level: 'N',
    name: '花鸟卷呱',
    material: true,
  },
  {
    id: 423,
    level: 'N',
    name: '一目连呱',
    material: true,
  },
  {
    id: 422,
    level: 'N',
    name: '妖刀姬呱',
    material: true,
  },
  {
    id: 421,
    level: 'N',
    name: '青行灯呱',
    material: true,
  },
  {
    id: 420,
    level: 'N',
    name: '茨木呱',
    material: true,
  },
  {
    id: 419,
    level: 'N',
    name: '小鹿男呱',
    material: true,
  },
  {
    id: 418,
    level: 'N',
    name: '两面佛呱',
    material: true,
  },
  {
    id: 417,
    level: 'N',
    name: '阎魔呱',
    material: true,
  },
  {
    id: 416,
    level: 'N',
    name: '荒川呱',
    material: true,
  },
  {
    id: 415,
    level: 'N',
    name: '酒吞呱',
    material: true,
  },
  {
    id: 414,
    level: 'N',
    name: '大天狗呱',
    material: true,
  },
  {
    id: 311,
    level: 'SSR',
    name: '面灵气',
  },
  {
    id: 307,
    level: 'SR',
    name: '猫掌柜',
  },
  {
    id: 310,
    level: 'R',
    name: '蜜桃&芥子',
    interactive: true,
  },
  {
    id: 309,
    level: 'SR',
    name: '阿香',
    interactive: true,
  },
  {
    id: 308,
    level: 'SSR',
    name: '鬼灯',
    interactive: true,
  },
  {
    id: 305,
    level: 'SSR',
    interactive: true,
    name: '卖药郎',
  },
  {
    id: 294,
    level: 'SSR',
    name: '奴良陆生',
    interactive: true,
  },
  {
    id: 296,
    level: 'SSR',
    name: '山风',
  },
  {
    id: 298,
    level: 'SR',
    name: '薰',
  },
  {
    id: 306,
    level: 'R',
    name: '虫师',
  },
  {
    id: 302,
    level: 'R',
    name: '小袖之手',
  },
  {
    id: 303,
    level: 'SR',
    name: '弈',
  },
  {
    id: 304,
    level: 'SSR',
    name: '御馔津',
  },
  {
    id: 297,
    level: 'SR',
    name: '日和坊',
  },
  {
    id: 295,
    level: 'SR',
    name: '追月神',
  },
  {
    id: 301,
    level: 'R',
    name: '数珠',
  },
  {
    id: 300,
    level: 'SSR',
    name: '玉藻前',
  },
  {
    id: 293,
    level: 'SR',
    name: '百目鬼',
  },
  {
    id: 292,
    level: 'SSR',
    name: '雪童子',
  },
  {
    id: 291,
    level: 'SR',
    name: '书翁',
  },
  {
    id: 289,
    level: 'R',
    name: '兔丸',
  },
  {
    id: 290,
    level: 'SR',
    name: '小松丸',
  },
  {
    id: 288,
    level: 'SSR',
    name: '彼岸花',
  },
  {
    id: 287,
    level: 'SR',
    name: '匣中少女',
  },
  {
    id: 285,
    level: 'SR',
    name: '鸩',
  },
  {
    id: 286,
    level: 'SR',
    name: '以津真天',
  },
  {
    id: 283,
    level: 'SSR',
    name: '荒',
  },
  {
    id: 282,
    level: 'SR',
    name: '金鱼姬',
  },
  {
    id: 275,
    level: 'SR',
    name: '万年竹',
  },
  {
    id: 273,
    level: 'SR',
    name: '青坊主',
  },
  {
    id: 274,
    level: 'R',
    name: '古笼火',
  },
  {
    id: 276,
    level: 'SR',
    name: '夜叉',
  },
  {
    id: 277,
    level: 'SR',
    name: '黑童子',
  },
  {
    id: 278,
    level: 'SR',
    name: '白童子',
  },
  {
    id: 279,
    level: 'SSR',
    name: '花鸟卷',
  },
  {
    id: 281,
    level: 'SR',
    name: '烟烟罗',
  },
  {
    id: 280,
    level: 'SSR',
    name: '辉夜姬',
  },
  {
    id: 200,
    name: '桃花妖',
    level: 'SR',
  },
  {
    id: 201,
    name: '雪女',
    level: 'SR',
  },
  {
    id: 202,
    name: '三尾狐',
    level: 'R',
  },
  {
    id: 203,
    name: '灯笼鬼',
    level: 'N',
  },
  {
    id: 205,
    name: '座敷童子',
    level: 'R',
  },
  {
    id: 206,
    name: '鲤鱼精',
    level: 'R',
  },
  {
    id: 207,
    name: '九命猫',
    level: 'R',
  },
  {
    id: 208,
    name: '狸猫',
    level: 'R',
  },
  {
    id: 209,
    name: '河童',
    level: 'R',
  },
  {
    id: 210,
    name: '鬼使白',
    level: 'SR',
  },
  {
    id: 211,
    name: '鬼使黑',
    level: 'SR',
  },
  {
    id: 212,
    name: '童男',
    level: 'R',
  },
  {
    id: 213,
    name: '童女',
    level: 'R',
  },
  {
    id: 214,
    name: '饿鬼',
    level: 'R',
  },
  {
    id: 215,
    name: '孟婆',
    level: 'SR',
  },
  {
    id: 216,
    name: '巫蛊师',
    level: 'R',
  },
  {
    id: 217,
    name: '大天狗',
    level: 'SSR',
  },
  {
    id: 218,
    name: '鸦天狗',
    level: 'R',
  },
  {
    id: 219,
    name: '酒吞童子',
    level: 'SSR',
  },
  {
    id: 220,
    name: '犬神',
    level: 'SR',
  },
  {
    id: 221,
    name: '食发鬼',
    level: 'R',
  },
  {
    id: 222,
    name: '武士之灵',
    level: 'R',
  },
  {
    id: 223,
    name: '骨女',
    level: 'SR',
  },
  {
    id: 224,
    name: '雨女',
    level: 'R',
  },
  {
    id: 225,
    name: '跳跳弟弟',
    level: 'R',
  },
  {
    id: 226,
    name: '跳跳妹妹',
    level: 'R',
  },
  {
    id: 227,
    name: '兵俑',
    level: 'R',
  },
  {
    id: 228,
    name: '丑时之女',
    level: 'R',
  },
  {
    id: 230,
    name: '独眼小僧',
    level: 'R',
  },
  {
    id: 231,
    name: '鬼女红叶',
    level: 'SR',
  },
  {
    id: 232,
    name: '铁鼠',
    level: 'R',
  },
  {
    id: 233,
    name: '跳跳哥哥',
    level: 'SR',
  },
  {
    id: 234,
    name: '椒图',
    level: 'R',
  },
  {
    id: 236,
    name: '管狐',
    level: 'R',
  },
  {
    id: 237,
    name: '山兔',
    level: 'R',
  },
  {
    id: 238,
    name: '萤草',
    level: 'R',
  },
  {
    id: 241,
    name: '蝴蝶精',
    level: 'R',
  },
  {
    id: 242,
    name: '傀儡师',
    level: 'SR',
  },
  {
    id: 243,
    name: '山童',
    level: 'R',
  },
  {
    id: 244,
    name: '首无',
    level: 'R',
  },
  {
    id: 245,
    name: '提灯小僧',
    level: 'N',
  },
  {
    id: 246,
    name: '赤舌',
    level: 'N',
  },
  {
    id: 247,
    name: '海坊主',
    level: 'SR',
  },
  {
    id: 248,
    name: '荒川之主',
    level: 'SSR',
  },
  {
    id: 249,
    name: '觉',
    level: 'R',
  },
  {
    id: 250,
    name: '青蛙瓷器',
    level: 'R',
  },
  {
    id: 251,
    name: '判官',
    level: 'SR',
  },
  {
    id: 252,
    name: '凤凰火',
    level: 'SR',
  },
  {
    id: 253,
    name: '吸血姬',
    level: 'SR',
  },
  {
    id: 254,
    name: '妖狐',
    level: 'SR',
  },
  {
    id: 255,
    name: '阎魔',
    level: 'SSR',
  },
  {
    id: 256,
    name: '妖琴师',
    level: 'SR',
  },
  {
    id: 257,
    name: '食梦貘',
    level: 'SR',
  },
  {
    id: 258,
    name: '两面佛',
    level: 'SSR',
  },
  {
    id: 259,
    name: '小鹿男',
    level: 'SSR',
  },
  {
    id: 260,
    name: '清姬',
    level: 'SR',
  },
  {
    id: 261,
    name: '镰鼬',
    level: 'SR',
  },
  {
    id: 262,
    name: '姑获鸟',
    level: 'SR',
  },
  {
    id: 263,
    name: '二口女',
    level: 'SR',
  },
  {
    id: 264,
    name: '白狼',
    level: 'SR',
  },
  {
    id: 265,
    name: '茨木童子',
    level: 'SSR',
  },
  {
    id: 266,
    name: '青行灯',
    level: 'SSR',
  },
  {
    id: 267,
    name: '樱花妖',
    level: 'SR',
  },
  {
    id: 268,
    name: '惠比寿',
    level: 'SR',
  },
  {
    id: 269,
    name: '妖刀姬',
    level: 'SSR',
  },
  {
    id: 270,
    name: '络新妇',
    level: 'SR',
  },

  {
    id: 400,
    name: '盗墓小鬼',
    level: 'N',
  },
  {
    id: 401,
    name: '寄生魂',
    level: 'N',
  },

  {
    id: 403,
    name: '唐纸伞妖',
    level: 'N',
  },
  {
    id: 404,
    name: '天邪鬼绿',
    level: 'N',
  },
  {
    id: 405,
    name: '天邪鬼赤',
    level: 'N',
  },
  {
    id: 406,
    name: '天邪鬼黄',
    level: 'N',
  },
  {
    id: 407,
    name: '天邪鬼青',
    level: 'N',
  },
  {
    id: 408,
    name: '帚神',
    level: 'N',
  },
  {
    id: 409,
    name: '涂壁',
    level: 'N',
  },
  {
    id: 272,
    name: '一目连',
    level: 'SSR',
  },
  {
    id: 271,
    name: '般若',
    level: 'SR',
  },
  {
    id: 316,
    name: '白藏主',
    level: 'SSR',
  },
  {
    id: 410,
    name: '招福达摩',
    level: 'N',
  },
  {
    id: 411,
    name: '御行达摩',
    level: 'N',
  },
  {
    id: 412,
    name: '奉为达摩',
    level: 'N',
  },
  {
    id: 413,
    name: '大吉达摩',
    level: 'N',
  },
];

let heroTree = {
  SP: [],
  SSR: [],
  SR: [],
  R: [],
  N: [],
};

heroList.map((hero) => {
  heroTree[hero.level].push({ value: hero.name, label: hero.name });
});

let heroOptions = [];
for (let o in heroTree) {
  heroOptions.push({ value: o, label: o, children: heroTree[o] });
}

export { heroTree, heroList, heroOptions };
// 爬取式神数据时采用下面的的导出方式
// exports.heroList = heroList;
