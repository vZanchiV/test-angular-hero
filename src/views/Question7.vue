<template>
  <div>
    <h2>Question 7</h2>
    <ask :ask="dataAsk" />
    <res :res="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question8">
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
                dataAsk: "Peux tu m'expliquer le concept de programmation réactive",
                dataRes :"C'est une façon de construire une application avec des événements, et d’y réagir.Dans la programmation réactive, tout est un flux. Un flux est une séquence ordonnée d’événements. "
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>