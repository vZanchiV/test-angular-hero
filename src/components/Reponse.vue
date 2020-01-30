<template>
  <div class="res">
    <button @click="toggle">
      Voir la réponse :
    </button>
    <div
      v-if="ToggleOpen"
      class="res__content"
    >
      <p v-if="!isList">
        {{ responses }}
      </p>
      <ul v-if="isList">
        <li
          v-for="(response,index) in responses"
          :key="index"
        >
          {{ response }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      responses: {
        type: [String, Array],
        required: true
      }
    },
    data () {
      return {
        ToggleOpen: false
      }
    },
    computed: {
      isList: function () {
        return typeof this.responses !== 'string'
      }
    },
    methods: {
      toggle () {
        this.ToggleOpen = !this.ToggleOpen
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
