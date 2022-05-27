<template>
  <div v-if="props.data.type == 'view'" class="z-view">
    <template v-if="props.data.modules">
      <template v-for="item in props.data.modules">
        <engine :data="item"></engine>
      </template>
    </template>
  </div>
  <template
    v-else-if="props.data.type == 'block' || props.data.type == 'inline'"
  >
    <component :is="props.data.name" :props="props.data.props">
      <template v-if="props.data.modules">
        <template v-for="item in props.data.modules">
          <engine :data="item"></engine>
        </template>
      </template>
    </component>
  </template>
  <div v-else-if="props.data.type == 'component'" class="z-component">
    <component :is="props.data.name" :props="props.data.props"></component>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import engine from "./engine.vue";
const props = defineProps({
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
}
.z-inline {
  display: inline-block;
}
.z-block {
  display: block;
}
</style>
