<template>
  <div>
    <div class="topThree my-5 row justify-content-center">
      <div class="col-4" v-for="(item, index) in topThree" :key="item.id" @click="playSong(item.id, item.name)">
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
    <div class="other">
      <div v-for="(item, index) in other" :key="item.id" @click="playSong(item.id, item.name)">
        <div class="card flex-row h-100 mt-3">
          <div class="rank">
            <h4 class="d-flex justify-content-center align-items-center">{{ index+4 }}</h4>
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
  name: 'List',
  props: {
    listData: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['key']),
    topThree () {
      return this.listData.slice(0, 3)
    },
    other () {
      return this.listData.slice(4)
    }
  },
  methods: {
    //  用KKBOX播放器播放歌曲
    playSong (id, name) {
      this.$store.commit('SET_MUSIC_ID', id)
      // this.getYoutubeVideo(name)
    },
    // 以點擊的歌曲名稱搜尋YouTube影片，取得VideoId
    getYoutubeVideo (name) {
      this.$http.get(`https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&type=video&q=${name}`)
        .then(res => {
          this.$store.commit('SET_VIDEO_ID', res.data.items[0].id.videoId)
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
