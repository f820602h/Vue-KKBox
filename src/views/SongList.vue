<template>
  <div>
    <h2>{{  }}</h2>
    <ListTable :listData="listData"/>
  </div>
</template>

<script>
import ListTable from '@/components/ListTable'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      listData: []
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
  }
}
</script>

<style lang="scss" scoped>

</style>
