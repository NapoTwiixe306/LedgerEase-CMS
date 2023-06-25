<template>
  <Navbar />
  <section class="section">
    <div class="create">
      <h1>
        Remplissez le formulaire, puis <span>Customiser votre site</span>, de A à Z
      </h1>
      <p>
        Le formulaire sert uniquement à vous fournir un site, une fois votre Adresse Mail et le nom de votre site fournis, nous mettons votre adresse mail dans notre Base de Données, et le site sera associé à celle-ci. Une fois fait, vous serez redirigé sur une autre page vous permettant de créer et personnaliser votre site.
      </p>
    </div>
    <div class="container">
      <!-- code here -->
      <div class="card">
        <form class="card-form" @submit.prevent="submitForm">
          <div class="input">
            <input type="text" class="input-field" name="websiteName" v-model="websiteName" required/>
            <label class="input-label">WebSite Name</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" name="emailAddress" v-model="emailAddress" required/>
            <label class="input-label">Email Address</label>
          </div>
          <div class="action">
            <button class="action-button">Get started</button>
          </div>
        </form>
        <div class="card-info">
          <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>

import Navbar from './Widget/Navbar.vue';
import Footer from './Widget/Footer.vue';
import router from '../router/index.js';
import { ref } from 'vue';

const websiteName = ref('');
const emailAddress = ref('');

const submitForm = () => {
  const formData = {
    websiteName: websiteName.value,
    emailAddress: emailAddress.value
  };

  fetch('http://localhost:3000/api/formData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        console.log('Data saved successfully.');
        alert('ok')
        router.push({path: '/yoursite'})
      } else {
        console.error('Failed to save data.');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
};

</script>
