<template>
  <v-app class="wrapper">
    <header-site :isAuth="this.$root.authentificator" @logout="logoutOfProfile"/>
    <router-view class="main__wrapper"></router-view>
  </v-app>
</template>

<script>
import HeaderSite from './components/HeaderSite.vue';

export default {
  components: { HeaderSite },
  name: 'App',

  methods: {
    logoutOfProfile: function() {
      localStorage.removeItem('auth')
      this.$root.authentificator = false
      this.$root.email = null
      this.$root.login = null
      this.$root.password = null
      
    }
  }
};

</script>

<style scoped>
  .wrapper {
    background-color: #4B4949;
  }
  .main__wrapper {
    padding-top: 35px;
    color: white;
  }

/*   
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
} */
	
</style>
