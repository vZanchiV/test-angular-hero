<template>
  <div>
    <h2>Question 11</h2>
    <ask :ask="dataAsk" />
    <res :res="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question12">
        Question suivante
      </router-link> 
    </div>
  </div>
</template>

<script>
import Question from '../components/Question';
import Reponse from '../components/Reponse';
import Score from '../components/Score';
    export default {
        components: {
            ask:Question,
            res:Reponse,
            score:Score

        },
        data() {
            return {
                dataAsk: "Comment Spécifier qu'un champ est requis",
                dataRes :"On va utiliser Validator => Validator.required"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>