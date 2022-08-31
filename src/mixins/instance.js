import { getCurrentInstance } from 'vue';

export default function () {
  const { appContext } = getCurrentInstance();
  const { $message, $confirm, $loading } = appContext.config.globalProperties;
  return {
    $message,
    $confirm,
    $loading,
  };
}
