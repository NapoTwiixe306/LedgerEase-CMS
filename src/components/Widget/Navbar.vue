<template>
  <nav class="header" :class="{ 'dark-mode': darkMode }">
    <!-- Logo Link -->
    <router-link to="/" class="header__logo">LeagderEase-CMS</router-link>
    <!-- Nav Link Section -->
    <ul class="header__navigation">
      <li class="header__navigation-item"><router-link to="/" class="header__navigation-link">Home</router-link></li>
      <li class="header__navigation-item"><router-link to="/create" class="header__navigation-link">Create</router-link></li>
      <li class="header__navigation-item"><router-link to="/docs" class="header__navigation-link">Docs</router-link></li>
      <li class="header__navigation-item"><router-link to="/login" class="header__navigation-link">Login</router-link></li>
      
    </ul>
    <!-- SearchBar -->
    <div class="search-bar">
      <form method="" action="">
        <input type="text" name="search" placeholder="Rechercher...">
        <button type="submit">Search</button>
      </form>
    </div>
    <!-- DarkMode Button -->
    <div class="dark-mode-toggle">
      <input type="checkbox" id="darkModeToggle" v-model="darkMode" @change="toggleDarkMode()">
      <label for="darkModeToggle" id="Test">Mode sombre</label>
    </div>
  </nav>
</template>

<script>



export default {
  name: 'AppNavbar',
  data() {
    return {
      searchQuery: '',
      suggestion: '',
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      if (this.darkMode) {
        
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
  },
};
</script>
