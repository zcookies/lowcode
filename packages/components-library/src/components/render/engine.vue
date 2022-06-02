<template>
  <div v-if="data.type == 'view'" class="z-view">
    <template v-if="data.modules">
      <template v-for="item in data.modules">
        <engine :data="item"></engine>
      </template>
    </template>
  </div>
  <template v-else-if="data.type == 'block' || data.type == 'inline'">
    <component :is="data.name" :props="data.props">
      <template v-if="data.modules">
        <template v-for="item in data.modules">
          <engine :data="item"></engine>
        </template>
      </template>
    </component>
  </template>
  <div v-else-if="data.type == 'component'" class="z-component">
    <component :is="data.name" :props="data.props"></component>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import engine from "./engine.vue";
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
}
.z-inline {
  display: inline-block;
}
.z-block {
  display: block;
}
</style>
