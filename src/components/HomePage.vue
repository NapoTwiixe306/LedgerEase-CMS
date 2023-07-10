<template>
  <Navbar/>
    <section class="section">
        <div class="home">
            <h1 v-html="translations.home_first_section.title"></h1>
            <p>{{translations.home_first_section.description}}</p>
            <router-link to="/create" class="home-btn">Commencer</router-link>
        </div>
      <img src="./img/synthese.jpg" alt="">
    </section>
    <section class="section2">
        <div class="home">
            <h1>{{translations.home_second_section.title}}</h1>
            <p>{{translations.home_second_section.description}}</p>
            <router-link to="/create" class="home-btn">Commencer</router-link>
            <div class="cardSkill">
                <div class="cardSkillDesign">
                    <font-awesome-icon :icon="['fas', 'sticky-note']" class="social"/>
                    <div class="text">
                        <h2>{{translations.home_second_section.first_card.title}}</h2>
                        <ul>
                            <li>{{translations.home_second_section.first_card.first_choice}}</li>
                            <li>{{translations.home_second_section.first_card.second_choice}}</li>
                            <li>{{translations.home_second_section.first_card.tird_choice}}</li>
                        </ul>
                    </div>
                </div>
                <div class="cardSkillDesign">
                    <div class="text">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="social"/>
                        <h2>{{translations.home_second_section.second_card.title}}</h2>
                        <ul>
                            <li>{{translations.home_second_section.second_card.first_choice}}</li>
                            <li>{{translations.home_second_section.second_card.second_choice}}</li>
                            <li>{{translations.home_second_section.second_card.tird}}</li>
                        </ul>
                    </div>
                </div>
                <div class="cardSkillDesign">
                    <font-awesome-icon :icon="['fab', 'gitlab']" class="social"/>
                    <div class="text">
                        <h2>{{translations.home_second_section.tird_card.title}}</h2>
                        <ul>
                            <li>{{translations.home_second_section.tird_card.first_choice}}</li>
                            <li>{{translations.home_second_section.tird_card.second_choice}}</li>
                            <li>{{translations.home_second_section.tird_card.tird_choice}}</li>
                        </ul>
                    </div>
                </div>
                <div class="cardSkillDesign">
                    <font-awesome-icon :icon="['fab', 'github']" class="social"/>
                    <div class="text">
                        <h2>{{ translations.home_second_section.four_card.title }}</h2>
                        <ul>
                            <li>{{translations.home_second_section.four_card.first_choice}}</li>
                            <li>{{translations.home_second_section.four_card.second_choice}}</li>
                            <li>{{translations.home_second_section.four_card.tird_choice}}</li>
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
           <h1>{{translations.home_tird_section.title}}</h1>
           <p v-html="translations.home_tird_section.description"></p>
        </div>
        <!-- <img src="./img/synthese.jpg" alt=""> -->
    </section>
    <section class="section4">
        <div class="card-container">
            <div class="card">
                <img src="" alt="">
                <h3>{{translations.home_four_section.price_card.first_title}}</h3>
                <p>{{translations.description }}</p>
                <h3 class="price">{{translations.home_four_section.real_price.firstPrice}}</h3>
                <a href="" class="btn">Link</a>
            </div>
            <div class="card">
                <img src="" alt="">
                <h3>{{translations.home_four_section.price_card.secnd_title}}</h3>
                <p>{{translations.description }}</p>
                <h3 class="price">{{translations.home_four_section.real_price.secondPrice}}</h3>
                <a href="" class="btn">Link</a>
            </div>
            <div class="card">
                <img src="" alt="">
                <h3>{{translations.home_four_section.price_card.tird_title}}</h3>
                <p>{{translations.description }}</p>
                <h3 class="price">{{translations.home_four_section.real_price.tirdPrice}}</h3>
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
