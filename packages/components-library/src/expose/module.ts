import Default from "../components/default";
import Base from "../components/base";
//异步模块
export const asyncModule = {
  ...Base,
  ...Default,
  ZEngine: () => import("../components/render/engine.vue")
};

//同步模块
export const module = {};
