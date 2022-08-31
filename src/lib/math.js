import { reduce, map, intersection } from 'lodash';

// 计算组合数
const calcCombNum = (list) => {
  const count = reduce(
    map(list, (item) => item.length),
    (a, b) => a * b,
    1,
  );
  // console.log('当前组合：', count);
  return count;
};

/**
 * 判断两个列表是否有交集
 *
 * @param {*} A array
 * @param {*} B array
 * @return {*} Boolean
 */
const hasIntersection = (A, B) => {
  return !!intersection(A, B).length;
};

/**
 * 两个集合的差集
 *
 * @param {*} A array
 * @param {*} B array
 * @return {*} A - B
 */
const differenceSet = (A, B) => {
  return A.filter((v) => B.indexOf(v) == -1);
};

// ES6
class Permutation {
  constructor(arr) {
    this.arr = Array.from(arr);
    this.result = [];
    this.len = 0;
    this.run(0);
  }

  run(index) {
    if (index === this.arr.length - 1) {
      this.result.push(Array.from(this.arr));
      this.len++;
      return;
    }
    for (let i = index; i < this.arr.length; i++) {
      [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
      this.run(index + 1);
      [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
    }
  }
}

export { calcCombNum, hasIntersection, differenceSet, Permutation };
