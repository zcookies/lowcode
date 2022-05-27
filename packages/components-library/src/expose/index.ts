import { App, defineAsyncComponent } from "vue";
import { asyncModule, module } from "./module";

//注册组件
function registerComponents(app: App, components: any, isAsync = false) {
  for (let comp in components) {
    if (isAsync) {
      app.component(comp, defineAsyncComponent(components[comp]));
    } else {
      app.component(comp, components[comp]);
    }
  }
}

export default function (_app: App) {
  registerComponents(_app, asyncModule, true);
  registerComponents(_app, module);
  return _app;
}
