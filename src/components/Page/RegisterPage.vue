<template>
  <Navbar/>
  <div class="register">
    <div class="register2">
      <h1 class="title">Let's get started</h1>
      <form @submit.prevent="submitForm">
        <div class="input" >
          <label class="input-label" for="name">Nom d'utilisateur :</label>
          <input class="input-field" id="name" type="text" placeholder="Entrez votre nom d'utilisateur ici" v-model="name" required>
        </div>
        <div class="input">
          <label class="input-label" for="email">Email :</label>
          <input class="input-field" id="email" type="email" placeholder="Entrez votre adresse email ici" v-model="email" required>
        </div>
        <div class="input">
          <label class="input-label" for="password">Mot de passe :</label>
          <input class="input-field" id="password" type="password" placeholder="Entrez votre mot de passe ici" v-model="password" required>
        </div>
        <div class="action">
          <button class="action-button" type="submit">
          Créer un compte
        </button>
        </div>
      </form>
      <div class="forgot">
        <span>Vous avez déjà un compte ? </span>
        <router-link to="/create">Connectez-vous</router-link>
      </div>
    </div>
    <span class="vertical-bar"></span>
    <div class="social-log">
      <a href=""> <font-awesome-icon :icon="['fab', 'google']" class="social"/> Continue With Google</a>
      <a href=""><font-awesome-icon :icon="['fab', 'github']" class="social"/> Continue With Github</a>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '../Widget/Navbar.vue';
import Footer from '../Widget/Footer.vue';
import axios from 'axios'
import router from '../../router'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
  async submitForm() {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      });
      console.log(response)
      await router.push({path: '/create'})
    } catch (error) {
      console.log(error.response.data);
      // Afficher un message d'erreur
    }
  }
}
}
</script>
