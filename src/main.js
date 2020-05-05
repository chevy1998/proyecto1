import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

/*import VueFire from 'vuefire';
Vue.use(VueFire);*/

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
