<template>
  <a-button v-bind="props.attr" v-html="props.slot" v-on="events"></a-button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import useEvent from "@/utils/event";
const events = useEvent();
defineProps({
  props: {
    type: Object,
    default: () => {
      return {
        attr: {},
        slot: "按钮",
        event: {}
      };
    }
  }
});
</script>
