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
export default {
  data() {
    return {
      isDragging: false,
      startPosition: { x: 0, y: 0 },
      currentPosition: { x: 0, y: 0 },
      position: { x: 0, y: 0 }
    };
  },
  methods: {

    startDrag(event) {
      event.preventDefault();
      this.isDragging = true;
      this.startPosition.x = event.clientX;
      this.startPosition.y = event.clientY;

      window.addEventListener('mousemove', this.handleDrag);
      window.addEventListener('mouseup', this.stopDrag);
    },
    handleDrag(event) {
      if (!this.isDragging) return;

      const deltaX = event.clientX - this.startPosition.x;
      const deltaY = event.clientY - this.startPosition.y;

      this.currentPosition.x = this.position.x + deltaX;
      this.currentPosition.y = this.position.y + deltaY;
    },
    stopDrag() {
      this.isDragging = false;
      this.position.x = this.currentPosition.x;
      this.position.y = this.currentPosition.y;

      window.removeEventListener('mousemove', this.handleDrag);
      window.removeEventListener('mouseup', this.stopDrag);
    }
  }
};
</script>

<style scoped>
.searchBar {
  position: absolute;
  cursor: move;
}
</style>
