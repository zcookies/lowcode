<template>
  <div class="z-editor" ref="el"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineExpose } from "vue";
import * as monaco from "monaco-editor";
const el = ref();
let editor: monaco.editor.IStandaloneCodeEditor;
const props = defineProps({
  options: {
    type: Object,
    default: () => {}
  }
});

onMounted(() => {
  editor = monaco.editor.create(el.value, {
    value: JSON.stringify(props.options, null, 2),
    language: "json",
    tabSize: 2,
    automaticLayout: true
  });
});

const format = () => {
  let value = JSON.parse(editor.getValue());
  editor.setValue(JSON.stringify(value, null, 2));
};

const getValue = () => {
  return editor.getValue();
};

defineExpose({
  format,
  getValue
});
</script>

<style lang="scss" scoped>
.z-editor {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>
