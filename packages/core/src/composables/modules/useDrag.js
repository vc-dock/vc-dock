const dragging = ref(false)
const draggingElement = ref(null)

export function useDrag() {
  const onDragstart = (e) => {
    dragging.value = true
    draggingElement.value = e.srcElement
  }

  return {
    onDragstart,
    dragging,
    draggingElement,
  }
}
