<template>
    <div>
        <h2>Question 19</h2>
        <ask  :ask='dataAsk' />
        <res :res='dataRes' />
        <score /> 
        <div style="text-align:center; ">
            <router-link to="/question20">Question suivante</router-link> 
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
                dataAsk: "Comment peut on enlever ou ajouter dynamiquement des classes sur un élément du DOM",
                dataRes :"NgClass"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>