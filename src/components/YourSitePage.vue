<template>
  <div class="container">
    <div class="content">
      <select v-model="selectedDevice" @change="changeDevice" class="select">
        <option value="Desktop">Desktop</option>
        <option value="Tablet">Tablet</option>
        <option value="Mobile">Mobile</option>
      </select>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
      <div class="linkBar">
        <p ref="link" @click="copyLink">link.chausettesDeChocolatJeSaisPasMoi.fr</p>
        <button @click="copyLink"><font-awesome-icon :icon="['fas', 'clone']"/></button>
      </div>
      
      <div class="Modified">
        <button class="Modifier-Button">Modifier</button>
      </div>
      <div class="viewSite">
        <button class="viewSite-Button">View Web Site</button>
      </div>
      <div class="dark-mode-toggle">
        <input type="checkbox" id="darkModeToggle" v-model="darkMode" @change="toggleDarkMode()">
        <label for="darkModeToggle" id="Test">Mode sombre</label>
      </div>
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
      <!-- <div class="dropdown">
        <div class="dark-mode-toggle">
          <input type="checkbox" id="darkModeToggle" v-model="darkMode" @change="toggleDarkMode()">
          <label for="darkModeToggle" id="Test" class="dropbtn">Mode sombre</label>
        </div>
      </div> -->
      <!-- Répétez la structure ci-dessus pour les autres éléments -->
    </div>
  </div>
  <div v-if="showSearchBar">
      <widget-search-bar />
      <button @click="showSearchBar = false" class="deletebtn">Supprimer</button>
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
      darkMode: false,
    };
  },
  mounted() {
    const storedDevice = localStorage.getItem('selectedDevice');
    if (storedDevice) {
      this.selectedDevice = storedDevice;
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.darkMode) {
        
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
    copyLink() {
      const linkText = this.$refs.link.innerText;

      navigator.clipboard.writeText(linkText)
        .then(() => {
          this.isCopied = true;
          setTimeout(() => {
            this.isCopied = false;
          }, 2000); // Affiche le message pendant 2 secondes
        })
        .catch((error) => {
          console.error('Erreur lors de la copie du lien :', error);
          // Vous pouvez également afficher une notification ou un message d'erreur ici
        });
    },
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
