<template>
  <div class="z-block" v-bind="props.attr">
    <slot>
      <span v-html="props.solt"></span>
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
        solt: "容器block"
      };
    }
  }
});
</script>
