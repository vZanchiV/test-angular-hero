<template>
  <div>
    <h2>Question 3</h2>
    <ask :ask="dataAsk" />
    <res :res="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question4">
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
                dataAsk: "Quel est la premiere phase (methode) du cycle de vie appelé",
                dataRes :"ngOnChanges sera la première appelée quand la valeur d’une propriété bindée est modifiée et ngOnInit sera appelée une seule fois après le premier changement"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>