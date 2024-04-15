<template>
    <div v-if="doClick === true" class="container">
        <div class="row">
            <div class="col">
                <h2>{{item.name}}</h2>
                <h3>{{item.brand}}</h3>
                <h4>{{item.price}}</h4>

            </div>
            <!-- collego il click del padre col figlio tramite il $emit(nome a caso) -->
            <span @click="$emit('listenClick')" class="closer">X</span>
            <div class="col">
                <img :src="`/img/${item.backImage}`" alt="">
                <img :src="`/img/${item.frontImage}`" alt="">

            </div>
        </div>
        

    </div>
</template>

<script>
    export default {
        props:{
            item:{
                type: Object
            },
            doClick:{
                type: Boolean,
                default: false
            }
        },
        methods:{
            listenClick(){
                console.log('click')
            }
        }
    }
</script>

<style lang="scss" scoped>
.container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: black, $alpha: 0.8);
    display: flex;
    align-items: center;
    z-index: 1;
}
.row{
    overflow: auto;
    height: 600px;
    width: 500px;
    margin: 0 auto;
    // display: flex;
    background-color: white;
    z-index: 100;
    position: relative;
    padding: 20px;
}
.closer{
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
}
.col{
//    display: flex;
}

img{
    max-width: 100%;
    max-height: 300px;
    
}
</style>