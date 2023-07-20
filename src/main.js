import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router/router'

const app = createApp(App);

app.use(router);

// Use the i18n plugin
app.use(i18n);

app.mount('#app');