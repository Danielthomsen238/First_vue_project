import './assets/styles/main.css'
import { createApp } from 'vue'
import { store }from './assets/js/store.js'
import App from './App.vue'
import router from './assets/js/routes'
import { createAuth0 } from '@auth0/auth0-vue';
import authConfig from '../auth_config.json'

const app = createApp(App);


// Use the router in the Vue app
app.use(router);
app.use(store)
app.use(
    createAuth0({
      domain: authConfig.domain,
      clientId: authConfig.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      },
    })
  );

app.mount('#app');