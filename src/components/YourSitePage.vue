<template>
    <div class="sidebar">
      <div class="logo-wrapper">
        <router-link class="logo" to="/">LedgerEase-CMS</router-link>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">Navbar <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-right" /></a>
        <div class="dropdown-content">
          <a href="">Logo</a>
          <a href="">Barre de recherche</a>
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
    <div>
      <h1>yop</h1>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </template>

  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        isLoggedIn: localStorage.getItem('token') != null,
        name: null
      };
    },
    // created() {
    //   // Vérifier si l'utilisateur est connecté lors de la création du composant
    //   if (!this.isLoggedIn) {
    //     // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    //     this.$router.push('/');
    //     /* SYSTEM DE WISH FDP MODIFIE ÇA DESUITE*/
    //   }
    // },
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
    }
  };
  </script>
  