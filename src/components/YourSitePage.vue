<template>
  <div class="container">
    <div class="content">
    <select v-model="selectedDevice" @change="changeDevice">
      <option value="Desktop">Desktop</option>
      <option value="Tablet">Tablet</option>
      <option value="Mobile">Mobile</option>
    </select>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
  </div>
    <div class="sidebar">
      <div class="logo-wrapper">
        <router-link class="logo" to="/">LedgerEase-CMS</router-link>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">Navbar <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
        <div class="dropdown-content">
          <a href="">Logo</a>
          <a href="#" @click="showSearchBar = true">Barre de recherche</a>
          <a href="">Lien</a>
          <a href="">Bouton</a>
          <a href="">Traduction</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">Heros-Banner <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
        <div class="dropdown-content">
          <a href="">Image</a>
          <a href="">Video</a>
          <a href="">Titre</a>
          <a href="">Paragraphe</a>
          <a href="">Icones</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">Header<font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
        <div class="dropdown-content">
          <a href="">Nombre de Section</a>
          <a href="">Taille de section</a>
          <a href="">Titre</a>
          <a href="">Paragraphe</a>
          <a href="">Icones</a>
          <a href="">Image</a>
          <a href="">Video</a>
          <a href="">Card Design</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">À Propos<font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
        <div class="dropdown-content">
          <a href="">Titre</a>
          <a href="">Paragraphe</a>
          <a href="">Icones</a>
          <a href="">Liens</a>
          <a href="">Bouton</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">Footer<font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
        <div class="dropdown-content">
          <a href="">Logo</a>
          <a href="">Lien</a>
          <a href="">Icones</a>
          <a href="">Bouton</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">DarkMode</a>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">Palettes de Couleurs</a>
      </div>
      <!-- Répétez la structure ci-dessus pour les autres éléments -->
    </div>
    <div v-if="showSearchBar">
      <widget-search-bar />
      <button @click="showSearchBar = false">Supprimer</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WidgetSearchBar from '../components/Blocks/Navbar/Searchbar/SearchbarPage.vue';

export default {
  components: {
    WidgetSearchBar,
  },
  data() {
    return {
      isLoggedIn: localStorage.getItem('token') != null,
      name: null,
      showSearchBar: false,
      selectedDevice: 'Device',
    };
  },
  mounted() {
    const storedDevice = localStorage.getItem('selectedDevice');
    if (storedDevice) {
      this.selectedDevice = storedDevice;
    }
  },
  methods: {
    async logout() {
      try {
        await axios.post('http://localhost:3000/auth/logout');
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    hideSearchBar() {
      this.showSearchBar = false;
    },
    changeDevice() {
      localStorage.setItem('selectedDevice', this.selectedDevice);
    },
  },
};
</script>
