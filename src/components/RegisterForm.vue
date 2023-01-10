<template>
  <div>
    <v-container fluid fill-height>
      <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="grey darken-4">
                  <v-toolbar-title>Регистрация</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <p v-if="$v.login.minLength === false" class="red--text">
                      Минимум 4 символа
                    </p>
                      <v-text-field
                        prepend-icon="person"
                        name="login"
                        label="Login"
                        type="text"
                        v-model.trim="login"
                        @blur="$v.login.$touch()"
                        :class="{'is-invalid': $v.login.$error}" 
                      ></v-text-field>
                      <p v-if="$v.email.email === false" class="red--text">
                      Проверьте правильность почты
                      </p>
                      <v-text-field
                        id="email"
                        prepend-icon="email"
                        name="email"
                        label="Email"
                        type="email"
                        v-model.trim="email"
                        @blur="$v.email.$touch()"
                        :class="{'is-invalid': $v.email.$error}" 
                      ></v-text-field>
                      <p v-if="$v.password.minLength === false" class="red--text">
                      Минимум 8 символов
                      </p>
                      <v-text-field
                        id="password"
                        prepend-icon="lock"
                        name="password"
                        label="Password"
                        type="password"
                        v-model.trim="password"
                        @blur="$v.password.$touch()"
                        :class="{'is-invalid': $v.password.$error}" 
                      ></v-text-field>
                      <p v-if="error" class="red--text">
                        Введите данные правильно
                      </p>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey darken-4" dark  @click="regForm()">Зарегистрироваться</v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
  </template>
    
  
<script>

import { required, minLength, email} from 'vuelidate/lib/validators'

  export default {
    props: {
      isAuth: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      login: '',
      email: '',
      password: '',
      error: false
    }),
    validations: {
      login: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    },
    methods: {
      regForm() {
        const person = {
          login: this.login,
          email: this.email,
          password: this.password
        }
        const personFormated = JSON.stringify(person)
        if (this.login.length < 4 || this.password.length < 8 || this.$v.email.email === false) {
          this.error = true
        } else {
          localStorage.setItem(`${this.login}`, personFormated)
          this.$router.push({name: 'login'})
          
        }
        
      },
     
    }
  }
</script>
  
<style scoped>

.is-invalid {
  -webkit-box-shadow: 0px 1px 5px rgba(255, 0, 0, 0.21);
  -moz-box-shadow: 0px 1px 5px rgba(255, 0, 0, 0.21);
  box-shadow: 0px 1px 5px rgba(255, 0, 0, 0.21);
  border-radius: 2%;
}

</style>