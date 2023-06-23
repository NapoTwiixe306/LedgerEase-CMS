<template>
  <Navbar/>
  <body>
    <section class="section">
        <h1>Section 1</h1>
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
</body>
  <Footer/>
</template>

<script setup>
  import Navbar from "@/components/Widget/Navbar.vue";
  import Footer from "@/components/Widget/Footer.vue";
</script>
