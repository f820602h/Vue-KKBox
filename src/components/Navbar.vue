<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg w-100 navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">KK聽歌榜</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"></li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="輸入關鍵字搜尋歌曲" v-model.trim="searchText" @keydown.enter="search">
            <button class="btn btn-outline-info my-2 my-sm-0" @click="search">搜尋</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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
.nav{
  position: sticky;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
}
button{
  padding: 0.25rem 0.75rem;
}
.form-control:focus{
  outline: none;
}
button:focus{
  outline: none;
}
</style>
