import { createApp } from 'vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import 'in-less';
import '@/assets/style/global.less';
import '@/api/interceptor';
import router from './router';
import 'bootstrap-icons/font/bootstrap-icons.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
