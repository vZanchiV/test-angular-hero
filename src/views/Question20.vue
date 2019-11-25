<template>
    <div>
        <h2>Question 20</h2>
        <ask  :ask='dataAsk' />
        <res :res='dataRes' />
        <score /> 
        <div style="text-align:center; ">
            <router-link to="/resultTest">Résultat du Test</router-link> 
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
                dataAsk: "Qu est ce que le AOT (Ahead-Of-Time) Compilation",
                dataRes :"C'est un mode de compilation qui fait gagner beaucoup de temps de rendu car tu écris toujours du TypeScript et du HTML, tu compiles le HTML en TypeScript, puis tout le code TypeScript en JavaScript, puis tu envoies tout le code JS à tes utilisateurs"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>