<template>
  <div
      class="ButtonPageWidget draggable"
      :style="{transform: `translate(${position.x}px, ${position.y}px`}"
      @mousedown="startDrag"
  >
    <button>Hello World</button>
  </div>
</template>

<script>
import ButtonPageWidget from '../../Js/MoovableWidget.vue.js';
export default {
  mixins: [ButtonPageWidget],
}
</script>

<style scoped>
.ButtonPageWidget{
  position: absolute;
  cursor: move;
}
</style>
