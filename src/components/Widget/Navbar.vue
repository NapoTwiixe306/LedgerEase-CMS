<template>
  <nav class="header" :class="{ 'dark-mode': darkMode }">
    <!-- Logo Link -->
    <router-link to="/" class="header__logo">{{translations.logo}}</router-link>
    <!-- Burger Menu -->
    <div class="burger-menu" :class="{ 'burger-menu-open': isMenuOpen }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- Nav Link Section -->
    <ul class="header__navigation" :class="{ 'show': isMenuOpen }">
      <li class="header__navigation-item">
        <router-link to="/" class="header__navigation-link">{{translations.navigation.home}}</router-link>
      </li>
      <li class="header__navigation-item">
        <router-link to="/create" class="header__navigation-link">{{translations.navigation.create}}</router-link>
      </li>

      <li class="header__navigation-item">
        <router-link to="/register" class="header__navigation-link">{{translations.navigation.register}}</router-link>
      </li>
    </ul>
    <!-- SearchBar -->
    <div class="search-bar">
      <form method="#" action="">
        <input type="text" name="search" placeholder="Rechercher..." v-model="searchQuery">
        <button type="submit"><font-awesome-icon :icon="['fas', 'search']" class="searchBtn"/></button>
      </form>
    </div>
    <!-- DarkMode Button -->
    <div class="dark-mode-toggle">
      <input type="checkbox" id="darkModeToggle" v-model="darkMode" @change="toggleDarkMode">
      <label for="darkModeToggle" id="Test">{{translations.theme.darkMode}}</label>
    </div>
  </nav>
</template>

<script>
import translations from "@/TextVariables.json";
export default {
  name: 'AppNavbar',
  data() {
    return {
      translations: translations,
      searchQuery: '',
      suggestion: '',
      darkMode: false,
      isMenuOpen: false
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
};
</script>
