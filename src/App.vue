<template>
  <div id="app">
    <Navbar />
    <div class="container">
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
body{
  min-height: 100vh;
  background: linear-gradient(bottom,#5f2c82, #49a09d) no-repeat;
}
</style>
