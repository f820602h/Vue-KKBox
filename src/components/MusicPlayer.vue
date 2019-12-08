<template>
  <div class="player">
    <object class="kkbox" type="text/html" :data="setPlayListPlayer" v-if="playerType == 'kkbox'">
      <param name="autoplay" value="true">
    </object>
    <object class="youtube" id="player" type="text/html" width="640" height="390" :data="setVideoPlayer" frameborder="0" v-if="playerType == 'youtube'"></object>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Player',
  computed: {
    ...mapState({
      playerType: 'playerType',
      setMusicPlayer (state) {
        return `https://widget.kkbox.com/v1/?id=${state.musicId}&type=song&terr=TW&lang=TC&autoplay=1`
      },
      setPlayListPlayer (state) {
        return `https://widget.kkbox.com/v1/?id=${state.listId}&type=playlist&terr=TW&lang=TC&autoplay=1`
      },
      setVideoPlayer (state) {
        return `http://www.youtube.com/embed/${state.videoId}?autoplay=1&theme=light`
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
  opacity: 0.85;
}
.kkbox{
  display: block;
  width: 100%;
  height: 500px;
  transform: scale(1.02)
}
.youtube{
  display: block;
  width: 100%;
  height: 250px;
}
</style>
