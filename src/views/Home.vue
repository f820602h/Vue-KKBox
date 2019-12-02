<template>
  <div class="home">
    <div
      class="card"
      style="width: 18rem;"
    >
      <div class="card-body">
        <h5 class="card-title">
          Card title
        </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a
          href="#"
          class="btn btn-primary"
        >Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'query-string'

export default {
  name: 'Home',
  data () {
    return {
      token: ''
    }
  },
  methods: {
    getToken () {
      const config = {
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Coutent-Type': 'application/x-www-form-urlencoded'
        }
      }
      const oauth = {
        grant_type: 'client_credentials',
        client_id: '3ff2253ebfd6daf6ba80564803a8a673',
        client_secret: 'aae46637ec523c3e3b15b610645fe830'
      }
      this.$http.post('/token', qs.stringify(oauth), config)
        .then((res) => {
          this.token = res.data.access_token
          this.getCharts()
        })
    },
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
    this.getToken()
  }
}
</script>
