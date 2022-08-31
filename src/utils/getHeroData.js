const axios = require('axios');

const fs = require('fs'); // 引入fs模块

const { heroList } = require('../data/hero');

let heroIdList = heroList.map((item) => item.id);

let url = 'https://g37simulator.webapp.163.com/get_hero_attr';

let resObj = {};
(async function () {
  console.log('total:', heroIdList.length);
  for (const id of heroIdList) {
    console.log('loading:', id);
    let res = await axios.get(url, {
      params: {
        heroid: Number(id),
        awake: 0,
        level: 40,
        star: 6,
      },
    });

    resObj[id] = res.data.data;
  }
  fs.writeFile('heroData.json', JSON.stringify(resObj), { flag: 'a' }, () => {});
})();
