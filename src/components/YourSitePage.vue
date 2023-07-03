<template>
  <div class="container">
    <div class="content">
      <select v-model="selectedDevice" @change="changeDevice" class="select">
        <option value="Desktop">Desktop</option>
        <option value="Tablet">Tablet</option>
        <option value="Mobile">Mobile</option>
      </select>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
      <AppCopylink/>
      <div class="Modified">
        <button class="Modifier-Button">Modifier</button>
      </div>
      <div class="viewSite">
        <button class="viewSite-Button">View Web Site</button>
      </div>
      <div class="dark-mode-toggle">
        <input type="checkbox" id="darkModeToggle" v-model="darkMode" @change="toggleDarkMode()">
        <label for="darkModeToggle" id="Test">Mode sombre</label>
      </div>
    </div>
    <Sidebar/>
  </div>
</template>

<script>
import axios from 'axios';
import Sidebar from "@/components/Widget/Sidebar.vue";
import AppCopylink from "@/components/Widget/CopyLink.vue";

export default {
  components: {
    AppCopylink,
    Sidebar,
  },
  data() {
    return {
      isLoggedIn: localStorage.getItem('token') != null,
      name: null,
      showSearchBar: false,
      showLogo: false,
      selectedDevice: 'Device',
      darkMode: false,
    };
  },
  mounted() {
    const storedDevice = localStorage.getItem('selectedDevice');
    if (storedDevice) {this.selectedDevice = storedDevice;}
  },
  methods: {
    toggleDarkMode() {
      if (this.darkMode)
        document.body.classList.add('dark-mode');
       else
        document.body.classList.remove('dark-mode');
    },
    hideSearchBar() {this.showSearchBar = false;},
    hideLogo(){this.showLogo = false;},
    changeDevice() {localStorage.setItem('selectedDevice', this.selectedDevice);},
    async logout() {
      try {
        await axios.post('http://localhost:3000/auth/logout');
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
