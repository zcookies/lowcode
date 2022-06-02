<template>
  <div class="btn-group">
    <a-button type="primary" @click="render.format()">格式化</a-button>
    <a-button @click="preview">预览</a-button>
  </div>
  <div class="main-render">
    <z-editor :options="options" ref="render"></z-editor>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { config as options } from "../config/template";
import { useRouter } from "vue-router";
const render = ref();
const router = useRouter();

const preview = () => {
  localStorage.setItem("render", render.value.getValue());
  const { href } = router.resolve({
    path: "/render",
    query: {
      t: Math.random()
    }
  });
  window.open(href, "_blank");
};
</script>

<style lang="scss" scoped>
.btn-group {
  button {
    margin: 5px;
  }
}
.main-render {
  position: relative;
  height: 400px;
  width: 80%;
  border: 1px solid #ccc;
  min-width: 600px;
}
</style>
