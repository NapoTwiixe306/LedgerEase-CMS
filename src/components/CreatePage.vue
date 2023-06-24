<template>
    <Navbar />
    <section class="section">
      <div class="create">
        <h1>Remplissez le formulaires, puis <span>Customiser votre site</span>, de A à Z</h1>
        <p>le formulaire sert uniquement à vous fournir un site, 
           une fois voter Adresse Mail et le nom de votre site fourni,
           nous mettons votre adresse mail dans notre Base de Donnée, et le site sera associé à celle-ci
           une fois fait, vous serez redirigé sur une autre page, vous permettant de créer votre site, le personnaliser, ...
          </p>
      </div>
      <div class="container">
        <!-- code here -->
        <div class="card">
            <form class="card-form">
                <div class="input">
                    <input type="text" class="input-field" required/>
                    <label class="input-label">WebSite Name</label>
                </div>
                            <div class="input">
                    <input type="text" class="input-field" required/>
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
    <!-- <Footer/>   -->
</template>

<script setup>
import Navbar from './Widget/Navbar.vue';
// import Footer from './Widget/Footer.vue';


</script>
