import { createApp } from "vue";
import Root from "./App.vue";
import router from "./router";
import { registerAnt } from "./plugin";

const app = registerAnt(createApp(Root).use(router));

import("library/module").then(res => {
  res.default(app).mount("#app");
});
