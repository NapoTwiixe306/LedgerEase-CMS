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
export default {
  data() {
    return {
      searchQuery: '',
      isDragging: false,
      startPosition: { x: 0, y: 0 },
      currentPosition: { x: 0, y: 0 },
      position: { x: 0, y: 0 }
    };
  },
  methods: {
    handleInput() {
      // Effectuez des actions supplémentaires lors de la saisie de l'utilisateur, si nécessaire
    },
    handleSearch() {
      // Effectuez l'action de recherche en utilisant la valeur de searchQuery
      // Par exemple, déclenchez une requête API, naviguez vers une page de résultats, etc.
      console.log('Recherche effectuée:', this.searchQuery);
    },
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
