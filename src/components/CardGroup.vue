<template>
<div>
  <div class="d-flex">
    <div class="card" style="width: 18rem;" v-for="item in listData" :key="item.description">
      <router-link class="link" :to="`/chart?${item.id}`">
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
  background: none;
  border: 2px solid transparent;
  border-radius: 10px;
  overflow: hidden;
}
.card-body{
  background: rgba(255,255,255,0.5);
}
.card-text{
  font-weight: 800;
  color: darkslategray
}
</style>
