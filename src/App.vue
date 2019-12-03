<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  mounted () {
    this.GET_TOKEN()
  },
  methods: {
    ...mapActions(['GET_TOKEN'])
  }
}
</script>
