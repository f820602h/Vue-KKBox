<template>
  <div class="chart">
    <div class="d-flex align-items-center justify-content-between mt-5">
      <h2 class="text-light font-weight-bold">綜合新歌 TOP 5</h2>
      <router-link class="btn btn-outline-light" :to="`/SongList?id=LZPhK2EyYzN15dU-PT&title=綜合新歌即時榜`">完整榜單</router-link>
    </div>
    <hr>
    <ListTable :listData="NewSongList" :start="1"/>
    <h2 class="mt-5 text-light font-weight-bold">新歌日榜</h2>
    <hr>
    <CardGroup :listData="newCharts" />
    <h2 class="mt-5 text-light font-weight-bold">單曲日榜</h2>
    <hr>
    <CardGroup :listData="dailyCharts" />
    <h2 class="mt-5 text-light font-weight-bold">曲風週榜</h2>
    <hr>
    <CardGroup :listData="weeklyCharts" />
  </div>
</template>

<script>
import ListTable from '@/components/ListTable'
import CardGroup from '@/components/CardGroup'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Chart',
  data () {
    return {
      NewSongList: []
    }
  },
  components: {
    CardGroup,
    ListTable
  },
  computed: {
    ...mapState({
      dailyCharts (state) {
        return state.charts.slice(1, 6)
      },
      newCharts (state) {
        return state.charts.slice(7, 12)
      },
      weeklyCharts (state) {
        return state.charts.slice(13, 23)
      }
    }),
    ...mapGetters(['getApiConfig'])
  },
  methods: {
    getNewSongChart () {
      let config = this.getApiConfig
      this.$http.get('https://api.kkbox.com/v1.1/charts/LZPhK2EyYzN15dU-PT/tracks?territory=TW&limit=5', config)
        .then(res => {
          this.NewSongList = res.data.data
        })
    }
  },
  mounted () {
    this.getNewSongChart()
  }
}
</script>

<style lang="scss" scoped>
hr{
  border-top: 1px solid white
}
</style>
