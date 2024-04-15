<script>
import {store} from '../store'
import ModalApp from './ModalApp.vue'
export default{
    data(){
        return{
            responeAtClick: false
        }
    },
    components:{
        store,
        ModalApp,
    },
    props:{
        item:{
            type: Object
        }
    },
    methods:{
        addWish(item){
            console.log('hai cliccato')
            item.isInFavorites = !item.isInFavorites
            console.log(item.isInFavorites)
        },
        openModal(){
            this.responeAtClick = true
        }

    }
}

</script>

<template>
    <ModalApp 
    @listenClick="responeAtClick = false"
    :doClick="responeAtClick"
    :item="item"/>

    <div class="photo product">
        <div class="photo-header">
            <img class="main-image" :src="`/img/${item.backImage}`" alt="">
            <img class="second-image" :src="`/img/${item.frontImage}`" alt="">
            <div class="container-info">
                <span 
                v-for="(badge, i) in item.badges"
                    :key="i" 
                    :class="badge.type === 'discount' ?  'discount-red' : 'eco-green' " 
                    class="discount discount-red">
                    {{badge.value}}
                </span>
                <!-- <span class="eco eco-green">{{badge.value}}</span> -->
            </div>
            <span class="interest">
                <span @click="addWish(item)" :class="item.isInFavorites === true ? 'red' : ''" class="hearts">&hearts;</span>
            </span>
        </div>
        <div class="description">
            <p class="brand">{{item.brand}}</p>
            <h6 class="brand_name" @click="openModal()">{{item.name}}</h6>
            <p v-for="(discount, i) in item.badges" :key="i">
                <div v-if="discount.value === '-50%' && discount.type === 'discount'">
                    <span  class="new-price">{{ (item.price - (item.price * 0.50)).toFixed(2)  }}&euro;</span>
                    <span  class="old-price">{{item.price.toFixed(2) }}&euro;</span>
                </div>

                <div v-else-if="discount.value === '-30%' && discount.type === 'discount'">
                    <span  class="new-price">{{ (item.price - (item.price * 0.30)).toFixed(2)  }}&euro;</span>
                    <span  class="old-price">{{item.price.toFixed(2) }}&euro;</span>
                </div>
                <span v-else-if="item.badges.length < 2 && discount.type === 'tag'" class="normal-price">{{ item.price }}&euro;</span>
            </p>
        </div>
    </div>


</template>
<style lang="scss" scoped>
    @use './style/general'

</style>