<template>
  <div class="sidebar">
    <div class="logo-wrapper">
      <router-link class="logo" to="/">LedgerEase-CMS</router-link>
    </div>
    <div class="dropdown">
      <a href="#" class="dropbtn">Navbar <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
      <div class="dropdown-content">
        <a href="#" @click="showLogo = true">Logo</a>
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
  </div>
  <div v-if="showSearchBar">
    <widget-search-bar />
    <button @click="showSearchBar = false" class="deletebtn">Supprimer</button>
  </div>
  <div v-if="showLogo">
    <WidgetLogo/>
    <button @click="showLogo = false" class="deletebtn">Supprimer</button>
  </div>
</template>

<script>
import WidgetSearchBar from "@/components/Blocks/Navbar/Searchbar/SearchbarPage.vue";
import WidgetLogo from "@/components/Blocks/Navbar/Logo/LogoPages.vue";
export default {
  name: 'AppSidebar',
  components: {WidgetSearchBar, WidgetLogo},
  data() {
    return {
      showSearchBar: false,
      showLogo: false,
    };
  },
  methods: {
    hideSearchBar() {
      this.showSearchBar = false;
    },
    hideLogo(){
      this.showLogo = false;
    }

  },
};
</script>
