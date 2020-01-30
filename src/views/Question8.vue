<template>
  <div>
    <h2>Question 8</h2>
    <ask :ask="dataAsk" />
    <img
      src="../assets/ask8.png"
      alt=""
    >
    <res :res="dataRes" />
    <score /> 
    <div style="text-align:center; ">
      <router-link to="/question9">
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
                dataAsk: "Que vaut i ?",
                dataRes :"6, 8, 10"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>