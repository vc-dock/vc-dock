<script setup>
import Example from '@play/components/Example.vue'

const count = ref(1)
let draggedElement = null
const innerPositions = {
  offsetX: 0,
  offsetY: 0,
}

function onDragstart({ srcElement, offsetX, offsetY }) {
  innerPositions.offsetX = offsetX
  innerPositions.offsetY = offsetY
  draggedElement = srcElement.cloneNode(true)
  draggedElement.style.width = '200px'
  draggedElement.style.height = '200px'
  draggedElement.style.position = 'absolute'
  draggedElement.style.pointerEvents = 'none'
  draggedElement.style.backgroundColor = 'rgba(0, 0, 0, .2)'
  document.body.appendChild(draggedElement)
}

function onDrag(e) {
  if (draggedElement) {
    const { offsetX, offsetY } = innerPositions
    draggedElement.style.left = `${e.clientX - offsetX}px` // 设置副本的水平位置
    draggedElement.style.top = `${e.clientY - offsetY}px` // 设置副本的垂直位置
  }
}

function onDragend() {
  if (draggedElement) {
    document.body.removeChild(draggedElement) // 移除副本
    draggedElement = null
  }
}
</script>

<template>
  <div>Home</div>
  <div transition="width height duration-300 ease-DEFAULT" w="100px" h="100px" :bg="count ? '#eee' : '#aaa'" :draggable="true" @dragstart="onDragstart" @drag="onDrag" @dragend="onDragend" />
  <Example />
</template>
