import Vue from 'vue'
import VueRouter from 'vue-router'
import Chart from '../views/Chart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chart',
    component: Chart
  },
  {
    path: '/SongList',
    name: 'SongList',
    component: () => import(/* webpackChunkName: "SongList" */ '../views/SongList.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/SearchPage.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
