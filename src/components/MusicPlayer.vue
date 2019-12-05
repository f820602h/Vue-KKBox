<template>
  <div class="player">
    <object type="text/html" v-show="setMusicPlayer" :data="setMusicPlayer" allow="autoplay" frameborder="0"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Player',
  computed: {
    ...mapState({
      setMusicPlayer (state) {
        if (state.musicId) {
          return `https://widget.kkbox.com/v1/?id=${state.musicId}&type=song&terr=SG&lang=tc&autoplay=true`
        } else {
          return ''
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.player{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 300px;
}
object{
  display: block;
  width: 100%;
  height: 98px;
}

</style>
