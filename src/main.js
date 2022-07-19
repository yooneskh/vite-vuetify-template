import { createApp } from 'vue';


import App from './app.vue';
const app = createApp(App);


import { vuetify } from './plugins/vuetify';
app.use(vuetify);

import { unifiedApp } from './plugins/unified/unified-app';
app.use(unifiedApp);

import { router } from './router';
app.use(router);


app.mount('#app');
