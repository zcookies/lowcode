import { createApp, App, defineAsyncComponent } from "vue";
import Root from "./App.vue";
import router from "./router";
import { registerAnt } from "./plugin";

const app = registerAnt(createApp(Root).use(router));

let remotes = [import("library/module")];

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

//加载远程模块
Promise.all(remotes).then(arr => {
  arr.forEach(res => {
    const { components = {}, asyncModule = {} } = res.default;
    registerComponents(app, components);
    registerComponents(app, asyncModule, true);
  });
  app.mount("#app");
});
