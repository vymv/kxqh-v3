import { unix } from 'dayjs';

// 四舍五入  参数（数字，小数点保留位数)
const format45 = (val, v2 = 2) => {
  if (isNaN(val) || val == undefined || val == null) {
    return null;
  }
  v2 = Math.pow(10, v2);
  return Math.round(val * v2) / v2;
};

const valToColor = (val) => {
  val = val > 100 ? 100 : val;
  if (val > 75) {
    return '#63be7b';
  } else if (val < 25) {
    return '#f8696b';
  } else {
    return '#000';
  }
};

const formatValue = (val, precision = 2, hasSuffix = true) => {
  if (val <= 2) {
    if (hasSuffix) {
      return (val * 100).toFixed(precision) + '%';
    } else {
      return Number((val * 100).toFixed(precision));
    }
  } else {
    return Number(val.toFixed(precision));
  }
};

const formatDate = (timestamp, formatText = 'YYYY/MM/DD') => {
  return unix(timestamp).format(formatText);
};

export { format45, valToColor, formatValue, formatDate };
