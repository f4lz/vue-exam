<template>
<v-card>
  <v-toolbar dense color="grey darken-4" dark class="header" height="80px">
      <a class="header__logo" @click="$router.push({name:'home'}).catch(()=>{})">AFISHA</a>
    <v-spacer></v-spacer>
    <v-btn v-if="isAuth === false" class="login-btn" color="#69DA69" @click="$router.push({name:'login'}).catch(()=>{})">
      Логин
    </v-btn>
    <div v-if="isAuth === true">
      <span class="user-login"> {{ this.$root.login }}</span>
      |
      <v-btn color="#69DA69" class="login-btn" @click="$emit('logout')">
        Выход
      </v-btn> |
    </div>
    <v-btn icon @click="searchChanger">
      <v-icon id="search">mdi-magnify</v-icon>
    </v-btn>
    <input type="text" class="header__search" v-if="search === true" v-model="searchInput" @input="searchFilms">
  </v-toolbar>
</v-card>
</template>

<script>


export default {

  props: {
    isAuth: {
      type: Boolean,
      default: false,
    }
  },

  data: () => ({
    search: false,
    searchInput: null
  }),

  methods: {
    searchChanger() {
      if (this.search) {
        this.search = false
      } else {
        this.search = true
      }
    },
    searchFilms() {
      this.$store.dispatch('searchFilms', this.searchInput)
    }
  }

}

</script>

<style lang="scss">

@media screen and (max-width:800px) {

  a .header .header__logo {
    font-size: 35px;
  }

}

@media print {

  #search {
    display: none;
  }

  .header__logo{
    color:black !important;
  }
  
  .login-btn {
    display: none;
  }
  
}


.user-login {
  font-size: 20px;
}
.login-btn {
  color: black;
}
 .header .header__logo  {
  font-size: 49px;
  color: #69DA69;
}
.header {
  .v-toolbar__content, .v-toolbar__extension {
    max-width: 1400px;
    margin: 0 auto;

  }
}
.header__search {
  outline: transparent;
  padding: 0 5px;
  background-color: rgb(255, 255, 255);
}


</style>