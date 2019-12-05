<template>
  <div class="row">
    <div class="artists d-flex flex-column align-items-center col-2" v-for="item in artists" :key="item.id">
      <div class="avatar"><img :src="item.images[0].url"></div>
      <p class="text-center text-light font-weight-bold mt-2">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actists',
  props: {
    artists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
