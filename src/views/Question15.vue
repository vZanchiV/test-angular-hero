<template>
    <div>
        <h2>Question 15</h2>
        <ask  :ask='dataAsk' />
        <res :res='dataRes' />
        <score /> 
        <div style="text-align:center; ">
            <router-link to="/question16">Question suivante</router-link> 
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
                dataAsk: "Quel Pipe d'angular permet d'afficher des données obtenues de manières asynchrone ",
                dataRes :"Un pipe async retourne une chaîne de caractères vide jusqu’à ce que les données deviennent disponibles "
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>