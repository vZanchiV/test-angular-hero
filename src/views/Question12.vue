<template>
  <div>
    <h2>Question 12</h2>
    <ask :ask="dataAsk" />
    <res
      :res="dataRes"
      :image="urlImage"
    />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question13">
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
                urlImage:"../assets/ask12.png",
                dataAsk: "A quoi sert la directive ViewChild ?",
                dataRes :"Obtenir une référence vers un élément  du DOM le code de notre composant"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>