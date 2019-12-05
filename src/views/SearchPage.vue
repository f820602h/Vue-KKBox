<template>
  <div>
    <!-- <h1 class="my-5 text-light font-weight-bold">搜尋結果</h1> -->
    <h2 class="mt-5 text-light font-weight-bold">歌手</h2>
    <hr>
    <Artists :artists="artists"/>
    <h2 class="mt-5 text-light font-weight-bold">歌曲</h2>
    <hr>
    <h2 class="mt-5 text-light font-weight-bold">專輯</h2>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Artists from '@/components/Artists'

export default {
  name: 'SearchPage',
  components: {
    Artists
  },
  data () {
    return {
      albums: [],
      artists: [],
      tracks: []
    }
  },
  mounted () {
    this.getResult(this.$route.query.find)
  },
  beforeRouteUpdate (to, from, next) {
    this.getResult(this.$route.query.find)
    next()
  },
  computed: {
    ...mapGetters(['getApiConfig'])
  },
  methods: {
    getResult (text) {
      let config = this.getApiConfig
      this.$http.get(`https://api.kkbox.com/v1.1/search?q=${text}&territory=TW`, config)
        .then(res => {
          console.log(res.data)
          this.albums = res.data.albums.data
          this.artists = res.data.artists.data
          this.tracks = res.data.tracks.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
hr{
  border-top: 1px solid white
}
</style>
