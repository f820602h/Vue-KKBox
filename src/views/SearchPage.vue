<template>
  <div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchPage',
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
          this.albums = res.data.albums
          this.albums = res.data.artists
          this.albums = res.data.tracks
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
