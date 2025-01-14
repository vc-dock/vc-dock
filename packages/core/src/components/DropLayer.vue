<script setup>
import DropCross from './DropCross.vue'
// DropLayer 主要是在 pane 区域有dragover事件时显示
defineOptions({
  name: 'DropLayer',
})
</script>

<template>
  <div class="drop-layer">
    <DropCross />
  </div>
</template>

<style lang="scss">
.drop-layer {
  width: 800px;
  height: 600px;
  // background-color: #eee;
  position: absolute;
}
</style>
