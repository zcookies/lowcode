<template>
  <div class="home">
    <div class="sider">
      <draggable
        v-model="comps"
        item-key="name"
        :group="{ name: 'layout', pull: 'clone', put: false }"
        :clone="cloneDom"
      >
        <template #item="{ element }">
          <div>
            <component :is="element.name" :props="element.props"></component>
          </div>
        </template>
      </draggable>
    </div>
    <div class="content">
      <engine :data="data"></engine>
    </div>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import engine from "../components/layout/engine.vue";
import { ref } from "vue";
import { library } from "../config/list";
let comps = ref(library());

const data = ref(library());

const cloneDom = (el: any) => {
  let newStr = JSON.stringify(el);
  return JSON.parse(newStr);
};
</script>

<style lang="scss" scoped>
.home {
  position: fixed;
  width: 100vw;
  height: 100vh;
  .sider {
    position: relative;
    display: inline-block;
    width: 180px;
    height: 100%;
    overflow-y: auto;
  }
  .content {
    position: relative;
    display: inline-block;
    width: calc(100% - 190px);
    height: 100%;
    overflow-y: auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
