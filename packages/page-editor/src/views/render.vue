<!--
 * @Author: zcookies
-->
<template>
  <z-engine :data="renderData"></z-engine>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const renderData = ref({});
const props = defineProps({
  options: {
    type: Object,
    default: () => {}
  }
});

const page = () => {
  let value = localStorage.getItem("render");
  renderData.value = value ? JSON.parse(value) : props.options;
};

page();
</script>
