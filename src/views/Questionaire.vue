<template>
  <div>
    <h2>Question {{ numero }} / {{ nombreQuestion }}</h2>
    <ask
      :question="questionnaire.ask"
    />
    <res :responses="questionnaire.res" />
    <score @resultat="resultat()" />
    <div
      v-if="isShow"
      style="text-align:center;"
    >
      <router-link :to="link">
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
        numero: this.$store.getters.getNumQuestion,
        nombreQuestion: this.$store.getters.numberQuestion
      }
    },
    computed: {
      link () {
        return this.isLastQuestion() ? '/resultat' : `/questions/${this.numero + 1}`
      },
      message() {
        return this.isLastQuestion() ? 'Resultat' : 'Question suivante'
      }
    },
    mounted () {
      this.questionnaire = this.$store.getters.getQuestion
    },
    methods: {
      resultat () {
        this.isShow = true;
      },
      isLastQuestion () {
        return this.nombreQuestion === this.numero
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
