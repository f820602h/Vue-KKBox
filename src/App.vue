<template>
  <div id="app">
    <div class="bgAnimat"></div>
    <Navbar />
    <div class="container padding">
      <router-view v-if="ready"/>
      <div v-else class="loading d-flex justify-content-center align-items-center text-white h3">
        載入中...
      </div>
    </div>
    <MusicPlayer />
    <Footer v-if="ready"/>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Navbar from '@/components/Navbar'
import MusicPlayer from '@/components/MusicPlayer'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    MusicPlayer,
    Footer
  },
  computed: {
    ...mapState(['ready'])
  },
  async mounted () {
    await this.GET_TOKEN()
    await this.GET_CHARTS()
    this.SET_READY()
  },
  methods: {
    ...mapActions(['GET_TOKEN', 'GET_CHARTS']),
    ...mapMutations(['SET_READY'])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Press+Start+2P&display=swap');
html{
  overflow-x: hidden;
}
body{
  position: relative;
  font-family: 'Noto Sans TC', sans-serif !important;
  min-height: 100vh;
  overflow-x: hidden;
}
.loading {
  height: calc(100vh - 50px);
}
.padding{
  padding-top: 56px;
  padding-bottom: 200px;
}
.bgAnimat{
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%;
  background: linear-gradient(-75deg ,#5f2c82, #49a09d) no-repeat;
  animation: bgMove infinite 10s;
}
@keyframes bgMove {
  50%{
    transform: translate(-50%,0);
  }100%{
    transform: translate(0,0);
  }
}
</style>
