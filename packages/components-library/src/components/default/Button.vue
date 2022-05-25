<template>
  <a-button v-if="props.title">{{ props.title }}</a-button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  props: {
    type: Object,
    default: () => {}
  }
});
</script>
