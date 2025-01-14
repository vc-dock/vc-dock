<script setup>
import Arrow from './Arrow.vue'

defineOptions({
  name: 'DropCross',
})

const whichDirection = ref('')
const whichPosition = ref('')

function onDragover(e) {
  e.preventDefault()
}

function onDrop(e) {
  e.preventDefault()
  const direction = e.srcElement.dataset.direction
  const position = e.srcElement.dataset.position
  whichDirection.value = direction
  whichPosition.value = position
}
</script>

<template>
  <div class="drop-cross">
    <div class="cross-block center" />
    <div class="cross-block top" data-direction="up" data-position="inner" @dragover="onDragover" @drop="onDrop">
      <Arrow direction="up" />
    </div>
    <div class="cross-block bottom">
      <Arrow direction="down" />
    </div>
    <div class="cross-block left">
      <Arrow direction="left" />
    </div>
    <div class="cross-block right">
      <Arrow direction="right" />
    </div>
    <div class="top cross-block-outer">
      <Arrow direction="up" />
    </div>
    <div class="cross-block-outer bottom">
      <Arrow direction="down" />
    </div>
    <div class="cross-block-outer left">
      <Arrow direction="left" />
    </div>
    <div class="cross-block-outer right">
      <Arrow direction="right" />
    </div>
  </div>
</template>

<style lang="scss">
@mixin center {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}

@mixin center-y {
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto;
}

@mixin center-x {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

.drop-cross {
  @include center;
  // background-color: #ccc;
  width: 140px;
  height: 140px;

  .cross-block {
    width: 30px;
    height: 30px;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;

    &.center {
      @include center;
    }

    &.left {
      @include center-y;
      left: 20px;
    }

    &.right {
      @include center-y;
      right: 20px;
    }

    &.top {
      @include center-x;
      top: 20px;
    }

    &.bottom {
      @include center-x;
      bottom: 20px;
    }
  }

  .cross-block-outer {
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;

    &.left {
      @include center-y;
      left: 0;
      width: 15px;
      height: 30px;
    }

    &.right {
      @include center-y;
      right: 0;
      width: 15px;
      height: 30px;
    }

    &.top {
      @include center-x;
      top: 0;
      width: 30px;
      height: 15px;
    }

    &.bottom {
      @include center-x;
      bottom: 0;
      width: 30px;
      height: 15px;
    }
  }
}
</style>
