import { createApp } from "vue";

import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// ele 3
import element3 from "@/plugins/element3.js";
// import "element3/lib/theme-chalk/index.css";

// 全局样式
import "@/styles/index.scss";

createApp(App).use(router).use(createPinia()).use(element3).mount("#app");
