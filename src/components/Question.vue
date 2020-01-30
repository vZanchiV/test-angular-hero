<template>
  <div>
    <p class="ask">
      {{ ask }}
    </p>
    <div v-if="img !== 'img'">
      <img :src="myImg">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      ask: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: false,
        default: 'img'
      }
    },
    computed: {
      myImg () {
        const images = require.context('../assets/', false, /\.png$/)
        return images(`./${this.img}.png`)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
