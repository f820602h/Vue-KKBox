<template>
  <div class="home">
    123
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['token'])
  },
  methods: {
    getCharts () {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      this.$http.get('https://api.kkbox.com/v1.1/charts/_YtW5jxRZocp_U_1Rk?territory=TW', config)
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getCharts()
  }
}
</script>
