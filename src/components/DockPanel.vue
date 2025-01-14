<script setup>
import { useDockLayout } from '@/composables/useDockLayout' // 导入 useLayout
import { computed } from 'vue'
import { DockTab } from './'

const props = defineProps({
  panelData: { type: Object, required: true },
})

// 从 composable 中只获取需要的方法
const { setActiveTab } = useDockLayout()

const activeTab = computed(() =>
  props.panelData.tabs.find(t => t.id === props.panelData.activeTabId),
)

function onTabClick(tabId) {
  // 直接调用从 composable 获取的方法
  setActiveTab(props.panelData.id, tabId)
}
</script>

<template>
  <div class="dock-panel">
    <div class="dock-tabs-bar">
      <DockTab
        v-for="tab in panelData.tabs"
        :key="tab.id"
        :tab-data="tab"
        :is-active="tab.id === panelData.activeTabId"
        @click="onTabClick(tab.id)"
      />
    </div>
    <div class="dock-content">
      <component :is="activeTab.content" v-if="activeTab" />
    </div>
  </div>
</template>
