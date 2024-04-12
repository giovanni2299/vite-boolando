import {reactive} from 'vue'
import {products} from '/db.json'
import axios from 'axios'

export default{
    data(){
        return{
    
            products:[]
        }
    }

}

export const store = reactive({
    products
        
    
   
})

