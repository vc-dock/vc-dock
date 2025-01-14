import { readonly, ref } from 'vue'

const layoutData = {
  id: 'root',
  type: 'horizontal',
  children: [],
  sizes: [800, 600],
}

const layout = ref(layoutData)

function findNodeById(node, id) {
  if (node.id === id) {
    return node
  }
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeById(child, id)
      if (found) {
        return found
      }
    }
  }
  return null
}

export function useDockLayout() {
  function setActiveTab(panelId, tabId) {
    const panel = findNodeById(layout.value, panelId)
    if (panel && panel.type === 'panel') {
      panel.activeTabId = tabId
    }
  }

  return {
    layout: readonly(layout),
    setActiveTab,
  }
}
