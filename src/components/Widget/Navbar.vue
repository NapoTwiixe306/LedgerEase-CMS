<template>
  <nav class="header" :class="{ 'dark-mode': darkMode }">
    <!-- Logo Link -->
    <a href="#" class="header__logo">LedgerEase-CMS</a>
    <!-- Nav Link Section -->
    <ul class="header__navigation">
      <li class="header__navigation-item"><a href="#" rel="noopener noreferrer" class="header__navigation-link">Home</a></li>
      <li class="header__navigation-item"><a href="#" rel="noopener noreferrer" class="header__navigation-link">Create</a></li>
      <li class="header__navigation-item"><a href="#" rel="noopener noreferrer" class="header__navigation-link">Docs</a></li>
      <li class="header__navigation-item"><a href="#" rel="noopener noreferrer" class="header__navigation-link">Login</a></li>
    </ul>
    <!-- SearchBar -->
    <div class="search-bar">
      <form method="get" action="">
        <input type="text" name="search" placeholder="Rechercher...">
        <button type="submit">Search</button>
      </form>
    </div>
    <!-- DarkMode Button -->
    <div class="dark-mode-toggle">
      <input type="checkbox" id="darkModeToggle" v-model="darkMode" @change="toggleDarkMode()">
      <label for="darkModeToggle">Mode sombre</label>
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
