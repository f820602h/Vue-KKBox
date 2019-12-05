<template>
  <div class="chart">
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
import CardGroup from '@/components/CardGroup'
import { mapState } from 'vuex'
export default {
  name: 'Chart',
  components: {
    CardGroup
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
    })
  }
}
</script>

<style lang="scss" scoped>
hr{
  border-top: 1px solid white
}
</style>
