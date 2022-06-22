import { createApp } from 'vue';
import App from './App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

// I think I picked the worst possible framework. In the end didn't even use it, only the icons which was very limited..
import PrimeVue from 'primevue/config';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(PrimeVue);

app.provide('axios', app.config.globalProperties.axios);

app.mount('#app');
