<script setup>
import { DockNode } from './'

defineOptions({
  layout: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="dock-layout-container">
    <DockNode :node="layout" />
  </div>
</template>
