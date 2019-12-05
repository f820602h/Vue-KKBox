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
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
