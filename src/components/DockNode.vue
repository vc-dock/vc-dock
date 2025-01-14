<script setup>
import { DockPanel } from './'

defineProps({
  node: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <DockPanel v-if="node.type === 'panel'" :node="node" />
  <div v-else-if="node.type === 'horizontal' || node.type === 'vertical'" class="dock-layout-spliter" :class="[node.type]">
    <DockNode v-for="childNode in node.children" :key="childNode.id" :node="childNode" :style="{ flexBasis: `${node.sizes[index]}px` }" />
  </div>
</template>
