<template>
  <div>
    <h1 class="mt-5 text-light font-weight-bold">{{ title }}</h1>
    <hr>
    <ListTable :listData="listData"/>
  </div>
</template>

<script>
import ListTable from '@/components/ListTable'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      listData: [],
      title: ''
    }
  },
  components: {
    ListTable
  },
  computed: {
    ...mapGetters(['getApiConfig'])
  },
  methods: {
    getSongLsit (listId) {
      let config = this.getApiConfig
      this.$http.get(`https://api.kkbox.com/v1.1/charts/${listId}/tracks?territory=TW&limit=25`, config)
        .then(res => {
          this.listData = res.data.data
        })
    }
  },
  mounted () {
    this.getSongLsit(this.$route.query.id)
    this.title = this.$route.query.title
  }
}
</script>

<style lang="scss" scoped>
hr{
  border-top: 1px solid white
}
</style>
