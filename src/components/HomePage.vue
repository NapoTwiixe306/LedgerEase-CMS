<template>
  <Navbar/>
    <section class="section">
        <div class="home">
            <h1>Bienvenue sur <span style="color: rgb(150, 125, 16);">LedgerEase</span>, le seul <strong>CMS</strong>
              qui propose des fonctionnalités crypto/blockchain, en étant basé sur ces principes.</h1>
            <p>43 % des sites Web reposent sur WordPress. WordPress est utilisé par davantage de blogueurs, PME et sociétés du classement Fortune 500
                que toutes les autres options réunies. Rejoignez les millions de personnes qui utilisent WordPress.com
            </p>
            <router-link to="/create" class="home-btn">Commencer</router-link>
        </div>
      <img src="./img/synthese.jpg" alt="">
    </section>
    <section class="section2">
        <div class="home">
            <h1>Réaliser vos Dapp web3, et autres projet avec LedgerEase</h1>
            <p>Quel que soit le site que vous désirez développer, que ce soit du Web3 ou non, nous vous donnons l'opportunité de faire ce que vous voulez, que ce soit un site sur le Web3, un blog, une landing page, etc.</p>
            <router-link to="/create" class="home-btn">Commencer</router-link>
            <div class="cardSkill">
                <div class="cardSkillDesign">
                    <font-awesome-icon :icon="['fas', 'sticky-note']" class="social"/>
                    <div class="text">
                        <h2>Web3</h2>
                        <ul>
                            <li>Pris en charge nativement par le cms</li>
                            <li>un Simple Drag & Drop</li>
                            <li>Texte 3</li>
                        </ul>
                    </div>
                </div>
                <div class="cardSkillDesign">
                    <div class="text">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="social"/>
                        <h2>Blogs</h2>
                        <ul>
                            <li>Templates adapter</li>
                            <li>Texte 2</li>
                            <li>Texte 3</li>
                        </ul>
                    </div>
                </div>
                <div class="cardSkillDesign">
                    <font-awesome-icon :icon="['fab', 'gitlab']" class="social"/>
                    <div class="text">
                        <h2>NewsLetter</h2>
                        <ul>
                            <li>Une Base de donnée prêtes pour vous</li>
                            <li>Texte 2</li>
                            <li>Texte 3</li>
                        </ul>
                    </div>
                </div>
                <div class="cardSkillDesign">
                    <font-awesome-icon :icon="['fab', 'github']" class="social"/>
                    <div class="text">
                        <h2>Cours</h2>
                        <ul>
                            <li>Templates Dédié a la mise en page des cours</li>
                            <li>Texte 2</li>
                            <li>Texte 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section3">
         <div class="home">
           <div class="avatar">
             <img src="./img/julien.png" alt="">
           </div>
           <h1>Qui sommes-nous ? Qui est l'équipe derrière LedgerEase ?</h1>
           <p>L'équipe est très réduite, car il n'y a qu'une seule personne :
             <strong>Julien</strong>, le développeur principal.
             Il a également développé CryptoExtension, le site web et l'extension chrome,
             (ainsi que tout l'écosysteme de celui-ci.</p>
        </div>
        <!-- <img src="./img/synthese.jpg" alt=""> -->
    </section>
    <section class="section4">
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
        <!-- <img src="./img/synthese.jpg" alt=""> -->
    </section>
  <Footer/>
</template>

<script >
  import Navbar from "@/components/Widget/Navbar.vue";
  import Footer from "@/components/Widget/Footer.vue";
  import translations from '@/TextVariables.json';
  export default{
    data(){
      return {
        translations: translations
      }
    },
    components: {
      Navbar,
      Footer,
    }
  }
</script>
