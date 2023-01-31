import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

import LegalLayout from './components/LegalLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';

const app = createApp(App);

app.component('default-layout', LegalLayout);
app.component('empty-layout', EmptyLayout);

app.use(router);
app.mount('#app');
