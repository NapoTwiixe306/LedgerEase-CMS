import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { Navbar, Footer } from "@/components/Widget";

createApp(App)
  .use(router)
  .component('Navbar', Navbar)
  .component('Footer', Footer)
  .mount('#app');
