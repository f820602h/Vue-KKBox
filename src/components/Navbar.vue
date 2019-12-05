<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg w-100 navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">MYBOX</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- <router-link class="nav-link" to="/Chart">排行榜</router-link> -->
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="找歌曲、歌手、專輯">
            <button class="btn btn-outline-info my-2 my-sm-0" type="button">搜尋</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
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
button, input{
  outline: unset;
}
</style>
