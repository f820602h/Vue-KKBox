<template>
  <div>
    <div class="d-flex align-items-center justify-content-between mt-5">
      <h1 class="text-light font-weight-bold">{{ title }}</h1>
      <!-- <button class="btn btn-outline-light" @click="login">全部播放</button> -->
      <button class="btn btn-outline-light" @click="playKKlist">試聽此歌單</button>
    </div>
    <hr>
    <TopThreeCard :listData="topThree"/>
    <ListTable :listData="other" :start="4"/>
  </div>
</template>

<script>
import ListTable from '@/components/ListTable'
import TopThreeCard from '@/components/TopThreeCard'
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      listData: [],
      videoIdList: [],
      title: '',
      access_token: ''
    }
  },
  components: {
    ListTable,
    TopThreeCard
  },
  computed: {
    ...mapGetters(['getApiConfig']),
    ...mapState(['key']),
    topThree () {
      return this.listData.slice(0, 3)
    },
    other () {
      return this.listData.slice(4)
    }
  },
  methods: {
    // 用KKBOX API取得榜單歌曲
    getSongLsit (listId) {
      let config = this.getApiConfig
      this.$http.get(`https://api.kkbox.com/v1.1/charts/${listId}/tracks?territory=TW&limit=25`, config)
        .then(res => {
          this.listData = res.data.data
        })
    },
    // 用榜單歌曲的名字搜尋YouTube影片，取得VideoId
    getAllVideoId () {
      this.listData.forEach(song => {
        this.$http.get(`https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&type=video&q=${song.name}`)
          .then(res => {
            this.videoIdList.push(res.data.items[0].id.videoId)
          })
      })
    },
    // 登入取得授權
    login () {
      if (this.$isAuthenticated() !== true) {
        this.$login()
      } else {
        this.$getGapiClient().then(gapi => {
          this.access_token = gapi.client.getToken().access_token
          this.createPlayList()
        })
      }
    },
    // 創建播放清單
    createPlayList () {
      let data = {
        snippet: {
          title: this.title,
          description: this.title,
          tags: [ this.title ],
          defaultLanguage: 'tc'
        },
        status: { 'privacyStatus': 'private' }
      }
      let config = { headers: { Authorization: `Bearer ${this.access_token}` } }
      this.$http.post(`https://www.googleapis.com/youtube/v3/playlists?part=snippet%2Cstatus&key=${this.key}`, data, config)
        .then(res => {
          this.addSong(res.data.id)
        })
    },
    // 把排行榜的所有歌曲加進播放清單
    addSong (playListID) {
      this.videoIdList.forEach(video => {
        let data = {
          snippet: {
            playlistId: playListID,
            position: 0,
            resourceId: { kind: 'youtube#video', videoId: 'playListID' }
          }
        }
        let config = { headers: { Authorization: `Bearer ${this.access_token}` } }
        this.$http.post(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${this.key}`, data, config)
          .then(() => {
            this.playListSong(playListID)
          })
      })
    },
    // 用YouTube播放器播放清單
    playListSong (playListID) {
      this.$store.commit('SET_VIDEO_ID', playListID)
    },
    playKKlist () {
      this.$store.commit('SET_LIST_ID', this.$route.query.id)
      this.$store.commit('SET_PLAYER_TYPE', 'kkbox')
    }
  },
  mounted () {
    this.getSongLsit(this.$route.query.id)
    this.title = this.$route.query.title
  }
}
</script>

<style lang="scss" >
hr{
  border-top: 1px solid white
}
</style>
