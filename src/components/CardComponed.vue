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
                                    <span class="discount discount-red">-50%</span>
                                    <span class="eco eco-green">sostenibilità</span>
                                </div>
                                <span class="interest">&hearts;</span>
                            </div>
                            <div class="description">
                                <p class="brand">{{item.brand}}</p>
                                <h6>{{item.name}}</h6>
                                <p>
                                    <span class="new-price">14,99&euro;</span>
                                    <span class="old-price">29,99&euro;</span>
                                </p>
                            </div>
                        </div>
                    </div>

</template>
<style lang="scss" scoped>
    @use './style/general'

</style>