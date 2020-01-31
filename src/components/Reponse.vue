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
        {{ responses.libelle }}
      </p>
      <ul v-if="isList">
        <li
          v-for="(libelle,index) in responses.libelle"
          :key="index"
        >
          {{ libelle }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      responses: {
        type: Object,
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
        return Array.isArray(this.responses.libelle)
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
