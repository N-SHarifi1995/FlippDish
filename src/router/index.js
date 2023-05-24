import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomePage'
import AdminPanel from '../components/admin/adminpanel'
import FoodList from '../components/material/FoodList'
import userForm from '../components/userform/userForm'
import userProfile from '../components/userform/userProfile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    mata:{requireAuth:true},
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
    component: userForm
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: userForm
  },
  
  {
    path: '/userProfile',
    name: 'userProfile',
    component: userProfile
  },
 
]

const router = new VueRouter({
  routes
})

export default router
