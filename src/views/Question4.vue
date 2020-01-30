<template>
  <div>
    <h2>Question 4</h2>
    <ask :ask="dataAsk" />
    <res :res="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question5">
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
                dataAsk: "Comment communiquer entre deux composants enfant",
                dataRes :"Tu peux utiliser les services avec l'injection de dépendance"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>