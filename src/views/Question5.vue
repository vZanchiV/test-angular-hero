<template>
  <div>
    <h2>Question 5</h2>
    <ask :ask="dataAsk" />
    <res :res="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question6">
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
                dataAsk: "Quel Module utilise t'on pour Obtenir des données d'une API",
                dataRes :"Le Module Http propose un service nommé HttpClient. et le module HttpClientModule à inject dans  le module racine"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>