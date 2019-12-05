import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGAPI from 'vue-gapi'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'

const apiConfig = {
  apiKey: 'AIzaSyB1_z4DTc1TjBEkknWUpYjVqc7cN96HlnM',
  clientId: '984555341743-ai36q2808ihele8mt1f5rln93l3faedq.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
}

Vue.use(VueGAPI, apiConfig)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
