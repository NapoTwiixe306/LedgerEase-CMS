import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { Navbar, Footer } from "@/components/Widget";
/* Set up using Vue 3 */

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faArrowRight, faDesktop, faMobile, faTablet, faClone } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faGoogle, faGithub, faArrowRight, faDesktop, faMobile, faTablet, faClone)

createApp(App)
  .use(router)
  .component('Navbar', Navbar)
  .component('Footer', Footer)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
