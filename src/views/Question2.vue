<template>
  <div>
    <h2>Question 2</h2>
    <ask :ask="dataAsk" />
    <res :res-list="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question3">
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
                dataAsk: "Quels sont les étapes pour communiquer d'un composent enfant vers un composent parent'",
                dataRes:[
                    "Déclarer la sortie dans le décorateur 'Output'",
                    "Créer un EventEmitter",
                    "Emettre un événement dans une méthode 'emit()",
                    "Ecouter l'événement sur le composant parent",
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>