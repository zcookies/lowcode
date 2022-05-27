<template>
  <draggable
    class="dragArea"
    :list="data"
    :group="{ name: 'layout' }"
    item-key="name"
  >
    <template #item="{ element }">
      <div v-bind="getType(element.type)">
        <component :is="element.name" :props="element.props"></component>
        <nested-draggable :data="element.tasks" />
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import { defineProps } from "vue";
import nestedDraggable from "./engine.vue";

const p = defineProps({
  data: {
    type: Array,
    default: () => {
      return [];
    }
  }
});

const getType = (type: string) => {
  let mode = "inline-block";
  if (type == "block") {
    mode = "block";
  }
  return {
    style: {
      display: mode
    }
  };
};
</script>

<style lang="scss" scoped>
.dragArea {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
