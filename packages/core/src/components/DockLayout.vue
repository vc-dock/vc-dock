<script setup>
import DropLayer from './DropLayer.vue'

defineOptions({
  name: 'DockLayout',
})

// const props = defineProps({
//   layout: {
//     type: Object,
//     required: true,
//   },
// })

// const emit = defineEmits(['update:layout'])

// function updateLayout() {

// }
</script>

<template>
  <div class="dock-layout">
    dock
  </div>
  <DropLayer />
</template>

<style lang="scss">
:root {
  --dock-layout-gap: 10px;
}
</style>
