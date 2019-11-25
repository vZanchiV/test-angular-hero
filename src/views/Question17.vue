<template>
    <div>
        <h2>Question 17</h2>
        <ask  :ask='dataAsk' />
        <res :res='dataRes' />
        <score /> 
        <div style="text-align:center; ">
            <router-link to="/question18">Question suivante</router-link> 
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
                dataAsk: "Angular fonctione en TypeScript, peux tu me cité tous les types ",
                dataRes :"Boolean, Number, String, Array, Tuple, Enum, Any,Void"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>