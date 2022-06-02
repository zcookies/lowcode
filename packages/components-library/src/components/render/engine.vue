<template>
  <div v-if="data.type == 'view'" class="z-view">
    <template v-if="data.modules">
      <template v-for="item in data.modules">
        <engine :data="item"></engine>
      </template>
    </template>
  </div>
  <template v-else-if="['block', 'inline', 'component'].includes(data.type)">
    <component :is="data.name || config[data.type]" :props="data.props">
      <template v-if="data.modules">
        <template v-for="item in data.modules">
          <engine :data="item"></engine>
        </template>
      </template>
    </component>
  </template>
  <div v-else></div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import engine from "./engine.vue";

// name - component 映射关系
const config: Record<string, any> = {
  block: "z-block",
  inline: "z-inline"
};

defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        type: "view"
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.z-view {
  display: block;
  .z-inline {
    display: inline-block;
  }
  .z-block {
    display: block;
  }
}
</style>
