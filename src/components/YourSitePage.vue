<template>
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
    created() {
      // Vérifier si l'utilisateur est connecté lors de la création du composant
      if (!this.isLoggedIn) {
        // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        this.$router.push('/');
        /* SYSTEM DE WISH FDP MODIFIE ÇA DESUITE*/
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
    }
  };
  </script>
  