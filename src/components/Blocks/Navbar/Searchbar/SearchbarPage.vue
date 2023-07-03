<template>
  <div
      class="searchBar draggable"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
      @mousedown="startDrag"
  >
    <input
        type="text"
        placeholder="Rechercher..."
        v-model="searchQuery"
        @input="handleInput"
    />
    <button @click="handleSearch">Rechercher</button>
  </div>
</template>

<script>
import SearchBarWidget from '../../Js/MoovableWidget.vue.js'
export default {
mixins: [SearchBarWidget],
};
</script>

<style scoped>
.searchBar {
  position: absolute;
  cursor: move;
}
</style>
