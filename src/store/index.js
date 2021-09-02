import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'query-string'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ready: false,
    token: '',
    key: 'AIzaSyCW_sKFqpwDdBimQCRRwxGMhBU-L1Kcwjc',
    musicId: '',
    listId: '',
    videoId: '',
    playerType: '',
    charts: []
  },
  getters: {
    getApiConfig (state) {
      return { headers: { Authorization: `Bearer ${state.token}` } }
    }
  },
  mutations: {
    SET_READY (state) {
      state.ready = true
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_CHARTS (state, charts) {
      state.charts = charts
    },
    SET_MUSIC_ID (state, id) {
      state.musicId = id
    },
    SET_LIST_ID (state, id) {
      state.listId = id
    },
    SET_VIDEO_ID (state, id) {
      state.videoId = id
    },
    SET_PLAYER_TYPE (state, type) {
      state.playerType = type
    }
  },
  actions: {
    GET_TOKEN ({ state, commit }) {
      const config = {
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        crossdomain: true
      }
      const oauth = {
        grant_type: 'client_credentials',
        client_id: 'ad8b3eaf6681e082f7f7ca1a88c31ade',
        client_secret: '33632c90f85e9c11c7938096ca9174aa'
      }
      return new Promise((resolve, reject) => {
        axios.post('https://all-the-cors.herokuapp.com/https://account.kkbox.com/oauth2/token', qs.stringify(oauth), config)
          .then((res) => {
            commit('SET_TOKEN', res.data.access_token)
            resolve(res)
          })
      })
    },
    GET_CHARTS ({ state, getters, commit }) {
      return new Promise((resolve, reject) => {
        axios.get('https://api.kkbox.com/v1.1/charts?territory=TW', getters.getApiConfig)
          .then((res) => {
            commit('SET_CHARTS', res.data.data)
            resolve(res)
          })
      })
    }
  }
})
