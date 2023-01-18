import { App } from "vue";
import MyButton from "./button/HButton";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";
import SButton from "./button/index";

// 导出单独组件
export { MyButton, SFCButton, JSXButton, SButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SButton.name, SButton);
  },
};
