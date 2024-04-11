<script>
export default{
    props:{
        item:{
            type: Object
        }
    }
}

</script>

<template>
    <div class="col33">
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
                                <span class="interest">&hearts;</span>
                            </div>
                            <div class="description">
                                <p class="brand">{{item.brand}}</p>
                                <h6>{{item.name}}</h6>
                                <p v-for="(discount, i) in item.badges" :key="i">
                                    <span v-if="discount.value === '-50%'" class="new-price">{{ (item.price * 0.50).toFixed(2)  }}&euro;</span>
                                    <span v-else-if="discount.value === '-30%'" class="new-price">{{ (item.price * 0.50).toFixed(2)  }}&euro;</span>
                                    <span v-else class="old-price">{{item.price.toFixed(2) }}&euro;</span>
                                </p>
                            </div>
                        </div>
                    </div>

</template>
<style lang="scss" scoped>
    @use './style/general'

</style>