<template>
  <div>
    <div class="other">
      <div v-for="(item, index) in listData" :key="item.id" @click="playSong(item.id, item.name)">
        <div class="card flex-row h-100 mt-3">
          <div class="rank">
            <h4 class="d-flex justify-content-center align-items-center">{{ index + start }}</h4>
          </div>
          <div>
            <img class="card-img-top" :src="item.album.images[0].url" alt="">
          </div>
          <div class="card-body">
            <h5>{{ item.name }}</h5>
            <p class="card-text">{{ item.album.artist.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ListTable',
  props: {
    listData: {
      type: Array,
      required: true
    },
    start: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(['key'])
  },
  methods: {
    playSong (id, name) {
      this.$store.commit('SET_MUSIC_ID', id)
      this.getAllVideoId(name)
    },
    playListSong (playListID) {
      this.$store.commit('SET_VIDEO_ID', playListID)
      this.$store.commit('SET_PLAYER_TYPE', 'youtube')
    },
    getAllVideoId (name) {
      this.$http.get(`https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&type=video&q=${name}`)
        .then(res => {
          this.playListSong(res.data.items[0].id.videoId)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
hr{
  border-top: 1px solid white
}
.card{
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}
.other{
 .card-img-top{
  width: 100px;
  border-radius: 0px;
  }
  .rank{
    h4{
      font-family: 'Press Start 2P', cursive;
      width: 85px;
      height: 100%;
      color: white;
    }
  }
  .card-body{
    width: 60%;
    color: white;
  }
}
h5{
  width: 100%;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-text{
  width: 100%;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
