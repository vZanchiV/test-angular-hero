<template>
    <div>
        <h2>Question 1</h2>
        <ask  :ask='dataAsk' />
        <res :res='dataRes' />
        <score /> 
         <div style="text-align:center; ">
            <router-link to="/question2">Question suivante</router-link> 
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
                dataAsk: "Quel Directive on utilise  pour passer de la data d'un composant parent à un enfant ?",
                dataRes :"Tu dois utiliser la directive Input() ou @Attribute si la valeur ne change pas"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>