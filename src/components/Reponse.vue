<template>
    <div class="res">
        <button @click="toggle">Voir la réponse :</button>
        <div  v-if="ToggleOpen" class="res__content">
            <p v-if="res">{{ res }} </p>
            <ul v-if="resList">
                <li v-for="(res,index) in resList" :key="index" >
                    {{res}}
                </li>
            </ul>
            <img v-if="img" :src="urlImage"  alt="" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ToggleOpen: false
            }
        },
        props: {
            res: {
                type: String
            },
            resList: {
                type:Array
            },
            urlImage:{
                type:String
            }
        },
        methods: {
            toggle() {
                this.ToggleOpen = !this.ToggleOpen
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>