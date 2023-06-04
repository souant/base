import { App } from "vue";
import BButton from "./button";

// 导出单独组件
export { BButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(BButton.name, BButton);
  },
};
