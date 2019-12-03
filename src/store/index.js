import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'query-string'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    GET_TOKEN ({ state, commit }) {
      const config = {
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Coutent-Type': 'application/x-www-form-urlencoded'
        }
      }
      const oauth = {
        grant_type: 'client_credentials',
        client_id: '3ff2253ebfd6daf6ba80564803a8a673',
        client_secret: 'aae46637ec523c3e3b15b610645fe830'
      }
      return new Promise((resolve, reject) => {
        axios.post('/token', qs.stringify(oauth), config)
          .then((res) => {
            commit('SET_TOKEN', res.data.access_token)
            resolve(res)
          })
      })
    }
  }
})
