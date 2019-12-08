<template>
  <div>
    <h1 class="mt-5 text-light font-weight-bold">搜尋結果</h1>
    <hr class="mb-5">
    <ListTable :listData="tracks" :start="1"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListTable from '@/components/ListTable'

export default {
  name: 'SearchPage',
  components: {
    ListTable
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
    next()
    this.getResult(this.$route.query.find)
  },
  computed: {
    ...mapGetters(['getApiConfig'])
  },
  methods: {
    getResult (text) {
      let config = this.getApiConfig
      this.$http.get(`https://api.kkbox.com/v1.1/search?q=${text}&territory=TW`, config)
        .then(res => {
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
