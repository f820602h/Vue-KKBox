<template>
  <div>
    <div class="topThree my-5 row justify-content-center">
      <div class="col-4" v-for="(item, index) in listData" :key="item.id" @click="playSong(item.id, item.name)">
        <div class="card h-100" >
          <img class="card-img-top" :src="item.album.images[1].url" alt="">
          <div class="d-flex">
            <h4 class="topRank d-flex justify-content-center align-items-center mb-0">{{ index+1 }}</h4>
            <div class="card-body pl-0">
              <h5>{{ item.name }}</h5>
              <p class="card-text">{{ item.album.artist.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopThree',
  props: {
    listData: {
      type: Array,
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
.card{
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}
.topRank{
  width: 25%;
  height: 100%;
  border-radius: 50%;
  color: white;
  font-family: 'Press Start 2P', cursive;
}
.topThree{
  .card-body{
    max-width: 75%;
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
