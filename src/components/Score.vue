<template>
    <div class="wrapperScore">
        <button :disabled="stateRes"  :class="{ disabled: stateRes }" class="btn btn--great" @click="updateScore(2)">Bonne réponse</button>
        <button  :disabled="stateRes" :class="{ disabled: stateRes }" class="btn btn--medium" @click="updateScore(1)">Bonne réponse mais incomplete</button>
        <button :disabled="stateRes"  :class="{ disabled: stateRes }" class="btn btn--bad" @click="updateScoreFalse(1)">Mauvaise réponse</button>
        <button :disabled="stateRes"  :class="{ disabled: stateRes }" class="btn btn--bad" @click="updateScoreNoRes(1)">Pas de réponse</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                stateRes: false
            }
        },
        methods: {
            ...mapActions([
                'upgrateScore',
                'upgrateNbBadRes',
                'upgrateNbNoRes'
            ]),
            updateScore(value) {
                this.upgrateScore(value) 
                this.stateRes = true;
            },
            updateScoreFalse(value) {
                this.upgrateNbBadRes(value) 
                 this.stateRes = true;
            },
            updateScoreNoRes(value){
                this.upgrateNbNoRes(value) 
                 this.stateRes = true;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>