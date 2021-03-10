import { createApp } from 'vue';
import store from '@/store';
import router from '@/router';
import App from '@/App.vue';

import 'normalize.css';

// TODO: fix createApp(App) type error
createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
