import { createApp } from 'vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import 'in-less';
import '@/assets/style/global.less';
import '@/api/interceptor';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.mount('#app');
