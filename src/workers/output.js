import { product } from 'cartesian-product-generator';

import { calcTarget } from '@/lib/calc.js';
import { calcTotalDamage } from '@/lib/targetCalc.js';

onmessage = (e) => {
  let { cart, effectiveAttrs, heroPanel } = e.data;
  let p = product(...cart);
  let count = 0;
  let maxDamage = 0;
  for (let item of p) {
    count++;
    let t = calcTarget(item, effectiveAttrs);
    let damageTmp = calcTotalDamage(t, heroPanel);
    maxDamage = Math.max(maxDamage, damageTmp);
  }
  self.postMessage({ count, maxDamage });
};
