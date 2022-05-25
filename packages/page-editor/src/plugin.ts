import "ant-design-vue/dist/antd.less";
import type { App } from "vue";
import { Button } from "ant-design-vue";

export const registerAnt = (_app: App) => {
  [Button].forEach(module => {
    _app.use(module);
  });
  return _app;
};
