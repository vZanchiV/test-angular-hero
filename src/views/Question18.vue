<template>
    <div>
        <h2>Question 18</h2>
        <ask  :ask='dataAsk' />
        <res :res='dataRes' />
        <score /> 
        <div style="text-align:center; ">
            <router-link to="/question19">Question suivante</router-link> 
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
                dataAsk: "Quel moyen met à notre disposition angular pour analyser chaque demande  et réponse http ",
                dataRes :"Un Intercepteur HTTP"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>