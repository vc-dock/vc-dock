<script setup>
defineProps({
  direction: {
    type: String,
    default: 'up',
  },
})
</script>

<template>
  <div class="arrow" :class="direction" />
</template>

<style lang="scss">
.arrow {
  background-image: var(--vc-dock-arrow-background-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  width: 12px;
  height: 12px;
  opacity: .4;

  &.up {
    transform: rotate(0);
  }

  &.down {
    transform: rotate(180deg);
  }

  &.left {
    transform: rotate(-90deg);
  }

  &.right {
    transform: rotate(90deg);
  }
}
</style>
