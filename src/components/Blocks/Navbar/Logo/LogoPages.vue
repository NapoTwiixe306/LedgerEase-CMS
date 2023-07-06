<template>
  <div
      class="logoWidget draggable"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
      @mousedown="startDrag"
      @dblclick="editLogo"
  >
    <h1>{{ logoText }}</h1>
  </div>
</template>

<script>
import LogoWidget from '../../Js/MoovableWidget.vue.js'
export default {
  mixins: [LogoWidget],
  data() {
    return {
      logoText: 'Logo',
      isEditing: false,
    };
  },
  methods: {
    editLogo() {
      this.isEditing = true;
      const newText = prompt('Enter the new logo text:');
      if (newText) {
        this.logoText = newText;
      }
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
.logoWidget {
  position: absolute;
  cursor: move;
}
</style>
