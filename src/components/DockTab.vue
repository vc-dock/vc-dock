<script setup>
defineProps({
  tabData: Object,
  isActive: Boolean,
})
</script>

<template>
  <div class="dock-tab" :class="[{ active: isActive }]">
    {{ tabData.title }}
  </div>
</template>

<style>
.dock-tab { padding: 5px 10px; cursor: pointer; border-bottom: 2px solid transparent; }
.dock-tab.active { border-bottom-color: #007acc; font-weight: bold; }
</style>
