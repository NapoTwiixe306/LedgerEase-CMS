<template>
  <div class="sidebar">
    <div class="logo-wrapper">
      <router-link class="logo" to="/">{{ translations.logo }}</router-link>
    </div>
    <div class="dropdown" v-for="item in navbarItems" :key="item.title">
      <a href="#" class="dropbtn">
        {{ item.title }}
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" />
      </a>
      <div class="dropdown-content">
        <a href="#" v-for="link in item.links" :key="link.title" @click="showComponent(link.component)">{{ link.title }}</a>
      </div>
    </div>
    <div class="dropdown">
      <a href="#" class="dropbtn">DarkMode</a>
    </div>
  </div>
  <div v-for="component in componentsToShow" :key="component">
    <component :is="component" />
    <button @click="hideComponent(component)" class="deletebtn">Supprimer</button>
  </div>
</template>

<script>
import translations from "@/TextVariables.json";

import SearchBar from "@/components/Blocks/Navbar/Searchbar/SearchbarPage.vue";
import Logo from "@/components/Blocks/Navbar/Logo/LogoPages.vue";
import ButtonPage from "@/components/Blocks/Navbar/Button/ButtonPage.vue";
import TranslationPage from "@/components/Blocks/Navbar/Translation/TranslationPage.vue";
import ColorsPalettesPage from "@/components/Blocks/ColorsPalettes/ColorsPalettesPage.vue";

export default {
  name: 'AppSidebar',
  components: {
    SearchBar,
    Logo,
    ButtonPage,
    TranslationPage,
    ColorsPalettesPage,
  },
  data() {
    return {
      componentsToShow: [],
      navbarItems: [
        {
          title: translations.sidebar.navbar_title,
          links: [
            { title: translations.sidebar.navbar_item.logo, component: 'Logo' },
            { title: translations.sidebar.navbar_item.search, component: 'SearchBar' },
            { title: translations.sidebar.navbar_item.link },
            { title: translations.sidebar.navbar_item.button, component: 'ButtonPage' },
            { title: translations.sidebar.navbar_item.translate, component: 'TranslationPage' },
          ],
        },
        {
          title: translations.sidebar.header_title,
          links: [
            { title: translations.sidebar.header_item.sectionNumber },
            { title: translations.sidebar.header_item.sectionSize },
            { title: translations.sidebar.header_item.title },
            { title: translations.sidebar.header_item.para },
            { title: translations.sidebar.header_item.icons },
            { title: translations.sidebar.header_item.img },
            { title: translations.sidebar.header_item.video },
            { title: translations.sidebar.header_item.card },
          ],
        },
        {
          title: translations.sidebar.about_title,
          links: [
            { title: translations.sidebar.about_item.title },
            { title: translations.sidebar.about_item.para },
            { title: translations.sidebar.about_item.icons },
            { title: translations.sidebar.about_item.link },
            { title: translations.sidebar.about_item.button, component: ButtonPage },
          ],
        },
        {
          title: translations.sidebar.footer_title,
          links: [
            { title: translations.sidebar.footer_item.logo, component: 'Logo' },
            { title: translations.sidebar.footer_item.icons},
            { title: translations.sidebar.footer_item.button, component: 'ButtonPage' },
            { title: translations.sidebar.footer_item.link },
          ],
        },
        {
          title: translations.sidebar.colors_title,
          links: [
            { title: 'Palette de Couleurs', component: 'ColorsPalettesPage' },
          ],
        },
      ],
      translations: translations,
    };
  },
  methods: {
    showComponent(component) {
      this.componentsToShow.push(component);
    },
    hideComponent(component) {
      const index = this.componentsToShow.indexOf(component);
      if (index !== -1) {
        this.componentsToShow.splice(index, 1);
      }
    },
  },
};
</script>
