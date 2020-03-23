import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// noinspection ES6CheckImport
import VuePageTransition from 'vue-page-transition'


/*layouts*/
import Default from '@/layouts/default'
import Full from '@/layouts/full'
import backOnly from "@/layouts/backOnly";

Vue.config.productionTip = false

Vue.component('default-layout', Default);
Vue.component('full-layout', Full);
Vue.component('back-only-layout', backOnly);

Vue.use(VuePageTransition)

export const serverBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
