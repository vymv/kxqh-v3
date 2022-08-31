import { useYuhunStore } from '@/hooks/store/useYuhunStore.js';

export function getEqDataById(id) {
  const { getEqData } = useYuhunStore();
  return getEqData.value.filter((item) => item.id === id)[0] || null;
}

export function getEqDatasBySuitName(name) {
  const { getEqDataL15 } = useYuhunStore();
  return getEqDataL15.value.filter((item) => item.suitInfo.name === name) || [];
}
