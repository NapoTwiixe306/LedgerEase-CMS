<template>
  <div
      class="logoWidget draggable"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
      @mousedown="startDrag"

  >
    <h1>YOP MON REUF BIEN OU BIEN ??</h1>
  </div>
</template>

<script>
import ColorsPalette from '../Js/MoovableWidget.vue'
export default {
  mixins: [ColorsPalette]
}
</script>
