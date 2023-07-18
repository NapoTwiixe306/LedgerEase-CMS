<template>
  <div
      class="logoWidget draggable"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
      @mousedown="startDrag"

  >
    <div class="panel">
        <h1>Panel</h1>
    </div>
  </div>
</template>

<script>
import ColorsPalette from '../Js/MoovableWidget.vue'
export default {
  mixins: [ColorsPalette]
}
</script>
