<script>
import HeaderVite from './components/HeaderVite.vue'
import MainVite from './components/MainVite.vue'
import FooterVite from './components/FooterVite.vue'
import {store} from './store'

export default{
  components:{
    HeaderVite,
    MainVite,
    FooterVite,
    store
  }
}

</script>

<template>
  <HeaderVite/>
  <MainVite/>
  <FooterVite/>

</template>

<style>

</style>
