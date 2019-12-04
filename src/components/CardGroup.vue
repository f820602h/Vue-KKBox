<template>
<div>
  <div class="d-flex flex-wrap">
    <div class="card mb-2" style="width: 18rem;" v-for="item in listData" :key="item.description">
      <router-link class="link" :to="`/SongList?id=${item.id}`">
        <img :src="item.images[2].url" class="card-img-top">
        <div class="card-body p-2">
          <p class="card-text text-center">{{ item.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardGroup',
  props: {
    listData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.link{
  text-decoration: none;
}
.card{
  max-width: 20%;
  background: none;
  border: 2px solid transparent;
  border-radius: 10px;
  overflow: hidden;
}
.card-body{
  background: rgba(0,0,0,0.5);
}
.card-text{
  font-weight: 500;
  color: white;
}
</style>
