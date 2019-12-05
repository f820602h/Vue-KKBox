<template>
  <div class="player">
    <object class="kkbox" type="text/html" v-show="setMusicPlayer" :data="setMusicPlayer">
      <param name="autoplay" value="true">
    </object>
    <!-- <object class="youtube" id="player" type="text/html" width="640" height="390" :data="setVideoPlayer" frameborder="0"></object> -->
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
          return `https://widget.kkbox.com/v1/?id=${state.musicId}&type=song&terr=SG&lang=tc&autoplay=1`
        } else {
          return ''
        }
      },
      setVideoPlayer (state) {
        if (state.videoId) {
          return `http://www.youtube.com/embed/${state.videoId}?autoplay=1&theme=light`
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
  z-index: 10;
  bottom: 20px;
  right: 50px;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  opacity: 0.8;
}
.kkbox{
  display: block;
  width: 100%;
  height: 98px;
  transform: scale(1.02)
}
.youtube{
  display: block;
  width: 100%;
  height: 250px;
}
</style>
