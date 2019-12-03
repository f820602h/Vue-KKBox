<template>
  <div class="home">
    <!-- <Card v-for="" :key="id" :src="src" :text="text"/> -->
    <Card />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card'
export default {
  name: 'Home',
  components: {
    Card
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['token'])
  },
  mounted () {
    this.getCharts()
  },
  methods: {
    getCharts () {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      this.$http.get('https://api.kkbox.com/v1.1/charts/PYQbSKw4piAuZAS8z8?territory=TW', config)
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
