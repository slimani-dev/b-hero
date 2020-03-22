import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuePageTransition from 'vue-page-transition'



import Default from '@/layouts/default'
import Full from '@/layouts/full'

Vue.config.productionTip = false

Vue.component('default-layout', Default);
Vue.component('full-layout', Full);

Vue.use(VuePageTransition)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
