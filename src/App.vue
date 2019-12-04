<template>
  <div id="app">
    <div class="bgAnimat"></div>
    <Navbar />
    <div class="container padding">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  async mounted () {
    await this.GET_TOKEN()
    await this.GET_CHARTS()
  },
  methods: {
    ...mapActions(['GET_TOKEN', 'GET_CHARTS'])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Press+Start+2P&display=swap');
body{
  position: relative;
  font-family: 'Noto Sans TC', sans-serif !important;
  min-height: 100vh;
  overflow-x: hidden;
}
.padding{
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
