<template>
  <div class="z-block" v-bind="props.attr">
    <slot>
      <span v-html="props.slot" v-if="props.slot"></span>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  props: {
    type: Object,
    default: () => {
      return {
        slot: "容器block"
      };
    }
  }
});
</script>
