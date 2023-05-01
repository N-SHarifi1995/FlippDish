import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomePage'
import AdminPanel from '../components/admin/adminpanel'
import FoodList from '../components/material/FoodList'
import SignUp from '../components/userform/SignUp'
import SignIn from '../components/userform/SignIn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'adminPanel',
    component: AdminPanel
  }, 
  {
    path: '/foodlist/:menu',
    name: 'foodlist',
    params:true,
    component: FoodList
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
 
]

const router = new VueRouter({
  routes
})

export default router
