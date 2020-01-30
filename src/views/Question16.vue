<template>
  <div>
    <h2>Question 13</h2>
    <ask :ask="dataAsk" />
    <res :res="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question17">
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
                dataAsk: "Quel est le role d'une directive dans angular ",
                dataRes :"les directives permettent attacher du comportement aux éléments du DOM."
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>