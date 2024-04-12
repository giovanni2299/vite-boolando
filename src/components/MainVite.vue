<script>
import CardComponed from './CardComponed.vue';
import axios from 'axios'
import {store} from '../store'

export default {
    components:{
        CardComponed,
        
        
    },
    data() {
        return {
            products: store.products,
            
            
        }
    },
    mounted(){
        axios.get('http://localhost:3000/products').then((response) =>{
            for(let i = 0; i < response.data.length; i++){
                const result = response.data[i]
                this.products.push(result)
            }
            // const result = response.data
            // this.store.data = result 
            // console.log(response)
        })

        console.log(this.products)
    }
   
};
</script>

<template>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col33"  v-for="(item, i) in products " :key="item.id">
                        <CardComponed  :item="item"  />
                        <!-- <div class="photo product">
                            <div class="photo-header">
                                <img class="main-image" src=".././assets/img/1b.webp" alt="">
                                <img class="second-image" src=".././assets/img/1.webp" alt="">
                                <div class="container-info">
                                    <span class="discount discount-red">-50%</span>
                                    <span class="eco eco-green">sostenibilità</span>
                                </div>
                                <span class="interest">&hearts;</span>
                            </div>
                            <div class="description">
                                <p class="brand">levi's</p>
                                <h6>RELAXED FIT TEE UNISEX</h6>
                                <p>
                                    <span class="new-price">14,99&euro;</span>
                                    <span class="old-price">29,99&euro;</span>
                                </p>
                            </div>
                        </div> -->
                    </div>

                    <!-- <div class="col33">
                        <div class="photo product">
                            <div class="photo-header">
                                <img class="main-image" src=".././assets/img/2b.webp" alt="">
                                <img class="second-image" src=".././assets/img/2.webp" alt="">
                                <div class="container-info">
                                    <span class="discount discount-red">-50%</span>
                                    
                                </div>
                                <span class="interest">&hearts;</span>
                            </div>
                            <div class="description">
                                <p class="brand">Guess</p>
                                <h6>ROSES TEE</h6>
                                <p>
                                    <span class="new-price">20,99&euro;</span>
                                    <span class="old-price">29,99&euro;</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col33">
                        <div class="photo product">
                            <div class="photo-header">
                                <img class="main-image" src=".././assets/img/3b.webp" alt="">
                                <img class="second-image" src=".././assets/img/3.webp" alt="">
                                <div class="container-info">
                                    <span class="discount discount-red">-50%</span>
                                    
                                </div>
                                <span class="interest">&hearts;</span>
                            </div>
                            <div class="description">
                                <p class="brand">Come Zucchero Filato</p>
                                <h6>VOGLIA DI COLORI PASTELLO</h6>
                                <p>
                                    <span class="new-price">129,99&euro;</span>
                                    <span class="old-price">184,99&euro;</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col33">
                        <div class="photo product">
                            <div class="photo-header">
                                <img class="main-image" src=".././assets/img/4b.webp" alt="">
                                <img class="second-image" src=".././assets/img/4.webp" alt="">
                                <div class="container-info">
                                    <span class="discount discount-red">-50%</span>
                                    <span class="eco eco-green">sostenibilità</span>
                                </div>
                                <span class="interest">&hearts;</span>
                            </div>
                            <div class="description">
                                <p class="brand">levi's</p>
                                <h6>TEE UNISEX</h6>
                                <p>
                                    <span class="new-price">14,99&euro;</span>
                                    <span class="old-price">29,99&euro;</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col33">
                        <div class="photo product">
                            <div class="photo-header">
                                <img class="main-image" src=".././assets/img/5b.webp" alt="">
                                <img class="second-image" src=".././assets/img/5.webp" alt="">
                                <div class="container-info">
                                   
                                </div>
                                <span class="interest">&hearts;</span>
                            </div>
                            <div class="description">
                                <p class="brand">Maya Deluxe</p>
                                <h6>STRIPE BODICE</h6>
                                <p>
                                    <span class="new-price">99,99&euro;</span>
                                    
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col33">
                        <div class="photo product">
                            <div class="photo-header">
                                <img class="main-image" src=".././assets/img/6b.webp" alt="">
                                <img class="second-image" src=".././assets/img/6.webp" alt="">
                                <div class="container-info">
                                    
                                    <span class="eco eco-green">sostenibilità</span>
                                </div>
                                <span class="interest">&hearts;</span>
                            </div>
                            <div class="description">
                                <p class="brand">Esprit</p>
                                <h6>MAGLIONE - BLACK</h6>
                                <p>
                                    <span class="new-price">29,99&euro;</span>
                                    
                                </p>
                            </div>
                        </div>
                    </div> -->


                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use './style/general'
</style>