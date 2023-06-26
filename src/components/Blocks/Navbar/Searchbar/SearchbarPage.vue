<template>
    <div class="search-bar">
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
        searchQuery: ''
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
      }
    }
  };
  </script>
  