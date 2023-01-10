import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index';
import store from './store/index';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
