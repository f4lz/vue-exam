import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage"
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm"
import ErorHandler from "@/components/ErrorHandler"
import SelectedPage from "@/pages/SelectedPage"

export default new VueRouter({
  mode: 'history',
  routes: [
      {
          path: '/',
          name: 'home',
          component: MainPage
      },
      {
          path: '/login',
          name: 'login',
          component: LoginForm
      },
      {
          path: '/register',
          name: 'register',
          component: RegisterForm   
      },
      {
          path: '/:id',
          component: SelectedPage   
      },
      {
        path: "*",
        component: ErorHandler
      }
  ]
})