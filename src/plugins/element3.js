import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
//import "element-plus/dist/index.css";

export default function (app) {
  app.use(ElementPlus, { size: "small", zIndex: 3000 });
}
