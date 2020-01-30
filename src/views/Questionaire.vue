<template>
  <div>
    <h2>Question {{ getCurrentQuestion }}</h2>
    <ask
      :ask="getQuestion.ask"
      :img="getQuestion.img"
    />
    <res :responses="getQuestion.res" />
    <score />
    <div style="text-align:center; ">
      <button @click="nextQuestion">
        Question suivante
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Question from '../components/Question'
  import Reponse from '../components/Reponse'
  import Score from '../components/Score'

  export default {
    components: {
      ask: Question,
      res: Reponse,
      score: Score
    },
    computed: {
      ...mapGetters({
        getCurrentQuestion:'getCurrentQuestion',
        getQuestion: 'getQuestion'})
    },
    methods: {
      ...mapActions([
        'nextQuestion'
      ]),
      questionSuivante(){
        this.nextQuestion();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
