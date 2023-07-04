<template>
  <div
      class="logoWidget draggable"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
      @mousedown="startDrag"
  >
    <h1>Logo</h1>
  </div>
</template>

<script>
import LogoWidget from '../../Js/MoovableWidget.vue.js'
export default {
  mixins: [LogoWidget],
};
</script>

<style scoped>
.searchBar {
  position: absolute;
  cursor: move;
}
</style>
