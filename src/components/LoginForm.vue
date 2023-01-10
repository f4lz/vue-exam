<template>
  <div>
    <v-container fluid fill-height>
      <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="grey darken-4">
                  <v-toolbar-title>Логин</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                      <v-text-field
                        prepend-icon="person"
                        name="login"
                        label="Login"
                        type="text"
                        v-model="login"
                      ></v-text-field>
                      <v-text-field
                        id="password"
                        prepend-icon="lock"
                        name="password"
                        label="Password"
                        type="password"
                        v-model="password"
                      ></v-text-field>
                      <div v-if="error" class="mt-4 red--text">
                        Проверьте пожалуйста данные и повторите ввод
                      </div>
                      <div class="reg__link mt-4">
                      <a id="link" @click="$router.push({name:'register'})" class="black--text">Регистрация</a> 
                      </div>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey darken-4" dark @click="loginForm()">Войти</v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      error: false,
      login: '',
      password: '',
      isAuth: false
    }),
    methods: {
      loginForm() {
        try {
          const personFormated = localStorage.getItem(`${this.login}`);
          const person = JSON.parse(personFormated);
          if (this.login == person.login && this.password == person.password) {
            localStorage.setItem('auth', true);
            this.$root.login = person.login;
            this.$root.email = person.email;
            this.$root.password = person.password
            this.isAuth = true;
            this.error = false;
            this.$root.authentificator = this.isAuth
            this.$router.push({name: 'home'})
          } else {
            this.error = true;
          }
        }
        catch (e) {
          console.log(e);
          this.error = true;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .reg__link{
    font: 2em sans-serif;
    margin: 0 auto;
    max-width: 170px;
  }
  #link {
    color: rgb(59, 59, 59);
  }
  </style>