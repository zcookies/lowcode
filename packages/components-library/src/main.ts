import { createApp } from "vue";
import App from "./App.vue";
import { registerAnt } from "./plugin";

registerAnt(createApp(App)).mount("#app");
