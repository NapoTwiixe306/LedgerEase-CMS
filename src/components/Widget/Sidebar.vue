<template>
  <div class="sidebar">
    <div class="logo-wrapper">
      <router-link class="logo" to="/">{{translations.logo}}</router-link>
    </div>
    <div class="dropdown">
      <a href="#" class="dropbtn">{{translations.sidebar.navbar_title}} <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
      <div class="dropdown-content">
        <a href="#" @click="showLogo = true">{{translations.sidebar.navbar_item.logo}}</a>
        <a href="#" @click="showSearchBar = true">{{translations.sidebar.navbar_item.search}}</a>
        <a href="">{{translations.sidebar.navbar_item.link}}</a>
        <a href="#" @click="showButtonPage = true">{{translations.sidebar.navbar_item.button}}</a>
        <a href="#" @click="showTranslatePage = true">{{translations.sidebar.navbar_item.translate}}</a>
      </div>
    </div>
    <div class="dropdown">
      <a href="#" class="dropbtn">{{translations.sidebar.hero_title}}<font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
      <div class="dropdown-content">
        <a href="">{{translations.sidebar.heros_item.image}}</a>
        <a href="">{{translations.sidebar.heros_item.video}}</a>
        <a href="">{{translations.sidebar.heros_item.title}}</a>
        <a href="">{{translations.sidebar.heros_item.para}}</a>
        <a href="">{{translations.sidebar.heros_item.icons}}</a>
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
      <a href="#" class="dropbtn">Footer <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
      <div class="dropdown-content">
        <a href="#" @click="showLogo = true">Logo</a>
        <a href="">Icons</a>
        <a href="#" @click="showButtonPage = true">Bouton</a>
        <a href="#">Link</a>
      </div>
    </div>
    <div class="dropdown">
      <a href="#" class="dropbtn">DarkMode</a>
    </div>
    <div class="dropdown">
      <a href="#" @click="showPalettes = true" class="dropbtn">Palettes de Couleurs</a>
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
  <div v-if="showButtonPage">
    <ButtonPage/>
    <button @click="showButtonPage = false" class="deletebtn">Supprimer</button>
  </div>
  <div v-if="showTranslatePage">
    <TranslationPage/>
    <button @click="showTranslatePage = false" class="deletebtn">Supprimer</button>
  </div>
  <div v-if="showPalettes">
    <ColorsPalettesPage/>
    <button @click="showPalettes = false" class="deletebtn">Supprimer</button>
  </div>
</template>

<script>
import WidgetSearchBar from "@/components/Blocks/Navbar/Searchbar/SearchbarPage.vue";
import WidgetLogo from "@/components/Blocks/Navbar/Logo/LogoPages.vue";
import ButtonPage from "@/components/Blocks/Navbar/Button/ButtonPage.vue";
import translations from "@/TextVariables.json"
import TranslationPage from "@/components/Blocks/Navbar/Translation/TranslationPage.vue";
import ColorsPalettesPage from "@/components/Blocks/ColorsPalettes/ColorsPalettesPage.vue";
export default {
  name: 'AppSidebar',
  components: {
    ColorsPalettesPage,
    TranslationPage,
    ButtonPage,
    WidgetSearchBar,
    WidgetLogo,
  },
  data() {
    return {
      showSearchBar: false,
      showLogo: false,
      showButtonPage: false,
      showTranslatePage: false,
      showPalettes: false,
      translations: translations

    };
  },
  methods: {
    hideSearchBar() {
      this.showSearchBar = false;
    },
    hideLogo(){
      this.showLogo = false;
    },
    hideButtonPage(){
      this.showButtonPage = false;
    },
    hideTranslatePage(){
      this.showTranslatePage = false;
    },
    hidePalettes(){
      this.showPalettes = false;
    }

  },
};
</script>
