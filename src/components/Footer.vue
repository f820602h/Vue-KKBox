<template>
  <div class="footer bg-dark py-5">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h4 class="text-light font-weight-bold">技術運用</h4>
          <hr>
          <ul class="list-group list-unstyled">
            <li><p class="text-light">KKBOX Open API</p></li>
            <li><p class="text-light">YouTube Data API</p></li>
            <li><p class="text-light">Vue Cli 3</p></li>
          </ul>
        </div>
        <div class="col-3">
          <h4 class="text-light font-weight-bold">參考資源</h4>
          <hr>
          <ul class="list-group list-unstyled">
            <li><p class="text-light">六角學院</p></li>
            <li><p class="text-light">KKBOX API Reference</p></li>
            <li><p class="text-light">Google API Reference</p></li>
          </ul>
        </div>
        <div class="form-inline justify-content-end align-items-end col-6">
          <input class="form-control mr-sm-2" type="text" placeholder="輸入關鍵字搜尋歌曲" v-model.trim="searchText" @keydown.enter="search">
          <button class="btn btn-outline-info my-2 my-sm-0" @click="search">搜尋</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search () {
      if (this.searchText) {
        this.$router.push(`/Search?find=${this.searchText}`).catch(() => {})
        this.searchText = ''
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
hr{
  border-top: 1px solid white
}
</style>
