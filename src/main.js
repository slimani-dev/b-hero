import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import Default from '@/layouts/default'
import A from '@/layouts/a'

Vue.config.productionTip = false

Vue.component('default-layout', Default);
Vue.component('a-layout', A);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
