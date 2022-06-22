import { createApp } from 'vue';
import App from './App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import PrimeVue from 'primevue/config';
import Image from 'primevue/image';

import 'primevue/resources/primevue.min.css';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(PrimeVue);

app.provide('axios', app.config.globalProperties.axios);

app.component('Image', Image);

app.mount('#app');
