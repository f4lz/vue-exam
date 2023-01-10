<template>
<div>
    <v-card>
      <v-toolbar dense color="grey darken-4" dark class="header" height="80px">
          <a class="header__logo" @click="$router.push({name:'home'}).catch(()=>{})">AFISHA</a>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-3" @click="$router.push({name:'login'}).catch(()=>{})">
          Login
        </v-btn>
        <v-btn icon @click="searchChanger">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <input type="text" class="header__search" v-if="search === true">
      </v-toolbar>
    </v-card>
</div>
</template>

<script>

export default {

  data: () => ({
    search: false
  }),

  methods: {
    searchChanger() {
      if (this.search) {
        this.search = false
      } else {
        this.search = true
      }
    },
  }

}

</script>

<style scoped>
  .header__logo {
    font-size: 49px;
    color: #69DA69;
  }

  .header__search {
    outline: transparent;
    padding: 0 5px;
    background-color: rgb(255, 255, 255);
  }

</style>