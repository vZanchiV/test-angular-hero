<template>
  <div>
    <p>Ton score total est de <span class="hightLight">{{ totalScore }}  / 40</span></p>
    <p>Tu as eu <span class="hightLight">{{ badResponse }} </span>mauvaise réponses</p>
    <p>Tu n'as pas répondu à<span class="hightLight"> {{ noResponse }}</span> questions </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters  ({
                totalScore: 'scoreTotal',
                badResponse:'badResponse',
                noResponse:'noResponse'
            }),
        },
    }
</script>

<style lang="scss" scoped>

</style>