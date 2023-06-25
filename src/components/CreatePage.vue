<template>
  <Navbar/>
  <section class="section">
    <div class="create">
      <h1>Remplissez le formulaire, puis <span>Customiser votre site</span>, de A à Z</h1>
      <p>Le formulaire sert uniquement à vous fournir un site, une fois votre Adresse Mail et le nom de votre site fournis, nous mettons votre adresse mail dans notre Base de Données, et le site sera associé à celle-ci. Une fois fait, vous serez redirigé sur une autre page vous permettant de créer et personnaliser votre site.</p>
    </div>
    <div class="form">
      <div class="card">
        <form class="card-form" @submit.prevent="submitForm">
        <div class="input">
          <input class="input-field" id="name" type="text" placeholder="Entrez votre nom d'utilisateur ici" v-model="name" required>
          <label class="input-label" for="name">Nom d'utilisateur :</label>
        </div>
        <div class="input">
          <input class="input-field" id="password" type="password" placeholder="Entrez votre mot de passe ici" v-model="password" required>
          <label class="input-label" for="password">Mot de passe :</label>
          
        </div>
        <div class="forgot">
          <div>
            <span>Vous n'avez pas de compte ?</span> <router-link to="/register">Créer un compte</router-link>
          </div>
          <router-link to="/register>" class="forgot_mdp">Mot de passe Oublié ?</router-link>
        </div>
        <div class="action">
          <button class="action-button" type="submit">
          Se Connecter
        </button>
        </div>
      </form>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script lang="js">
import Navbar from './Widget/Navbar.vue';
import Footer from './Widget/Footer.vue';
import axios from 'axios'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          name: this.name,
          password: this.password
        });

        localStorage.setItem('token', response.data.token); // stocker le token dans le localstorage
        console.log(response.data, "gg tu es log")
        this.$router.push('/chat');
      } catch (error) {
        console.log(error.response.data)
        alert('Nom utilisateur ou mdp incorrect')
      }
    }
  }
}

</script>