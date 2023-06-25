<template>
    <h1>yop</h1>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isLoggedIn: localStorage.getItem('token') != null, // Vérifier si le token est présent dans le localstorage,
      name: null
    };
  },
  methods: {
    async logout() {
      try {
        await axios.post('http://localhost:3000/auth/logout'); // Appeler la route de /logout
        localStorage.removeItem('token'); // Supprimer le token du localStorage
        this.isLoggedIn = false; // Mettre à jour l'état de connexion
        this.$router.push('/'); // Rediriger vers la page d'accueil
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>