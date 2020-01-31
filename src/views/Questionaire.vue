<template>
  <div>
    <h2>Question {{ numero }}</h2>
    <ask
      :question="questionnaire.ask"
    />
    <res :responses="questionnaire.res" />
    <score @resultat="resultat()" />
    <div
      v-if="isShow"
      style="text-align:center;"
    >
      <router-link :to="link" >
        {{ message }}
      </router-link>
    </div>
  </div>
</template>

<script>
  import Question from '../components/Question'
  import Reponse from '../components/Reponse'
  import Score from '../components/Score'

  export default {
    components: {
      ask: Question,
      res: Reponse,
      score: Score
    },
    data () {
      return {
        isShow: false,
        questionnaire: this.$store.getters.getQuestion,
        numero: this.$store.getters.getNumQuestion
      }
    },
    computed: {
      link () {
        return this.$store.getters.numberQuestion === this.numero ? '/resultat' : `/questions/${this.numero + 1}`
      },
      message() {
        return this.$store.getters.numberQuestion === this.numero ? 'Resultat' : 'Question suivante'
      }
    },
    mounted () {
      this.questionnaire = this.$store.getters.getQuestion
    },
    methods: {
      resultat () {
        this.isShow = true;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
