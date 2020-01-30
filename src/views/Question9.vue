<template>
  <div>
    <h2>Question 9</h2>
    <ask :ask="dataAsk" />
    <res :res="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question10">
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
                dataAsk: "A quoi sert les Guards au niveau du routeur",
                dataRes :"Empecher la navigation vers une route suivant les droit d'un user, CanActivate,CanLoad"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>