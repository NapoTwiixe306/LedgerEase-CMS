import axios from 'axios';
import Sidebar from '../Widget/Sidebar.vue';

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            isLoggedIn: localStorage.getItem('token') != null,
            name: null,
            showSearchBar: false,
            selectedDevice: 'Device',
            darkMode: false,
        };
    },
    methods: {
        toggleDarkMode() {
            if (this.darkMode) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        },
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
