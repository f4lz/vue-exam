import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import store from './store'

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  data: ({
    authentificator: false,
    login:'',
    password:'',
    email: '',
  }),
  render: h => h(App)
}).$mount('#app')
