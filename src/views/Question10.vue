<template>
    <div>
        <h2>Question 10</h2>
        <ask  :ask='dataAsk' />
        <res :res='dataRes' />
        <score /> 
        <div style="text-align:center; ">
            <router-link to="/question11">Question suivante</router-link> 
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
                dataAsk: "Quel sont les 2 manières de gérer les formulaire ?",
                dataRes :"Piloté par le template et Piloté par le code"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>