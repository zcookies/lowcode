import Default from "../components/default";
import Base from "../components/base";
import Render from "../components/render";
import Output from "../components/output";
//异步模块
export const asyncModule = {
  ...Base,
  ...Default,
  ...Output,
  ...Render
};

//同步模块
export const module = {};
