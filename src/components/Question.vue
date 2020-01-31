<template>
  <div>
    <p class="ask">
      {{ question.libelle }}
    </p>
    <div v-if="question.img">
      <img :src="myImg">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      question: {
        type: Object,
        required: true,
      }
    },
    computed: {
      myImg () {
        const images = require.context('../assets/', false, /\.png$/)
        return images(`./${this.question.img}.png`)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
