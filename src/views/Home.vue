<template>
  <div class="home">
    <h2 class="mt-5">新歌日榜</h2>
    <CardGroup :listData="newCharts" />
    <h2 class="mt-5">單曲日榜</h2>
    <CardGroup :listData="dailyCharts" />
  </div>
</template>

<script>
import CardGroup from '@/components/CardGroup'
import { mapState } from 'vuex'
export default {
  name: 'Home',
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
      }
    })
  }
}
</script>
