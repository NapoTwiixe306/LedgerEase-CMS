<template>
  <Navbar/>
    <section class="section">
        <div class="home">
            <h1>Bienvenue sur LedgerEase, le seul CMS qui propose des fonctionnalités crypto/blockchain, en étant basé sur ces principes.</h1>
            <p>43 % des sites Web reposent sur WordPress. WordPress est utilisé par davantage de blogueurs, PME et sociétés du classement Fortune 500 
                que toutes les autres options réunies. Rejoignez les millions de personnes qui utilisent WordPress.com
            </p>
            <router-link to="/create" class="home-btn">Commencer</router-link>
        </div>
        <img src="./img/synthese.jpg" alt="">
    </section>
    <section class="section2">
        <h1>Section 2</h1>
        
    </section>
    <section class="section3">
        <div class="card-container">
            <div class="card">
                <img src="" alt="">
                <h3>Basic</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus dolores cumque facilis laboriosam incidunt laborum officia reprehenderit fugit aliquam? 
                    Quaerat blanditiis recusandae veniam cum ex sequi reprehenderit esse quasi itaque.</p>
                <h3 class="price">free</h3>
                <a href="" class="btn">Link</a>
            </div>
            <div class="card">
                <img src="" alt="">
                <h3>Pro</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus dolores cumque facilis laboriosam incidunt laborum officia reprehenderit fugit aliquam? 
                    Quaerat blanditiis recusandae veniam cum ex sequi reprehenderit esse quasi itaque.</p>
                <h3 class="price">20$/Month</h3>
                <a href="" class="btn">Link</a>
            </div>
            <div class="card">
                <img src="" alt="">
                <h3>Entreprise</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus dolores cumque facilis laboriosam incidunt laborum officia reprehenderit fugit aliquam? 
                    Quaerat blanditiis recusandae veniam cum ex sequi reprehenderit esse quasi itaque.</p>
                <h3 class="price">100$/Month</h3>
                <a href="" class="btn">Link</a>
            </div>
        </div>
    </section>

  <Footer/>
</template>

<script setup>
  import Navbar from "@/components/Widget/Navbar.vue";
  import Footer from "@/components/Widget/Footer.vue";
</script>
