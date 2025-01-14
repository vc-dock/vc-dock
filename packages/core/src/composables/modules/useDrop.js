const dropElement = ref(null)

export function useDrop() {
  const onDrop = (e) => {
    dropElement.value = e.srcElement
  }

  return {
    onDrop,
    dropElement,
  }
}
