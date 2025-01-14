<script setup>
import { useDrag } from '@core/composables'

const { indicatorStyle } = useDrag()
</script>

<template>
  <div class="indicator" :style="indicatorStyle" />
</template>

<style lang="scss">
.indicator {
  background-color: rgba(#409EFF, .2);
}
</style>
