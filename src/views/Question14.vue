<template>
  <div>
    <h2>Question 14</h2>
    <ask :ask="dataAsk" />
    <res :res-list="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question15">
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
                dataAsk: "Quel strategie de detection de changement peux t'aider à optimiser les performances de ton applications",
                dataRes:[
                    "ChangeDetectionStrategy.OnPush => détection de changements sur ce composant que si la référence de l'input est modifiée",
                    "le composant sera vérifié que lorsque l’un des inputs du composant a changé (pour être plus précis, lorsque la référence d’une input a changé)",
                    "lorsqu’un gestionnaire d’événement du composant a été déclenché.",
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>