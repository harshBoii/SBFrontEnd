import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardDetails from '../views/CardDetails.vue'
import Login from '../views/Login.vue'
import Carts from '@/components/Carts.vue'
import Account from '@/components/Account.vue'
import Orders from '@/components/Orders.vue'
import Wishlist from '@/components/Wishlist.vue'
import ContactUs from '@/components/ContactUs.vue'
import AboutUs from '@/components/AboutUs.vue'
import MyPage from '@/components/MyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {   
      path:'/login',
      name:'Login',
      component : Login
    }    
    ,
    {
      path: '/:id',
      name:'CardDetail',
      component:CardDetails
    },
    {
      path: '/Cart',
      name:'Cart',
      component:Carts
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/my-page',
      name: 'MyPage',
      component: MyPage
    }
  ],
})

export default router
