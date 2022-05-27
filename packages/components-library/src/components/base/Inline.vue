<template>
  <div class="z-inline" v-bind="props.attr">
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
        solt: "容器-inline"
      };
    }
  }
});
</script>
