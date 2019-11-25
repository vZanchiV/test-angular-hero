<template>
    <div>
        <h2>Question 6</h2>
        <ask  :ask='dataAsk' />
        <res :res='dataRes' />
        <score /> 
        <div style="text-align:center; ">
            <router-link to="/question7">Question suivante</router-link> 
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
                dataAsk: "Que retourne cette requette 'http.get<Array<RaceModel>>(`${baseUrl}/api/races`)'",
                dataRes :"Cela retourne un Observable, et tu peux donc t’y abonner pour obtenir la réponse."
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>