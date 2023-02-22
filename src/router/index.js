import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomePage'
import AdminPanel from '../components/admin/adminpanel'

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
 
]

const router = new VueRouter({
  routes
})

export default router
